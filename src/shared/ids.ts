import { z } from './openapi'

export const ID_PREFIXES = {
    contact: 'cnt',
    segment: 'seg',
    campaign: 'cmp',
    journey: 'jrn',
    template: 'tpl',
    list: 'lst',
    event: 'evt',
    tag: 'tag',
    project: 'prj',
    organisation: 'org',
    apiKey: 'key',
    webhookEndpoint: 'whk',
    subscription: 'sub',
    request: 'req',
} as const

export type IdPrefix = typeof ID_PREFIXES[keyof typeof ID_PREFIXES]

const buildIdSchema = (prefix: IdPrefix, exampleSuffix = '01HXY7Z9K8M5J2N4P6Q8R0S1T2') =>
    z.string()
        .regex(new RegExp(`^${prefix}_[0-9A-HJKMNP-TV-Z]{26}$`), {
            message: `Must be a ${prefix}_-prefixed identifier`,
        })
        .openapi({
            description: `Stable, opaque identifier prefixed with \`${prefix}_\`.`,
            example: `${prefix}_${exampleSuffix}`,
        })

export const ContactId = buildIdSchema(ID_PREFIXES.contact).openapi('ContactId')
export const SegmentId = buildIdSchema(ID_PREFIXES.segment).openapi('SegmentId')
export const CampaignId = buildIdSchema(ID_PREFIXES.campaign).openapi('CampaignId')
export const JourneyId = buildIdSchema(ID_PREFIXES.journey).openapi('JourneyId')
export const TemplateId = buildIdSchema(ID_PREFIXES.template).openapi('TemplateId')
export const ListId = buildIdSchema(ID_PREFIXES.list).openapi('ListId')
export const EventId = buildIdSchema(ID_PREFIXES.event).openapi('EventId')
export const TagId = buildIdSchema(ID_PREFIXES.tag).openapi('TagId')
export const ProjectId = buildIdSchema(ID_PREFIXES.project).openapi('ProjectId')
export const OrganisationId = buildIdSchema(ID_PREFIXES.organisation).openapi('OrganisationId')
export const ApiKeyId = buildIdSchema(ID_PREFIXES.apiKey).openapi('ApiKeyId')
export const WebhookEndpointId = buildIdSchema(ID_PREFIXES.webhookEndpoint).openapi('WebhookEndpointId')
export const SubscriptionId = buildIdSchema(ID_PREFIXES.subscription).openapi('SubscriptionId')
export const RequestId = buildIdSchema(ID_PREFIXES.request).openapi('RequestId')

export type ContactId = z.infer<typeof ContactId>
export type SegmentId = z.infer<typeof SegmentId>
export type CampaignId = z.infer<typeof CampaignId>
export type JourneyId = z.infer<typeof JourneyId>
export type TemplateId = z.infer<typeof TemplateId>
export type ListId = z.infer<typeof ListId>
export type EventId = z.infer<typeof EventId>
export type TagId = z.infer<typeof TagId>
export type ProjectId = z.infer<typeof ProjectId>
export type OrganisationId = z.infer<typeof OrganisationId>
export type ApiKeyId = z.infer<typeof ApiKeyId>
export type WebhookEndpointId = z.infer<typeof WebhookEndpointId>
export type SubscriptionId = z.infer<typeof SubscriptionId>
export type RequestId = z.infer<typeof RequestId>
