import { z } from './openapi.js';
export const Tag = z.object({
    name: z.string().min(1).max(64).openapi({
        description: 'Tag name. Used as a stable label across users, segments, lists, and templates.',
        example: 'vip',
    }),
}).openapi('Tag', {
    description: 'A simple label that can be applied to users, segments, lists, and templates.',
});
export const TagName = z.string().min(1).max(64).openapi('TagName', {
    description: 'Lowercase, hyphenated label. Stable across resources.',
    example: 'newsletter-2026-q2',
});
//# sourceMappingURL=tag.js.map