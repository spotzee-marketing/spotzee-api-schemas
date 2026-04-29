import { z } from './openapi.js';
export declare const Channel: z.ZodEnum<["email", "sms", "push", "webhook", "in_app", "whatsapp"]>;
export type Channel = z.infer<typeof Channel>;
//# sourceMappingURL=channel.d.ts.map