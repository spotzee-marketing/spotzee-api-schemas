"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = exports.integer = exports.nullable = void 0;
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const zod_1 = require("zod");
Object.defineProperty(exports, "z", { enumerable: true, get: function () { return zod_1.z; } });
(0, zod_to_openapi_1.extendZodWithOpenApi)(zod_1.z);
// OpenAPI 8's metadata union omits the valid OpenAPI 3.0 nullable property.
exports.nullable = { nullable: true };
// Zod 3 accepted unsafe integers; type overrides require explicit bounds/defaults/nullable metadata.
const integer = (schema) => schema.superRefine((value, context) => {
    if (!Number.isInteger(value)) {
        context.addIssue({
            code: 'invalid_type',
            expected: 'int',
            message: 'Expected integer, received float',
        });
    }
}).openapi({ type: 'integer' });
exports.integer = integer;
//# sourceMappingURL=openapi.js.map