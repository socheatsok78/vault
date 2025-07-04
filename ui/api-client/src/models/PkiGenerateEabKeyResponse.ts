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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PkiGenerateEabKeyResponse
 */
export interface PkiGenerateEabKeyResponse {
    /**
     * The ACME directory to which the key belongs
     * @type {string}
     * @memberof PkiGenerateEabKeyResponse
     */
    acmeDirectory?: string;
    /**
     * An RFC3339 formatted date time when the EAB token was created
     * @type {Date}
     * @memberof PkiGenerateEabKeyResponse
     */
    createdOn?: Date;
    /**
     * The EAB key identifier
     * @type {string}
     * @memberof PkiGenerateEabKeyResponse
     */
    id?: string;
    /**
     * The EAB hmac key
     * @type {string}
     * @memberof PkiGenerateEabKeyResponse
     */
    key?: string;
    /**
     * The EAB key type
     * @type {string}
     * @memberof PkiGenerateEabKeyResponse
     */
    keyType?: string;
}

/**
 * Check if a given object implements the PkiGenerateEabKeyResponse interface.
 */
export function instanceOfPkiGenerateEabKeyResponse(value: object): value is PkiGenerateEabKeyResponse {
    return true;
}

export function PkiGenerateEabKeyResponseFromJSON(json: any): PkiGenerateEabKeyResponse {
    return PkiGenerateEabKeyResponseFromJSONTyped(json, false);
}

export function PkiGenerateEabKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiGenerateEabKeyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'acmeDirectory': json['acme_directory'] == null ? undefined : json['acme_directory'],
        'createdOn': json['created_on'] == null ? undefined : (new Date(json['created_on'])),
        'id': json['id'] == null ? undefined : json['id'],
        'key': json['key'] == null ? undefined : json['key'],
        'keyType': json['key_type'] == null ? undefined : json['key_type'],
    };
}

export function PkiGenerateEabKeyResponseToJSON(json: any): PkiGenerateEabKeyResponse {
    return PkiGenerateEabKeyResponseToJSONTyped(json, false);
}

export function PkiGenerateEabKeyResponseToJSONTyped(value?: PkiGenerateEabKeyResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'acme_directory': value['acmeDirectory'],
        'created_on': value['createdOn'] == null ? undefined : ((value['createdOn']).toISOString()),
        'id': value['id'],
        'key': value['key'],
        'key_type': value['keyType'],
    };
}

