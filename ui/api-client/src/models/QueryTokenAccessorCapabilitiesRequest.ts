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
 * @interface QueryTokenAccessorCapabilitiesRequest
 */
export interface QueryTokenAccessorCapabilitiesRequest {
    /**
     * Accessor of the token for which capabilities are being queried.
     * @type {string}
     * @memberof QueryTokenAccessorCapabilitiesRequest
     */
    accessor?: string;
    /**
     * Use 'paths' instead.
     * @type {Array<string>}
     * @memberof QueryTokenAccessorCapabilitiesRequest
     * @deprecated
     */
    path?: Array<string>;
    /**
     * Paths on which capabilities are being queried.
     * @type {Array<string>}
     * @memberof QueryTokenAccessorCapabilitiesRequest
     */
    paths?: Array<string>;
}

/**
 * Check if a given object implements the QueryTokenAccessorCapabilitiesRequest interface.
 */
export function instanceOfQueryTokenAccessorCapabilitiesRequest(value: object): value is QueryTokenAccessorCapabilitiesRequest {
    return true;
}

export function QueryTokenAccessorCapabilitiesRequestFromJSON(json: any): QueryTokenAccessorCapabilitiesRequest {
    return QueryTokenAccessorCapabilitiesRequestFromJSONTyped(json, false);
}

export function QueryTokenAccessorCapabilitiesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryTokenAccessorCapabilitiesRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'accessor': json['accessor'] == null ? undefined : json['accessor'],
        'path': json['path'] == null ? undefined : json['path'],
        'paths': json['paths'] == null ? undefined : json['paths'],
    };
}

export function QueryTokenAccessorCapabilitiesRequestToJSON(json: any): QueryTokenAccessorCapabilitiesRequest {
    return QueryTokenAccessorCapabilitiesRequestToJSONTyped(json, false);
}

export function QueryTokenAccessorCapabilitiesRequestToJSONTyped(value?: QueryTokenAccessorCapabilitiesRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'accessor': value['accessor'],
        'path': value['path'],
        'paths': value['paths'],
    };
}

