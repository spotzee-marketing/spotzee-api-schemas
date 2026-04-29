"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestId = exports.SubscriptionId = exports.WebhookEndpointId = exports.ApiKeyId = exports.OrganisationId = exports.ProjectId = exports.TagId = exports.EventId = exports.ListId = exports.TemplateId = exports.JourneyId = exports.CampaignId = exports.SegmentId = exports.ContactId = exports.ID_PREFIXES = void 0;
const openapi_js_1 = require("./openapi.js");
exports.ID_PREFIXES = {
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
};
const buildIdSchema = (prefix, exampleSuffix = '01HXY7Z9K8M5J2N4P6Q8R0S1T2') => openapi_js_1.z.string()
    .regex(new RegExp(`^${prefix}_[0-9A-HJKMNP-TV-Z]{26}$`), {
    message: `Must be a ${prefix}_-prefixed identifier`,
})
    .openapi({
    description: `Stable, opaque identifier prefixed with \`${prefix}_\`.`,
    example: `${prefix}_${exampleSuffix}`,
});
exports.ContactId = buildIdSchema(exports.ID_PREFIXES.contact).openapi('ContactId');
exports.SegmentId = buildIdSchema(exports.ID_PREFIXES.segment).openapi('SegmentId');
exports.CampaignId = buildIdSchema(exports.ID_PREFIXES.campaign).openapi('CampaignId');
exports.JourneyId = buildIdSchema(exports.ID_PREFIXES.journey).openapi('JourneyId');
exports.TemplateId = buildIdSchema(exports.ID_PREFIXES.template).openapi('TemplateId');
exports.ListId = buildIdSchema(exports.ID_PREFIXES.list).openapi('ListId');
exports.EventId = buildIdSchema(exports.ID_PREFIXES.event).openapi('EventId');
exports.TagId = buildIdSchema(exports.ID_PREFIXES.tag).openapi('TagId');
exports.ProjectId = buildIdSchema(exports.ID_PREFIXES.project).openapi('ProjectId');
exports.OrganisationId = buildIdSchema(exports.ID_PREFIXES.organisation).openapi('OrganisationId');
exports.ApiKeyId = buildIdSchema(exports.ID_PREFIXES.apiKey).openapi('ApiKeyId');
exports.WebhookEndpointId = buildIdSchema(exports.ID_PREFIXES.webhookEndpoint).openapi('WebhookEndpointId');
exports.SubscriptionId = buildIdSchema(exports.ID_PREFIXES.subscription).openapi('SubscriptionId');
exports.RequestId = buildIdSchema(exports.ID_PREFIXES.request).openapi('RequestId');
//# sourceMappingURL=ids.js.map