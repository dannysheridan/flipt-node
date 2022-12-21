/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export const FlagList: core.schemas.ObjectSchema<serializers.FlagList.Raw, FliptApi.FlagList> = core.schemas.object({
  flags: core.schemas.list(core.schemas.lazyObject(async () => (await import("../..")).Flag)),
  nextPageToken: core.schemas.string(),
  totalCount: core.schemas.number(),
});

export declare namespace FlagList {
  interface Raw {
    flags: serializers.Flag.Raw[];
    nextPageToken: string;
    totalCount: number;
  }
}
