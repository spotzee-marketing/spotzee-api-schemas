"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const openapi_js_1 = require("./openapi.js");
exports.Channel = openapi_js_1.z.enum([
    'email',
    'sms',
    'push',
    'webhook',
    'in_app',
    'whatsapp',
]).openapi('Channel', {
    description: 'Delivery channel for a message, subscription, or template.',
    example: 'email',
});
//# sourceMappingURL=channel.js.map