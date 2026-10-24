import { z } from './openapi.js';
export declare const Channel: z.ZodEnum<{
    email: "email";
    sms: "sms";
    push: "push";
    webhook: "webhook";
    in_app: "in_app";
    whatsapp: "whatsapp";
}>;
export type Channel = z.infer<typeof Channel>;
//# sourceMappingURL=channel.d.ts.map