/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { FliptApi } from "@flipt-io/flipt";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Distributions {
    interface Options {
        environment?: environments.FliptApiEnvironment | string;
        token?: core.Supplier<core.BearerToken | undefined>;
    }
}

export class Distributions {
    constructor(private readonly options: Distributions.Options) {}

    public async create(
        flagKey: string,
        ruleId: string,
        request: FliptApi.DistributionCreateRequest
    ): Promise<FliptApi.Distribution> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/flags/${flagKey}/rules/${ruleId}/distributions/`
            ),
            method: "POST",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.DistributionCreateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Distribution.parseOrThrow(_response.body as serializers.Distribution.Raw, {
                allowUnknownKeys: true,
            });
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

    public async delete(
        flagKey: string,
        ruleId: string,
        id: string,
        request: FliptApi.DistributionDeleteRequest
    ): Promise<void> {
        const { variantId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("variantId", variantId);
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/flags/${flagKey}/rules/${ruleId}/distributions//${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return;
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

    public async update(
        flagKey: string,
        ruleId: string,
        id: string,
        request: FliptApi.DistributionUpdateRequest
    ): Promise<FliptApi.Distribution> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.FliptApiEnvironment.Production,
                `/api/v1/flags/${flagKey}/rules/${ruleId}/distributions//${id}`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.DistributionUpdateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.Distribution.parseOrThrow(_response.body as serializers.Distribution.Raw, {
                allowUnknownKeys: true,
            });
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
