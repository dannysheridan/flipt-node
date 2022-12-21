/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../environments";
import * as core from "../../../core";
import { FliptApi } from "@flipt-io/flipt";
import urlJoin from "url-join";
import * as serializers from "../../../serialization";

export declare namespace Client {
  interface Options {
    environment?: environments.Environment | string;
    token?: core.Supplier<core.BearerToken>;
  }
}

export class Client {
  constructor(private readonly options: Client.Options) {}

  public async evaluate(request: FliptApi.EvaluationRequest): Promise<FliptApi.evaluate.evaluate.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/api/v1/evaluate"),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.evaluate.evaluate.Request.json(request),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.evaluate.evaluate.Response.parse(
          _response.body as serializers.evaluate.evaluate.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: FliptApi.evaluate.evaluate.Error._unknown(_response.error),
    };
  }

  public async batchEvaluate(
    request: FliptApi.BatchEvaluationRequest
  ): Promise<FliptApi.evaluate.batchEvaluate.Response> {
    const _response = await core.fetcher({
      url: urlJoin(this.options.environment ?? environments.Environment.Production, "/api/v1/batch-evaluate"),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.evaluate.batchEvaluate.Request.json({
        requestId: request.requestId,
        requests: request.requests,
        excludeNotFound: request.excludeNotFound,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.evaluate.batchEvaluate.Response.parse(
          _response.body as serializers.evaluate.batchEvaluate.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: FliptApi.evaluate.batchEvaluate.Error._unknown(_response.error),
    };
  }
}
