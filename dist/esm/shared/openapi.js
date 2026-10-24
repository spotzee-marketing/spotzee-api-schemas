import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';
extendZodWithOpenApi(z);
// OpenAPI 8's metadata union omits the valid OpenAPI 3.0 nullable property.
export const nullable = { nullable: true };
// Zod 3 datetimeRegex accepted optional seconds; keep its UTC pattern via Zod 4's supported regex API.
export const datetime = z.string().regex(/^((\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\d|3[01])|(0[469]|11)-(0[1-9]|[12]\d|30)|(02)-(0[1-9]|1\d|2[0-8])))T([01]\d|2[0-3]):[0-5]\d(:[0-5]\d(\.\d+)?)?Z$/, 'Invalid datetime').openapi({ type: 'string', format: 'date-time' });
// Zod 3 accepted unsafe integers; type overrides require explicit bounds/defaults/nullable metadata.
export const integer = (schema) => schema.superRefine((value, context) => {
    if (!Number.isInteger(value)) {
        context.addIssue({
            code: 'invalid_type',
            expected: 'integer',
            ...{ received: 'float' },
            message: 'Expected integer, received float',
        });
    }
}).openapi({ type: 'integer' });
export { z };
//# sourceMappingURL=openapi.js.map