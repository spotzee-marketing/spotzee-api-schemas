"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagName = exports.Tag = void 0;
const openapi_js_1 = require("./openapi.js");
exports.Tag = openapi_js_1.z.object({
    name: openapi_js_1.z.string().min(1).max(64).openapi({
        description: 'Tag name. Used as a stable label across contacts, segments, lists, and templates.',
        example: 'vip',
    }),
}).openapi('Tag', {
    description: 'A simple label that can be applied to contacts, segments, lists, and templates.',
});
exports.TagName = openapi_js_1.z.string().min(1).max(64).openapi('TagName', {
    description: 'Lowercase, hyphenated label. Stable across resources.',
    example: 'newsletter-2026-q2',
});
//# sourceMappingURL=tag.js.map