/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../../core";

export const FlagList: core.serialization.ObjectSchema<serializers.FlagList.Raw, FliptApi.FlagList> =
    core.serialization.object({
        flags: core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Flag)),
        nextPageToken: core.serialization.string(),
        totalCount: core.serialization.number(),
    });

export declare namespace FlagList {
    interface Raw {
        flags: serializers.Flag.Raw[];
        nextPageToken: string;
        totalCount: number;
    }
}
