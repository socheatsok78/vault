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
 * @interface SystemWriteSyncDestinationsInMemNameRequest
 */
export interface SystemWriteSyncDestinationsInMemNameRequest {
    /**
     * Sets which IPv4 addresses Vault is allowed to connect to for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemWriteSyncDestinationsInMemNameRequest
     */
    allowedIpv4Addresses?: Array<string>;
    /**
     * Sets which IPv6 addresses Vault is allowed to connect to for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemWriteSyncDestinationsInMemNameRequest
     */
    allowedIpv6Addresses?: Array<string>;
    /**
     * Sets which port numbers Vault is allowed to connect through for syncing secrets.
     * @type {Array<string>}
     * @memberof SystemWriteSyncDestinationsInMemNameRequest
     */
    allowedPorts?: Array<string>;
    /**
     * Allows all IP addresses and ports to be connected to for syncing secrets.
     * @type {boolean}
     * @memberof SystemWriteSyncDestinationsInMemNameRequest
     */
    disableStrictNetworking?: boolean;
    /**
     * Determines what level of information is synced as a distinct resource at the destination. Supports `secret-path` and `secret-key`.
     * @type {string}
     * @memberof SystemWriteSyncDestinationsInMemNameRequest
     */
    granularity?: string;
    /**
     * Asynchronously unsyncs all associated secrets with the destination then deletes the destination config.
     * @type {boolean}
     * @memberof SystemWriteSyncDestinationsInMemNameRequest
     */
    purge?: boolean;
    /**
     * Template describing how to generate external secret names. Supports a subset of the Go Template syntax.
     * @type {string}
     * @memberof SystemWriteSyncDestinationsInMemNameRequest
     */
    secretNameTemplate?: string;
}
/**
 * Check if a given object implements the SystemWriteSyncDestinationsInMemNameRequest interface.
 */
export declare function instanceOfSystemWriteSyncDestinationsInMemNameRequest(value: object): value is SystemWriteSyncDestinationsInMemNameRequest;
export declare function SystemWriteSyncDestinationsInMemNameRequestFromJSON(json: any): SystemWriteSyncDestinationsInMemNameRequest;
export declare function SystemWriteSyncDestinationsInMemNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteSyncDestinationsInMemNameRequest;
export declare function SystemWriteSyncDestinationsInMemNameRequestToJSON(json: any): SystemWriteSyncDestinationsInMemNameRequest;
export declare function SystemWriteSyncDestinationsInMemNameRequestToJSONTyped(value?: SystemWriteSyncDestinationsInMemNameRequest | null, ignoreDiscriminator?: boolean): any;
