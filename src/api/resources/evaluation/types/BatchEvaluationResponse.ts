/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { FliptApi } from "@flipt-io/flipt";

export interface BatchEvaluationResponse {
    requestId: string;
    responses: FliptApi.evaluation.EvaluationResponse[];
    requestDurationMillis: number;
}
