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
 * Check if a given object implements the RawReadResponse interface.
 */
export function instanceOfRawReadResponse(value) {
    return true;
}
export function RawReadResponseFromJSON(json) {
    return RawReadResponseFromJSONTyped(json, false);
}
export function RawReadResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'value': json['value'] == null ? undefined : json['value'],
    };
}
export function RawReadResponseToJSON(json) {
    return RawReadResponseToJSONTyped(json, false);
}
export function RawReadResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'value': value['value'],
    };
}
