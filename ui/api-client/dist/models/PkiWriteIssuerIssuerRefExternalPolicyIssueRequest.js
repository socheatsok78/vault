"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum = exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum = exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum = void 0;
exports.instanceOfPkiWriteIssuerIssuerRefExternalPolicyIssueRequest = instanceOfPkiWriteIssuerIssuerRefExternalPolicyIssueRequest;
exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFromJSON = PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFromJSON;
exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFromJSONTyped = PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFromJSONTyped;
exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestToJSON = PkiWriteIssuerIssuerRefExternalPolicyIssueRequestToJSON;
exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestToJSONTyped = PkiWriteIssuerIssuerRefExternalPolicyIssueRequestToJSONTyped;
/**
* @export
* @enum {string}
*/
var PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum) {
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum["PEM"] = "pem";
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum["DER"] = "der";
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum["PEM_BUNDLE"] = "pem_bundle";
})(PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum || (exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum = PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFormatEnum = {}));
/**
* @export
* @enum {string}
*/
var PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum) {
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum["RSA"] = "rsa";
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum["EC"] = "ec";
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum["ED25519"] = "ed25519";
})(PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum || (exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum = PkiWriteIssuerIssuerRefExternalPolicyIssueRequestKeyTypeEnum = {}));
/**
* @export
* @enum {string}
*/
var PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum;
(function (PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum) {
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum["DER"] = "der";
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum["PEM"] = "pem";
    PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum["PKCS8"] = "pkcs8";
})(PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum || (exports.PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum = PkiWriteIssuerIssuerRefExternalPolicyIssueRequestPrivateKeyFormatEnum = {}));
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyIssueRequest interface.
 */
function instanceOfPkiWriteIssuerIssuerRefExternalPolicyIssueRequest(value) {
    return true;
}
function PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFromJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFromJSONTyped(json, false);
}
function PkiWriteIssuerIssuerRefExternalPolicyIssueRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return Object.assign(Object.assign({}, json), { 'format': json['format'] == null ? undefined : json['format'], 'keyBits': json['key_bits'] == null ? undefined : json['key_bits'], 'keyType': json['key_type'] == null ? undefined : json['key_type'], 'privateKeyFormat': json['private_key_format'] == null ? undefined : json['private_key_format'], 'removeRootsFromChain': json['remove_roots_from_chain'] == null ? undefined : json['remove_roots_from_chain'] });
}
function PkiWriteIssuerIssuerRefExternalPolicyIssueRequestToJSON(json) {
    return PkiWriteIssuerIssuerRefExternalPolicyIssueRequestToJSONTyped(json, false);
}
function PkiWriteIssuerIssuerRefExternalPolicyIssueRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return Object.assign(Object.assign({}, value), { 'format': value['format'], 'key_bits': value['keyBits'], 'key_type': value['keyType'], 'private_key_format': value['privateKeyFormat'], 'remove_roots_from_chain': value['removeRootsFromChain'] });
}
