"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationResponse = exports.PaginationQuery = exports.SortDirection = exports.PageDirection = void 0;
const openapi_js_1 = require("./openapi.js");
exports.PageDirection = openapi_js_1.z.enum(['next', 'prev']).openapi('PageDirection', {
    description: 'Cursor traversal direction. `next` walks forward; `prev` walks backward.',
});
exports.SortDirection = openapi_js_1.z.enum(['asc', 'desc']).openapi('SortDirection', {
    description: 'Sort order: ascending or descending.',
});
exports.PaginationQuery = openapi_js_1.z.object({
    cursor: openapi_js_1.z.string().optional().openapi({
        description: 'Opaque cursor returned by a previous page response. Omit on the first request.',
    }),
    page: exports.PageDirection.optional().openapi({
        description: 'Direction to walk relative to `cursor`. Defaults to `next` when omitted.',
    }),
    limit: openapi_js_1.z.coerce.number().int().min(-1).max(100).default(25).openapi({
        description: 'Maximum results per page. Use `-1` to request all (rate-limited; large pages may be rejected).',
        example: 25,
    }),
    sort: openapi_js_1.z.string().optional().openapi({
        description: 'Field to sort by. Defaults vary per resource.',
        example: 'created_at',
    }),
    direction: exports.SortDirection.optional().openapi({
        description: 'Sort direction. Defaults vary per resource.',
    }),
    q: openapi_js_1.z.string().optional().openapi({
        description: 'Free-text search across the resource’s indexed fields.',
    }),
}).openapi('PaginationQuery', {
    description: 'Common cursor-pagination query parameters. Default page size is 25; maximum is 100.',
});
const paginationResponse = (item, name) => openapi_js_1.z.object({
    results: openapi_js_1.z.array(item).openapi({
        description: 'Page of results, ordered per the request’s `sort` and `direction`.',
    }),
    nextCursor: openapi_js_1.z.string().nullable().openapi({
        description: 'Opaque cursor for the next page. `null` when no further pages exist.',
    }),
    prevCursor: openapi_js_1.z.string().nullable().openapi({
        description: 'Opaque cursor for the previous page. `null` when on the first page.',
    }),
    limit: openapi_js_1.z.number().int().openapi({
        description: 'Page size used to build this response.',
    }),
}).openapi(name, {
    description: `Paginated response of \`${name}\`.`,
});
exports.paginationResponse = paginationResponse;
//# sourceMappingURL=pagination.js.map