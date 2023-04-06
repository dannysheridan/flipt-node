/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../core";

export const OidcAuthorizeUrlResponse: core.serialization.ObjectSchema<
    serializers.OidcAuthorizeUrlResponse.Raw,
    FliptApi.OidcAuthorizeUrlResponse
> = core.serialization.object({
    authorizeUrl: core.serialization.string(),
});

export declare namespace OidcAuthorizeUrlResponse {
    interface Raw {
        authorizeUrl: string;
    }
}
