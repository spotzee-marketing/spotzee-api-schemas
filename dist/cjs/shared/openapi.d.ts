import { z } from 'zod';
export declare const nullable: {
    nullable: boolean;
};
export declare const datetime: z.ZodString;
export declare const integer: <T extends z.ZodType<number>>(schema: T) => T;
export { z };
//# sourceMappingURL=openapi.d.ts.map