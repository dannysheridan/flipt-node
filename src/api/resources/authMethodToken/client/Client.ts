/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { FliptApi } from "@flipt-io/flipt";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace AuthMethodToken {
    interface Options {
        environment?: environments.FliptApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class AuthMethodToken {
    constructor(private readonly options: AuthMethodToken.Options) {}

    public async createToken(
        request: FliptApi.AuthenticationTokenCreateRequest
    ): Promise<FliptApi.AuthenticationToken> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                "/auth/v1/method/token"
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.AuthenticationTokenCreateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.AuthenticationToken.parseOrThrow(
                _response.body as serializers.AuthenticationToken.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.FliptApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.FliptApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.FliptApiTimeoutError();
            case "unknown":
                throw new errors.FliptApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
