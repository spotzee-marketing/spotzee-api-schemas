import { z } from './openapi.js';
export declare const PageDirection: z.ZodEnum<["next", "prev"]>;
export declare const SortDirection: z.ZodEnum<["asc", "desc"]>;
export declare const PaginationQuery: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodEnum<["next", "prev"]>>;
    limit: z.ZodDefault<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodString>;
    direction: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    q: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
}, {
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    limit?: number | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
}>;
export type PaginationQuery = z.infer<typeof PaginationQuery>;
export declare const paginationResponse: <T extends z.ZodTypeAny>(item: T, name: string) => z.ZodObject<{
    results: z.ZodArray<T, "many">;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
    limit: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    limit: number;
    results: T["_output"][];
    nextCursor: string | null;
    prevCursor: string | null;
}, {
    limit: number;
    results: T["_input"][];
    nextCursor: string | null;
    prevCursor: string | null;
}>;
//# sourceMappingURL=pagination.d.ts.map