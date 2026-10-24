import { integer, nullable, z } from './openapi.js';
export const PageDirection = z.enum(['next', 'prev']).openapi('PageDirection', {
    description: 'Cursor traversal direction. `next` walks forward; `prev` walks backward.',
});
export const SortDirection = z.enum(['asc', 'desc']).openapi('SortDirection', {
    description: 'Sort order: ascending or descending.',
});
export const PaginationQuery = z.object({
    cursor: z.string().optional().openapi({
        description: 'Opaque cursor returned by a previous page response. Omit on the first request.',
    }),
    page: PageDirection.optional().openapi({
        description: 'Direction to walk relative to `cursor`. Defaults to `next` when omitted.',
    }),
    limit: integer(z.coerce.number()).min(-1).max(100).default(25).openapi({
        ...nullable,
        minimum: -1,
        maximum: 100,
        default: 25,
        description: 'Maximum results per page. Use `-1` to request all (rate-limited; large pages may be rejected).',
        example: 25,
    }),
    sort: z.string().optional().openapi({
        description: 'Field to sort by. Defaults vary per resource.',
        example: 'created_at',
    }),
    direction: SortDirection.optional().openapi({
        description: 'Sort direction. Defaults vary per resource.',
    }),
    q: z.string().optional().openapi({
        description: 'Free-text search across the resource’s indexed fields.',
    }),
}).openapi('PaginationQuery', {
    description: 'Common cursor-pagination query parameters. Default page size is 25; maximum is 100.',
});
export const paginationResponse = (item, name) => z.object({
    results: z.array(item).openapi({
        description: 'Page of results, ordered per the request’s `sort` and `direction`.',
    }),
    nextCursor: z.string().nullable().openapi({
        description: 'Opaque cursor for the next page. `null` when no further pages exist.',
    }),
    prevCursor: z.string().nullable().openapi({
        description: 'Opaque cursor for the previous page. `null` when on the first page.',
    }),
    limit: integer(z.number()).openapi({
        description: 'Page size used to build this response.',
    }),
}).openapi(name, {
    description: `Paginated response of \`${name}\`.`,
});
//# sourceMappingURL=pagination.js.map