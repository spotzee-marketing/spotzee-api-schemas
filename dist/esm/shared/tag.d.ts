import { z } from './openapi.js';
export declare const Tag: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type Tag = z.infer<typeof Tag>;
export declare const TagName: z.ZodString;
//# sourceMappingURL=tag.d.ts.map