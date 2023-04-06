/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../../core";

export const AuthenticationExpireSelfRequest: core.serialization.Schema<
    serializers.AuthenticationExpireSelfRequest.Raw,
    FliptApi.AuthenticationExpireSelfRequest
> = core.serialization.object({
    expiresAt: core.serialization.date().optional(),
});

export declare namespace AuthenticationExpireSelfRequest {
    interface Raw {
        expiresAt?: string | null;
    }
}
