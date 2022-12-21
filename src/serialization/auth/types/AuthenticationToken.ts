/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const AuthenticationToken: core.schemas.ObjectSchema<
  serializers.AuthenticationToken.Raw,
  FliptApi.AuthenticationToken
> = core.schemas.object({
  clientToken: core.schemas.string(),
  authentication: core.schemas.lazyObject(async () => (await import("../..")).Authentication),
});

export declare namespace AuthenticationToken {
  interface Raw {
    clientToken: string;
    authentication: serializers.Authentication.Raw;
  }
}
