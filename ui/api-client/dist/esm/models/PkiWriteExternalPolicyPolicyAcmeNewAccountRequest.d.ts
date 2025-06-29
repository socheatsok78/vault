/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface PkiWriteExternalPolicyPolicyAcmeNewAccountRequest
 */
export interface PkiWriteExternalPolicyPolicyAcmeNewAccountRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyPolicyAcmeNewAccountRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyPolicyAcmeNewAccountRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteExternalPolicyPolicyAcmeNewAccountRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteExternalPolicyPolicyAcmeNewAccountRequest interface.
 */
export declare function instanceOfPkiWriteExternalPolicyPolicyAcmeNewAccountRequest(value: object): value is PkiWriteExternalPolicyPolicyAcmeNewAccountRequest;
export declare function PkiWriteExternalPolicyPolicyAcmeNewAccountRequestFromJSON(json: any): PkiWriteExternalPolicyPolicyAcmeNewAccountRequest;
export declare function PkiWriteExternalPolicyPolicyAcmeNewAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteExternalPolicyPolicyAcmeNewAccountRequest;
export declare function PkiWriteExternalPolicyPolicyAcmeNewAccountRequestToJSON(json: any): PkiWriteExternalPolicyPolicyAcmeNewAccountRequest;
export declare function PkiWriteExternalPolicyPolicyAcmeNewAccountRequestToJSONTyped(value?: PkiWriteExternalPolicyPolicyAcmeNewAccountRequest | null, ignoreDiscriminator?: boolean): any;
