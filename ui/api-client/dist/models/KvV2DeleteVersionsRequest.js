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
exports.instanceOfKvV2DeleteVersionsRequest = instanceOfKvV2DeleteVersionsRequest;
exports.KvV2DeleteVersionsRequestFromJSON = KvV2DeleteVersionsRequestFromJSON;
exports.KvV2DeleteVersionsRequestFromJSONTyped = KvV2DeleteVersionsRequestFromJSONTyped;
exports.KvV2DeleteVersionsRequestToJSON = KvV2DeleteVersionsRequestToJSON;
exports.KvV2DeleteVersionsRequestToJSONTyped = KvV2DeleteVersionsRequestToJSONTyped;
/**
 * Check if a given object implements the KvV2DeleteVersionsRequest interface.
 */
function instanceOfKvV2DeleteVersionsRequest(value) {
    return true;
}
function KvV2DeleteVersionsRequestFromJSON(json) {
    return KvV2DeleteVersionsRequestFromJSONTyped(json, false);
}
function KvV2DeleteVersionsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'versions': json['versions'] == null ? undefined : json['versions'],
    };
}
function KvV2DeleteVersionsRequestToJSON(json) {
    return KvV2DeleteVersionsRequestToJSONTyped(json, false);
}
function KvV2DeleteVersionsRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'versions': value['versions'],
    };
}
