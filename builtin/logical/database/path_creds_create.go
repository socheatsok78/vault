package database

import (
	"context"
	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"fmt"
	"time"

	"github.com/hashicorp/go-secure-stdlib/strutil"
	v5 "github.com/hashicorp/vault/sdk/database/dbplugin/v5"
	"github.com/hashicorp/vault/sdk/framework"
	"github.com/hashicorp/vault/sdk/logical"
)

func pathCredsCreate(b *databaseBackend) []*framework.Path {
	return []*framework.Path{
		{
			Pattern: "creds/" + framework.GenericNameRegex("name"),
			Fields: map[string]*framework.FieldSchema{
				"name": {
					Type:        framework.TypeString,
					Description: "Name of the role.",
				},
			},

			Callbacks: map[logical.Operation]framework.OperationFunc{
				logical.ReadOperation: b.pathCredsCreateRead(),
			},

			HelpSynopsis:    pathCredsCreateReadHelpSyn,
			HelpDescription: pathCredsCreateReadHelpDesc,
		},
		{
			Pattern: "static-creds/" + framework.GenericNameRegex("name"),
			Fields: map[string]*framework.FieldSchema{
				"name": {
					Type:        framework.TypeString,
					Description: "Name of the static role.",
				},
			},

			Callbacks: map[logical.Operation]framework.OperationFunc{
				logical.ReadOperation: b.pathStaticCredsRead(),
			},

			HelpSynopsis:    pathStaticCredsReadHelpSyn,
			HelpDescription: pathStaticCredsReadHelpDesc,
		},
	}
}

func (b *databaseBackend) pathCredsCreateRead() framework.OperationFunc {
	return func(ctx context.Context, req *logical.Request, data *framework.FieldData) (*logical.Response, error) {
		name := data.Get("name").(string)

		// Get the role
		role, err := b.Role(ctx, req.Storage, name)
		if err != nil {
			return nil, err
		}
		if role == nil {
			return logical.ErrorResponse(fmt.Sprintf("unknown role: %s", name)), nil
		}

		dbConfig, err := b.DatabaseConfig(ctx, req.Storage, role.DBName)
		if err != nil {
			return nil, err
		}

		// If role name isn't in the database's allowed roles, send back a
		// permission denied.
		if !strutil.StrListContains(dbConfig.AllowedRoles, "*") && !strutil.StrListContainsGlob(dbConfig.AllowedRoles, name) {
			return nil, fmt.Errorf("%q is not an allowed role", name)
		}

		// Get the Database object
		dbi, err := b.GetConnection(ctx, req.Storage, role.DBName)
		if err != nil {
			return nil, err
		}

		dbi.RLock()
		defer dbi.RUnlock()

		ttl, _, err := framework.CalculateTTL(b.System(), 0, role.DefaultTTL, 0, role.MaxTTL, 0, time.Time{})
		if err != nil {
			return nil, err
		}
		expiration := time.Now().Add(ttl)
		// Adding a small buffer since the TTL will be calculated again after this call
		// to ensure the database credential does not expire before the lease
		expiration = expiration.Add(5 * time.Second)

		newUserReq := v5.NewUserRequest{
			UsernameConfig: v5.UsernameMetadata{
				DisplayName: req.DisplayName,
				RoleName:    name,
			},
			Statements: v5.Statements{
				Commands: role.Statements.Creation,
			},
			RollbackStatements: v5.Statements{
				Commands: role.Statements.Rollback,
			},
			Expiration: expiration,
		}

		// Set the credential, which will either be a password or private key
		// depending on the role's credential type.
		var credential string
		switch role.CredentialType {
		case v5.CredentialTypePassword:
			password, err := dbi.database.GeneratePassword(ctx, b.System(), dbConfig.PasswordPolicy)
			if err != nil {
				b.CloseIfShutdown(dbi, err)
				return nil, fmt.Errorf("unable to generate password: %w", err)
			}

			credential = password
			newUserReq.Password = credential
			newUserReq.CredentialType = v5.CredentialTypePassword
		case v5.CredentialTypeRSA2048Keypair:
			public, private, err := b.generateRSAKeypair(2048)
			if err != nil {
				b.CloseIfShutdown(dbi, err)
				return nil, fmt.Errorf("unable to generate keypair: %w", err)
			}

			credential = string(private)
			newUserReq.PublicKey = string(public)
			newUserReq.CredentialType = v5.CredentialTypeRSA2048Keypair
		}

		// Overwriting the password in the event this is a legacy database
		// plugin and the provided password is ignored
		newUserResp, password, err := dbi.database.NewUser(ctx, newUserReq)
		if err != nil {
			b.CloseIfShutdown(dbi, err)
			return nil, err
		}

		// Database plugins using the v4 interface generate and return the password.
		// If the returned password is not equal to the credential, then we need to
		// set the credential to the password returned from the v4 database plugin.
		if role.CredentialType == v5.CredentialTypePassword && password != credential {
			credential = password
		}

		respData := map[string]interface{}{
			"username": newUserResp.Username,
		}

		switch role.CredentialType {
		case v5.CredentialTypePassword:
			respData["password"] = credential
		case v5.CredentialTypeRSA2048Keypair:
			respData["private_key"] = credential
		}

		internal := map[string]interface{}{
			"username":              newUserResp.Username,
			"role":                  name,
			"db_name":               role.DBName,
			"revocation_statements": role.Statements.Revocation,
		}
		resp := b.Secret(SecretCredsType).Response(respData, internal)
		resp.Secret.TTL = role.DefaultTTL
		resp.Secret.MaxTTL = role.MaxTTL
		return resp, nil
	}
}

