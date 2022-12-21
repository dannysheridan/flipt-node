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

  public async create(
    flagKey: string,
    request: FliptApi.VariantCreateRequest
  ): Promise<FliptApi.variants.create.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/api/v1/flags/${flagKey}/variants/`
      ),
      method: "POST",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.variants.create.Request.json({
        key: request.key,
        name: request.name,
        description: request.description,
        attachment: request.attachment,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.variants.create.Response.parse(
          _response.body as serializers.variants.create.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: FliptApi.variants.create.Error._unknown(_response.error),
    };
  }

  public async delete(flagKey: string, id: string): Promise<FliptApi.variants.delete.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/api/v1/flags/${flagKey}/variants//${id}`
      ),
      method: "DELETE",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
    });
    if (_response.ok) {
      return {
        ok: true,
        body: undefined,
      };
    }

    return {
      ok: false,
      error: FliptApi.variants.delete.Error._unknown(_response.error),
    };
  }

  public async update(
    flagKey: string,
    id: string,
    request: FliptApi.VariantUpdateRequest
  ): Promise<FliptApi.variants.update.Response> {
    const _response = await core.fetcher({
      url: urlJoin(
        this.options.environment ?? environments.Environment.Production,
        `/api/v1/flags/${flagKey}/variants//${id}`
      ),
      method: "PUT",
      headers: {
        Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
      },
      body: await serializers.variants.update.Request.json({
        key: request.key,
        name: request.name,
        description: request.description,
        attachment: request.attachment,
      }),
    });
    if (_response.ok) {
      return {
        ok: true,
        body: await serializers.variants.update.Response.parse(
          _response.body as serializers.variants.update.Response.Raw
        ),
      };
    }

    return {
      ok: false,
      error: FliptApi.variants.update.Error._unknown(_response.error),
    };
  }
}
