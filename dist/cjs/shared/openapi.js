"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = exports.integer = exports.datetime = exports.nullable = void 0;
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const zod_1 = require("zod");
Object.defineProperty(exports, "z", { enumerable: true, get: function () { return zod_1.z; } });
(0, zod_to_openapi_1.extendZodWithOpenApi)(zod_1.z);
// OpenAPI 8's metadata union omits the valid OpenAPI 3.0 nullable property.
exports.nullable = { nullable: true };
// Zod 3 datetimeRegex accepted optional seconds; keep its UTC pattern via Zod 4's supported regex API.
exports.datetime = zod_1.z.string().regex(/^((\d\d[2468][048]|\d\d[13579][26]|\d\d0[48]|[02468][048]00|[13579][26]00)-02-29|\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\d|3[01])|(0[469]|11)-(0[1-9]|[12]\d|30)|(02)-(0[1-9]|1\d|2[0-8])))T([01]\d|2[0-3]):[0-5]\d(:[0-5]\d(\.\d+)?)?Z$/, 'Invalid datetime').openapi({ type: 'string', format: 'date-time' });
// Zod 3 accepted unsafe integers; type overrides require explicit bounds/defaults/nullable metadata.
const integer = (schema) => schema.superRefine((value, context) => {
    if (!Number.isInteger(value)) {
        context.addIssue({
            code: 'invalid_type',
            expected: 'integer',
            ...{ received: 'float' },
            message: 'Expected integer, received float',
        });
    }
}).openapi({ type: 'integer' });
exports.integer = integer;
//# sourceMappingURL=openapi.js.map