func (b *databaseBackend) pathStaticCredsRead() framework.OperationFunc {
	return func(ctx context.Context, req *logical.Request, data *framework.FieldData) (*logical.Response, error) {
		name := data.Get("name").(string)

		role, err := b.StaticRole(ctx, req.Storage, name)
		if err != nil {
			return nil, err
		}
		if role == nil {
			return logical.ErrorResponse("unknown role: %s", name), nil
		}

		dbConfig, err := b.DatabaseConfig(ctx, req.Storage, role.DBName)
		if err != nil {
			return nil, err
		}

		// If role name isn't in the database's allowed roles, send back a
		// permission denied.
		if !strutil.StrListContains(dbConfig.AllowedRoles, "*") && !strutil.StrListContainsGlob(dbConfig.AllowedRoles, name) {
			return nil, fmt.Errorf("%q is not an allowed role", name)
		}

		return &logical.Response{
			Data: map[string]interface{}{
				"username":            role.StaticAccount.Username,
				"password":            role.StaticAccount.Password,
				"ttl":                 role.StaticAccount.PasswordTTL().Seconds(),
				"rotation_period":     role.StaticAccount.RotationPeriod.Seconds(),
				"last_vault_rotation": role.StaticAccount.LastVaultRotation,
			},
		}, nil
	}
}

// generateRSAKeypair returns PEM encodings of an RSA public and private key pair.
// The first return value is the PEM encoding of the PKIX marshalled public key.
// The second return value is the PEM encoding of the PKCS #8 marshalled private key.
func (b *databaseBackend) generateRSAKeypair(bits int) ([]byte, []byte, error) {
	key, err := rsa.GenerateKey(rand.Reader, bits)
	if err != nil {
		return nil, nil, err
	}

	// Marshal the public key to PKIX, ASN.1 DER form.
	public, err := x509.MarshalPKIXPublicKey(key.Public())
	if err != nil {
		return nil, nil, err
	}

	// Marshal the private key to PKCS #8, ASN.1 DER form
	private, err := x509.MarshalPKCS8PrivateKey(key)
	if err != nil {
		return nil, nil, err
	}

	// Create PEM blocks
	publicBlock := &pem.Block{
		Type:  "PUBLIC KEY",
		Bytes: public,
	}
	privateBlock := &pem.Block{
		Type:  "PRIVATE KEY",
		Bytes: private,
	}

	// TODO: x509.EncryptPEMBlock is deprecated, so not sure how we'll support
	//       password encrypted private keys quite yet.

	return pem.EncodeToMemory(publicBlock), pem.EncodeToMemory(privateBlock), nil
}

const pathCredsCreateReadHelpSyn = `
Request database credentials for a certain role.
`

const pathCredsCreateReadHelpDesc = `
This path reads database credentials for a certain role. The
database credentials will be generated on demand and will be automatically
revoked when the lease is up.
`

const pathStaticCredsReadHelpSyn = `
Request database credentials for a certain static role. These credentials are
rotated periodically.
`

const pathStaticCredsReadHelpDesc = `
This path reads database credentials for a certain static role. The database
credentials are rotated periodically according to their configuration, and will
return the same password until they are rotated.
`
