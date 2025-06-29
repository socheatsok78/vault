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
/**
 * Check if a given object implements the TransitConfigureCacheRequest interface.
 */
export function instanceOfTransitConfigureCacheRequest(value) {
    return true;
}
export function TransitConfigureCacheRequestFromJSON(json) {
    return TransitConfigureCacheRequestFromJSONTyped(json, false);
}
export function TransitConfigureCacheRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'size': json['size'] == null ? undefined : json['size'],
    };
}
export function TransitConfigureCacheRequestToJSON(json) {
    return TransitConfigureCacheRequestToJSONTyped(json, false);
}
export function TransitConfigureCacheRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'size': value['size'],
    };
}
