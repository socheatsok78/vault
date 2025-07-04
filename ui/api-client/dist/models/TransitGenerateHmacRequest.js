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
exports.instanceOfTransitGenerateHmacRequest = instanceOfTransitGenerateHmacRequest;
exports.TransitGenerateHmacRequestFromJSON = TransitGenerateHmacRequestFromJSON;
exports.TransitGenerateHmacRequestFromJSONTyped = TransitGenerateHmacRequestFromJSONTyped;
exports.TransitGenerateHmacRequestToJSON = TransitGenerateHmacRequestToJSON;
exports.TransitGenerateHmacRequestToJSONTyped = TransitGenerateHmacRequestToJSONTyped;
/**
 * Check if a given object implements the TransitGenerateHmacRequest interface.
 */
function instanceOfTransitGenerateHmacRequest(value) {
    return true;
}
function TransitGenerateHmacRequestFromJSON(json) {
    return TransitGenerateHmacRequestFromJSONTyped(json, false);
}
function TransitGenerateHmacRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'algorithm': json['algorithm'] == null ? undefined : json['algorithm'],
        'batchInput': json['batch_input'] == null ? undefined : json['batch_input'],
        'input': json['input'] == null ? undefined : json['input'],
        'keyVersion': json['key_version'] == null ? undefined : json['key_version'],
    };
}
function TransitGenerateHmacRequestToJSON(json) {
    return TransitGenerateHmacRequestToJSONTyped(json, false);
}
function TransitGenerateHmacRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'algorithm': value['algorithm'],
        'batch_input': value['batchInput'],
        'input': value['input'],
        'key_version': value['keyVersion'],
    };
}
