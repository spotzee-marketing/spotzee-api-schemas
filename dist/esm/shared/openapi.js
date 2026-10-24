import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
extendZodWithOpenApi(z);
// OpenAPI 8's metadata union omits the valid OpenAPI 3.0 nullable property.
export const nullable = { nullable: true };
// Zod 3 accepted unsafe integers; type overrides require explicit bounds/defaults/nullable metadata.
export const integer = (schema) => schema.superRefine((value, context) => {
    if (!Number.isInteger(value)) {
        context.addIssue({
            code: 'invalid_type',
            expected: 'int',
            message: 'Expected integer, received float',
        });
    }
}).openapi({ type: 'integer' });
export { z };
//# sourceMappingURL=openapi.js.map