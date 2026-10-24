import { z } from './openapi.js';
export declare const SPOTZEE_VERSION_DEFAULT = "2026-04-28";
export declare const SpotzeeVersionHeader: z.ZodString;
export declare const IdempotencyKeyHeader: z.ZodString;
export declare const RequestIdHeader: z.ZodString;
export declare const ClientTypeHeader: z.ZodEnum<{
    unknown: "unknown";
    mcp: "mcp";
    mobile: "mobile";
    "sdk-js": "sdk-js";
    "sdk-android": "sdk-android";
    "sdk-ios": "sdk-ios";
    cli: "cli";
}>;
export declare const RateLimitHeaders: {
    readonly limit: "X-RateLimit-Limit";
    readonly remaining: "X-RateLimit-Remaining";
    readonly reset: "X-RateLimit-Reset";
};
//# sourceMappingURL=headers.d.ts.map