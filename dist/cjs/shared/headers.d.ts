import { z } from './openapi.js';
export declare const SPOTZEE_VERSION_DEFAULT = "2026-04-28";
export declare const SpotzeeVersionHeader: z.ZodString;
export declare const IdempotencyKeyHeader: z.ZodString;
export declare const RequestIdHeader: z.ZodString;
export declare const ClientTypeHeader: z.ZodEnum<["mcp", "mobile", "sdk-js", "sdk-android", "sdk-ios", "cli", "unknown"]>;
export declare const RateLimitHeaders: {
    readonly limit: "X-RateLimit-Limit";
    readonly remaining: "X-RateLimit-Remaining";
    readonly reset: "X-RateLimit-Reset";
};
//# sourceMappingURL=headers.d.ts.map