/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";
import * as core from "../../../core";

export type Response = core.APIResponse<FliptApi.FlagList, FliptApi.flags.list.Error>;
export type Error = FliptApi.flags.list.Error._Unknown;

export declare namespace Error {
  interface _Unknown extends _Utils {
    statusCode: void;
    content: core.Fetcher.Error;
  }

  interface _Utils {
    _visit: <_Result>(visitor: FliptApi.flags.list.Error._Visitor<_Result>) => _Result;
  }

  interface _Visitor<_Result> {
    _other: (value: core.Fetcher.Error) => _Result;
  }
}

export const Error = {
  _unknown: (fetcherError: core.Fetcher.Error): FliptApi.flags.list.Error._Unknown => {
    const valueWithoutVisit = fetcherError as unknown as Omit<FliptApi.flags.list.Error._Unknown, "_visit">;
    return core.addNonEnumerableProperty(valueWithoutVisit, "_visit", function <
      _Result
    >(this: FliptApi.flags.list.Error._Unknown, visitor: FliptApi.flags.list.Error._Visitor<_Result>) {
      return FliptApi.flags.list.Error._visit(this, visitor);
    });
  },

  _visit: <_Result>(
    value: FliptApi.flags.list.Error,
    visitor: FliptApi.flags.list.Error._Visitor<_Result>
  ): _Result => {
    switch (value.statusCode) {
      default:
        return visitor._other(value as any);
    }
  },
} as const;
