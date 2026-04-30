import { z } from './openapi.js';
export declare const ErrorCode: z.ZodEnum<["resource_missing", "resource_already_exists", "state_conflict", "parameter_missing", "parameter_invalid_empty", "parameter_invalid_format", "parameter_unknown", "validation_failed", "authentication_required", "permission_denied", "idempotency_key_mismatch", "idempotency_key_invalid", "idempotency_in_progress", "rate_limited", "version_unsupported", "version_required", "webhook_signature_invalid", "quota_exceeded", "service_unavailable", "internal_error"]>;
export type ErrorCode = z.infer<typeof ErrorCode>;
export declare const FieldError: z.ZodObject<{
    param: z.ZodString;
    code: z.ZodEnum<["resource_missing", "resource_already_exists", "state_conflict", "parameter_missing", "parameter_invalid_empty", "parameter_invalid_format", "parameter_unknown", "validation_failed", "authentication_required", "permission_denied", "idempotency_key_mismatch", "idempotency_key_invalid", "idempotency_in_progress", "rate_limited", "version_unsupported", "version_required", "webhook_signature_invalid", "quota_exceeded", "service_unavailable", "internal_error"]>;
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    param: string;
    code: "resource_missing" | "resource_already_exists" | "state_conflict" | "parameter_missing" | "parameter_invalid_empty" | "parameter_invalid_format" | "parameter_unknown" | "validation_failed" | "authentication_required" | "permission_denied" | "idempotency_key_mismatch" | "idempotency_key_invalid" | "idempotency_in_progress" | "rate_limited" | "version_unsupported" | "version_required" | "webhook_signature_invalid" | "quota_exceeded" | "service_unavailable" | "internal_error";
}, {
    message: string;
    param: string;
    code: "resource_missing" | "resource_already_exists" | "state_conflict" | "parameter_missing" | "parameter_invalid_empty" | "parameter_invalid_format" | "parameter_unknown" | "validation_failed" | "authentication_required" | "permission_denied" | "idempotency_key_mismatch" | "idempotency_key_invalid" | "idempotency_in_progress" | "rate_limited" | "version_unsupported" | "version_required" | "webhook_signature_invalid" | "quota_exceeded" | "service_unavailable" | "internal_error";
}>;
export type FieldError = z.infer<typeof FieldError>;
export declare const ErrorResponse: z.ZodObject<{
    status: z.ZodLiteral<"error">;
    code: z.ZodEnum<["resource_missing", "resource_already_exists", "state_conflict", "parameter_missing", "parameter_invalid_empty", "parameter_invalid_format", "parameter_unknown", "validation_failed", "authentication_required", "permission_denied", "idempotency_key_mismatch", "idempotency_key_invalid", "idempotency_in_progress", "rate_limited", "version_unsupported", "version_required", "webhook_signature_invalid", "quota_exceeded", "service_unavailable", "internal_error"]>;
    title: z.ZodOptional<z.ZodString>;
    message: z.ZodString;
    error: z.ZodString;
    type: z.ZodOptional<z.ZodString>;
    request_id: z.ZodOptional<z.ZodString>;
    param: z.ZodOptional<z.ZodString>;
    errors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        param: z.ZodString;
        code: z.ZodEnum<["resource_missing", "resource_already_exists", "state_conflict", "parameter_missing", "parameter_invalid_empty", "parameter_invalid_format", "parameter_unknown", "validation_failed", "authentication_required", "permission_denied", "idempotency_key_mismatch", "idempotency_key_invalid", "idempotency_in_progress", "rate_limited", "version_unsupported", "version_required", "webhook_signature_invalid", "quota_exceeded", "service_unavailable", "internal_error"]>;
        message: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        message: string;
        param: string;
        code: "resource_missing" | "resource_already_exists" | "state_conflict" | "parameter_missing" | "parameter_invalid_empty" | "parameter_invalid_format" | "parameter_unknown" | "validation_failed" | "authentication_required" | "permission_denied" | "idempotency_key_mismatch" | "idempotency_key_invalid" | "idempotency_in_progress" | "rate_limited" | "version_unsupported" | "version_required" | "webhook_signature_invalid" | "quota_exceeded" | "service_unavailable" | "internal_error";
    }, {
        message: string;
        param: string;
        code: "resource_missing" | "resource_already_exists" | "state_conflict" | "parameter_missing" | "parameter_invalid_empty" | "parameter_invalid_format" | "parameter_unknown" | "validation_failed" | "authentication_required" | "permission_denied" | "idempotency_key_mismatch" | "idempotency_key_invalid" | "idempotency_in_progress" | "rate_limited" | "version_unsupported" | "version_required" | "webhook_signature_invalid" | "quota_exceeded" | "service_unavailable" | "internal_error";
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    message: string;
    code: "resource_missing" | "resource_already_exists" | "state_conflict" | "parameter_missing" | "parameter_invalid_empty" | "parameter_invalid_format" | "parameter_unknown" | "validation_failed" | "authentication_required" | "permission_denied" | "idempotency_key_mismatch" | "idempotency_key_invalid" | "idempotency_in_progress" | "rate_limited" | "version_unsupported" | "version_required" | "webhook_signature_invalid" | "quota_exceeded" | "service_unavailable" | "internal_error";
    status: "error";
    error: string;
    type?: string | undefined;
    title?: string | undefined;
    param?: string | undefined;
    request_id?: string | undefined;
    errors?: {
        message: string;
        param: string;
        code: "resource_missing" | "resource_already_exists" | "state_conflict" | "parameter_missing" | "parameter_invalid_empty" | "parameter_invalid_format" | "parameter_unknown" | "validation_failed" | "authentication_required" | "permission_denied" | "idempotency_key_mismatch" | "idempotency_key_invalid" | "idempotency_in_progress" | "rate_limited" | "version_unsupported" | "version_required" | "webhook_signature_invalid" | "quota_exceeded" | "service_unavailable" | "internal_error";
    }[] | undefined;
}, {
    message: string;
    code: "resource_missing" | "resource_already_exists" | "state_conflict" | "parameter_missing" | "parameter_invalid_empty" | "parameter_invalid_format" | "parameter_unknown" | "validation_failed" | "authentication_required" | "permission_denied" | "idempotency_key_mismatch" | "idempotency_key_invalid" | "idempotency_in_progress" | "rate_limited" | "version_unsupported" | "version_required" | "webhook_signature_invalid" | "quota_exceeded" | "service_unavailable" | "internal_error";
    status: "error";
    error: string;
    type?: string | undefined;
    title?: string | undefined;
    param?: string | undefined;
    request_id?: string | undefined;
    errors?: {
        message: string;
        param: string;
        code: "resource_missing" | "resource_already_exists" | "state_conflict" | "parameter_missing" | "parameter_invalid_empty" | "parameter_invalid_format" | "parameter_unknown" | "validation_failed" | "authentication_required" | "permission_denied" | "idempotency_key_mismatch" | "idempotency_key_invalid" | "idempotency_in_progress" | "rate_limited" | "version_unsupported" | "version_required" | "webhook_signature_invalid" | "quota_exceeded" | "service_unavailable" | "internal_error";
    }[] | undefined;
}>;
export type ErrorResponse = z.infer<typeof ErrorResponse>;
//# sourceMappingURL=errors.d.ts.map