import { z } from './openapi.js';
export declare const PageDirection: z.ZodEnum<{
    next: "next";
    prev: "prev";
}>;
export declare const SortDirection: z.ZodEnum<{
    asc: "asc";
    desc: "desc";
}>;
export declare const PaginationQuery: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodEnum<{
        next: "next";
        prev: "prev";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    sort: z.ZodOptional<z.ZodString>;
    direction: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    q: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type PaginationQuery = z.infer<typeof PaginationQuery>;
export declare const paginationResponse: <T extends z.ZodType>(item: T, name: string) => z.ZodObject<{
    results: z.ZodArray<T>;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
    limit: z.ZodNumber;
}, z.core.$strip>;
//# sourceMappingURL=pagination.d.ts.map