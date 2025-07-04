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
exports.instanceOfReadWrappingPropertiesRequest = instanceOfReadWrappingPropertiesRequest;
exports.ReadWrappingPropertiesRequestFromJSON = ReadWrappingPropertiesRequestFromJSON;
exports.ReadWrappingPropertiesRequestFromJSONTyped = ReadWrappingPropertiesRequestFromJSONTyped;
exports.ReadWrappingPropertiesRequestToJSON = ReadWrappingPropertiesRequestToJSON;
exports.ReadWrappingPropertiesRequestToJSONTyped = ReadWrappingPropertiesRequestToJSONTyped;
/**
 * Check if a given object implements the ReadWrappingPropertiesRequest interface.
 */
function instanceOfReadWrappingPropertiesRequest(value) {
    return true;
}
function ReadWrappingPropertiesRequestFromJSON(json) {
    return ReadWrappingPropertiesRequestFromJSONTyped(json, false);
}
function ReadWrappingPropertiesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'token': json['token'] == null ? undefined : json['token'],
    };
}
function ReadWrappingPropertiesRequestToJSON(json) {
    return ReadWrappingPropertiesRequestToJSONTyped(json, false);
}
function ReadWrappingPropertiesRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'token': value['token'],
    };
}
