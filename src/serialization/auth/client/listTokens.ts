/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const Response: core.schemas.Schema<serializers.auth.listTokens.Response.Raw, FliptApi.AuthenticationList> =
  core.schemas.lazyObject(async () => (await import("../..")).AuthenticationList);

export declare namespace Response {
  type Raw = serializers.AuthenticationList.Raw;
}
