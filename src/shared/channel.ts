import { z } from './openapi.js'

export const Channel = z.enum([
    'email',
    'sms',
    'push',
    'webhook',
    'in_app',
    'whatsapp',
]).openapi('Channel', {
    description: 'Delivery channel for a message, subscription, or template.',
    example: 'email',
})

export type Channel = z.infer<typeof Channel>
