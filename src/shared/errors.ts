import { z } from './openapi.js'

export const ErrorCode = z.enum([
    'resource_missing',
    'resource_already_exists',
    'state_conflict',
    'parameter_missing',
    'parameter_invalid_empty',
    'parameter_invalid_format',
    'parameter_unknown',
    'validation_failed',
    'authentication_required',
    'permission_denied',
    'idempotency_key_mismatch',
    'idempotency_key_invalid',
    'idempotency_in_progress',
    'rate_limited',
    'version_unsupported',
    'version_required',
    'webhook_signature_invalid',
    'quota_exceeded',
    'service_unavailable',
    'internal_error',
]).openapi('ErrorCode', {
    description: 'Stable, machine-readable error code. Safe to switch on; never localised.',
    example: 'resource_missing',
})

export type ErrorCode = z.infer<typeof ErrorCode>

export const FieldError = z.object({
    param: z.string().openapi({
        description: 'Dotted path to the offending request field.',
        example: 'email',
    }),
    code: ErrorCode.openapi({
        description: 'Per-field error code.',
        example: 'parameter_invalid_format',
    }),
    message: z.string().openapi({
        description: 'Human-readable, English (en-AU) explanation of this field error.',
        example: 'Must be a valid email address.',
    }),
}).openapi('FieldError')

export type FieldError = z.infer<typeof FieldError>

// Aligned to runtime emission: `title`, `type`, `request_id` are optional
// because handler paths that throw before requestIdMiddleware runs cannot
// emit them, and `error` is the legacy human-readable mirror retained while
// the in-product UI migrates to `message` (PRD §4.5 dual-emission window).
export const ErrorResponse = z.object({
    status: z.literal('error').openapi({
        description: 'Constant marker indicating this payload is an error response.',
    }),
    code: ErrorCode,
    title: z.string().optional().openapi({
        description: 'Short, human-readable summary suitable for a heading. en-AU.',
        example: 'Resource missing',
    }),
    message: z.string().openapi({
        description: 'Human-readable, en-AU explanation. May include identifiers.',
        example: 'User usr_01HXY7Z9K8M5J2N4P6Q8R0S1T2 was not found in this project.',
    }),
    error: z.string().openapi({
        description: 'Legacy human-readable mirror of `message`. Retained while in-product clients migrate; new integrations should read `message`.',
    }),
    type: z.string().url().optional().openapi({
        description: 'Documentation URL for this error class (RFC 7807).',
        example: 'https://docs.spotzee.com/main-api/errors#resource_missing',
    }),
    request_id: z.string().optional().openapi({
        description: 'Server-generated correlation ID. Echoed in the X-Request-ID response header.',
        example: 'req_01HXY7Z9K8M5J2N4P6Q8R0S1T2',
    }),
    param: z.string().optional().openapi({
        description: 'Name of the offending parameter, when a single field is at fault.',
        example: 'id',
    }),
    errors: z.array(FieldError).optional().openapi({
        description: 'Field-level errors when multiple parameters fail validation.',
    }),
}).openapi('ErrorResponse', {
    description: 'Spotzee error envelope (RFC 7807 + Stripe-style extensions). Served as `application/problem+json`.',
})

export type ErrorResponse = z.infer<typeof ErrorResponse>
