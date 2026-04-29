"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateLimitHeaders = exports.ClientTypeHeader = exports.RequestIdHeader = exports.IdempotencyKeyHeader = exports.SpotzeeVersionHeader = exports.SPOTZEE_VERSION_DEFAULT = void 0;
const openapi_js_1 = require("./openapi.js");
exports.SPOTZEE_VERSION_DEFAULT = '2026-04-28';
exports.SpotzeeVersionHeader = openapi_js_1.z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, { message: 'Must be an ISO date (YYYY-MM-DD).' })
    .openapi('SpotzeeVersionHeader', {
    description: 'Pins the request to a specific dated API release. Stripe-style. ' +
        'When omitted, the server uses the API key’s pinned version, falling back to the current default.',
    example: exports.SPOTZEE_VERSION_DEFAULT,
});
exports.IdempotencyKeyHeader = openapi_js_1.z.string().min(1).max(255).openapi('IdempotencyKeyHeader', {
    description: 'Opaque, client-supplied key that makes a write request safely retryable for 24 hours. ' +
        'Required only if the client wants replay protection.',
    example: '6f1a8e2c-3b9d-4e1a-9b3a-1f0c8d4e2a91',
});
exports.RequestIdHeader = openapi_js_1.z.string().openapi('RequestIdHeader', {
    description: 'Server-generated correlation ID echoed on every response. Clients may pass their own; the server still wraps it.',
    example: 'req_01HXY7Z9K8M5J2N4P6Q8R0S1T2',
});
exports.ClientTypeHeader = openapi_js_1.z.enum([
    'mcp',
    'mobile',
    'sdk-js',
    'sdk-android',
    'sdk-ios',
    'cli',
    'unknown',
]).openapi('ClientTypeHeader', {
    description: 'Optional self-identification of the calling client. `mcp` doubles base rate limits to support agentic, parallel tool calls.',
    example: 'sdk-js',
});
exports.RateLimitHeaders = {
    limit: 'X-RateLimit-Limit',
    remaining: 'X-RateLimit-Remaining',
    reset: 'X-RateLimit-Reset',
};
//# sourceMappingURL=headers.js.map