"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmViewListSchema = exports.CrmViewListQuerySchema = exports.CrmViewSchema = exports.CrmContactStageMoveResponseSchema = exports.CrmPipelineStageListSchema = exports.CrmPipelineStageSchema = exports.CrmActivityCreateSchema = exports.CrmActivityListQuerySchema = exports.CrmActivityPagedSchema = exports.CrmActivitySchema = exports.CrmActivityDirectionSchema = exports.CrmActivityTypeSchema = exports.CrmCompanyUpdateSchema = exports.CrmCompanyCreateSchema = exports.CrmCompanyIdParamSchema = exports.CrmCompanyListQuerySchema = exports.CrmCompanyPagedSchema = exports.CrmCompanySchema = exports.CrmContactStagePatchSchema = exports.CrmContactPropertiesPatchSchema = exports.CrmContactIdParamSchema = exports.CrmContactListQuerySchema = exports.CrmContactPagedSchema = exports.CrmContactSchema = exports.CrmPropertyListSchema = exports.CrmPropertiesQuerySchema = exports.CrmPropertySchema = exports.CrmPropertyOptionSchema = exports.CrmPropertyDataTypeSchema = exports.CrmObjectTypeSchema = void 0;
const openapi_js_1 = require("../shared/openapi.js");
const PageDirection = openapi_js_1.z.enum(['next', 'prev']).openapi('CrmPageDirection', {
    description: 'Cursor traversal direction. `next` walks forward; `prev` walks backward.',
});
const SortDirection = openapi_js_1.z.enum(['asc', 'desc']).openapi('CrmSortDirection', {
    description: 'Sort order.',
});
const CrmPaginationQuery = openapi_js_1.z.object({
    cursor: openapi_js_1.z.string().optional().openapi({
        description: 'Opaque cursor returned by a previous page response.',
    }),
    page: PageDirection.optional().openapi({
        description: 'Direction to walk relative to `cursor`. Defaults to `next`.',
    }),
    limit: openapi_js_1.z.coerce.number().int().min(1).max(100).default(25).openapi({
        description: 'Maximum results per page. Maximum is 100.',
        example: 25,
    }),
    sort: openapi_js_1.z.string().optional().openapi({
        description: 'Field to sort by. Defaults vary by resource.',
        example: 'created_at',
    }),
    direction: SortDirection.optional().openapi({
        description: 'Sort direction. Defaults vary by resource.',
    }),
    q: openapi_js_1.z.string().optional().openapi({
        description: 'Free-text search across indexed CRM fields.',
    }),
}).openapi('CrmPaginationQuery');
exports.CrmObjectTypeSchema = openapi_js_1.z.enum(['contact', 'company']).openapi('CrmObjectType', {
    description: 'CRM object type.',
});
exports.CrmPropertyDataTypeSchema = openapi_js_1.z.enum([
    'string',
    'number',
    'boolean',
    'date',
    'datetime',
    'select',
    'multiselect',
    'reference',
]).openapi('CrmPropertyDataType', {
    description: 'Data type used to validate and render a CRM property.',
});
exports.CrmPropertyOptionSchema = openapi_js_1.z.object({
    label: openapi_js_1.z.string().openapi({
        description: 'Human-readable option label.',
        example: 'Qualified',
    }),
    value: openapi_js_1.z.string().openapi({
        description: 'Stable option value.',
        example: 'qualified',
    }),
}).openapi('CrmPropertyOption');
exports.CrmPropertySchema = openapi_js_1.z.object({
    id: openapi_js_1.z.number().int().openapi({
        description: 'Numeric CRM property identifier.',
        example: 101,
    }),
    object_type: exports.CrmObjectTypeSchema,
    key: openapi_js_1.z.string().openapi({
        description: 'Stable property key used in CRM `properties` objects.',
        example: 'pipeline_stage',
    }),
    label: openapi_js_1.z.string().openapi({
        description: 'Human-readable property label.',
        example: 'Stage',
    }),
    data_type: exports.CrmPropertyDataTypeSchema,
    options: openapi_js_1.z.array(exports.CrmPropertyOptionSchema).nullable().optional().openapi({
        description: 'Allowed values for select and multiselect properties.',
    }),
    group: openapi_js_1.z.string().nullable().optional().openapi({
        description: 'Display group used by Spotzee CRM.',
        example: 'Pipeline',
    }),
    is_default: openapi_js_1.z.boolean().openapi({
        description: 'True when the property is part of the default CRM catalogue.',
    }),
    is_system: openapi_js_1.z.boolean().openapi({
        description: 'True when the property is backed by a system field.',
    }),
    is_required: openapi_js_1.z.boolean().openapi({
        description: 'True when Spotzee requires a value for this property.',
    }),
    display_order: openapi_js_1.z.number().int().openapi({
        description: 'Display ordering hint.',
        example: 30,
    }),
    visibility: openapi_js_1.z.literal('public').openapi({
        description: 'Public CRM endpoints only expose public CRM properties.',
    }),
}).openapi('CrmProperty', {
    description: 'Public CRM property definition.',
});
exports.CrmPropertiesQuerySchema = openapi_js_1.z.object({
    object_type: exports.CrmObjectTypeSchema.optional().openapi({
        description: 'Filter property definitions by CRM object type.',
    }),
}).openapi('CrmPropertiesQuery');
exports.CrmPropertyListSchema = openapi_js_1.z.array(exports.CrmPropertySchema).openapi('CrmPropertyList', {
    description: 'CRM property definitions visible to the public CRM API.',
});
exports.CrmContactSchema = openapi_js_1.z.object({
    id: openapi_js_1.z.number().int().openapi({
        description: 'Numeric CRM contact identifier.',
        example: 1024,
    }),
    external_id: openapi_js_1.z.string().nullable().optional().openapi({
        description: 'Caller-supplied user identifier, when present.',
        example: 'cust-9f4b21',
    }),
    anonymous_id: openapi_js_1.z.string().nullable().optional().openapi({
        description: 'Anonymous tracking identifier, when present.',
        example: 'anon-2c8a3e',
    }),
    email: openapi_js_1.z.string().nullable().optional().openapi({
        description: 'Contact email address.',
        example: 'jane@example.com',
    }),
    phone: openapi_js_1.z.string().nullable().optional().openapi({
        description: 'Contact phone number.',
        example: '+61 400 123 456',
    }),
    crm_company_id: openapi_js_1.z.number().int().nullable().optional().openapi({
        description: 'Linked CRM company identifier, when assigned.',
        example: 55,
    }),
    pipeline_stage: openapi_js_1.z.string().nullable().optional().openapi({
        description: 'Current CRM pipeline stage key.',
        example: 'qualified',
    }),
    properties: openapi_js_1.z.record(openapi_js_1.z.unknown()).openapi({
        additionalProperties: true,
        description: 'Public CRM property values keyed by property key.',
        example: { first_name: 'Jane', qualification_status: 'Qualified' },
    }),
    created_at: openapi_js_1.z.coerce.date().openapi({
        description: 'Time the contact was created. ISO 8601.',
    }),
    updated_at: openapi_js_1.z.coerce.date().optional().openapi({
        description: 'Time the contact was last modified. ISO 8601.',
    }),
}).openapi('CrmContact', {
    description: 'Public CRM contact projection.',
});
exports.CrmContactPagedSchema = openapi_js_1.z.object({
    results: openapi_js_1.z.array(exports.CrmContactSchema),
    nextCursor: openapi_js_1.z.string().nullable(),
    prevCursor: openapi_js_1.z.string().nullable(),
    limit: openapi_js_1.z.number().int(),
}).openapi('CrmContacts', {
    description: 'Paginated CRM contacts response.',
});
exports.CrmContactListQuerySchema = CrmPaginationQuery.extend({
    pipeline_stage: openapi_js_1.z.string().optional().openapi({
        description: 'Filter contacts by pipeline stage key.',
        example: 'qualified',
    }),
    crm_company_id: openapi_js_1.z.coerce.number().int().min(1).optional().openapi({
        description: 'Filter contacts by linked company identifier.',
        example: 55,
    }),
    view_id: openapi_js_1.z.coerce.number().int().min(1).optional().openapi({
        description: 'Apply a saved CRM contact view.',
        example: 10,
    }),
}).openapi('CrmContactListQuery');
exports.CrmContactIdParamSchema = openapi_js_1.z.object({
    contactId: openapi_js_1.z.coerce.number().int().min(1).openapi({
        description: 'Numeric CRM contact identifier.',
        example: 1024,
    }),
}).openapi('CrmContactIdParam');
exports.CrmContactPropertiesPatchSchema = openapi_js_1.z.object({
    crm_company_id: openapi_js_1.z.number().int().min(1).nullable().optional().openapi({
        description: 'Company to link, or `null` to unlink.',
        example: 55,
    }),
    properties: openapi_js_1.z.record(openapi_js_1.z.unknown()).optional().openapi({
        additionalProperties: true,
        description: 'Public CRM property values to update.',
        example: { qualification_status: 'Qualified' },
    }),
}).openapi('CrmContactPropertiesPatch');
exports.CrmContactStagePatchSchema = openapi_js_1.z.object({
    stage_key: openapi_js_1.z.string().min(1).max(100).openapi({
        description: 'Pipeline stage key to move the contact to.',
        example: 'proposal',
    }),
}).openapi('CrmContactStagePatch');
exports.CrmCompanySchema = openapi_js_1.z.object({
    id: openapi_js_1.z.number().int().openapi({
        description: 'Numeric CRM company identifier.',
        example: 55,
    }),
    name: openapi_js_1.z.string().openapi({
        description: 'Company name.',
        example: 'Acme Group',
    }),
    domain: openapi_js_1.z.string().nullable().optional().openapi({
        description: 'Company domain, when known.',
        example: 'acme.example',
    }),
    properties: openapi_js_1.z.record(openapi_js_1.z.unknown()).openapi({
        additionalProperties: true,
        description: 'Public CRM company property values keyed by property key.',
        example: { industry: 'Finance' },
    }),
    contacts_count: openapi_js_1.z.number().int().optional().openapi({
        description: 'Number of linked contacts, when included.',
        example: 12,
    }),
    created_at: openapi_js_1.z.coerce.date().optional().openapi({
        description: 'Time the company was created. ISO 8601.',
    }),
    updated_at: openapi_js_1.z.coerce.date().optional().openapi({
        description: 'Time the company was last modified. ISO 8601.',
    }),
}).openapi('CrmCompany', {
    description: 'Public CRM company projection.',
});
exports.CrmCompanyPagedSchema = openapi_js_1.z.object({
    results: openapi_js_1.z.array(exports.CrmCompanySchema),
    nextCursor: openapi_js_1.z.string().nullable(),
    prevCursor: openapi_js_1.z.string().nullable(),
    limit: openapi_js_1.z.number().int(),
}).openapi('CrmCompanies', {
    description: 'Paginated CRM companies response.',
});
exports.CrmCompanyListQuerySchema = CrmPaginationQuery.openapi('CrmCompanyListQuery');
exports.CrmCompanyIdParamSchema = openapi_js_1.z.object({
    companyId: openapi_js_1.z.coerce.number().int().min(1).openapi({
        description: 'Numeric CRM company identifier.',
        example: 55,
    }),
}).openapi('CrmCompanyIdParam');
exports.CrmCompanyCreateSchema = openapi_js_1.z.object({
    name: openapi_js_1.z.string().min(1).max(255).openapi({
        description: 'Company name.',
        example: 'Acme Group',
    }),
    domain: openapi_js_1.z.string().max(255).nullable().optional().openapi({
        description: 'Company domain.',
        example: 'acme.example',
    }),
    properties: openapi_js_1.z.record(openapi_js_1.z.unknown()).optional().openapi({
        additionalProperties: true,
        description: 'Public CRM company property values.',
        example: { industry: 'Finance' },
    }),
}).openapi('CrmCompanyCreate');
exports.CrmCompanyUpdateSchema = exports.CrmCompanyCreateSchema.partial().openapi('CrmCompanyUpdate');
exports.CrmActivityTypeSchema = openapi_js_1.z.enum([
    'note',
    'call',
    'email',
    'sms',
    'meeting',
    'task',
    'stage_change',
]).openapi('CrmActivityType');
exports.CrmActivityDirectionSchema = openapi_js_1.z.enum(['inbound', 'outbound']).openapi('CrmActivityDirection');
exports.CrmActivitySchema = openapi_js_1.z.object({
    id: openapi_js_1.z.number().int().openapi({
        description: 'Numeric CRM activity identifier.',
        example: 5001,
    }),
    contact_id: openapi_js_1.z.number().int().nullable().optional().openapi({
        description: 'Linked CRM contact identifier.',
        example: 1024,
    }),
    company_id: openapi_js_1.z.number().int().nullable().optional().openapi({
        description: 'Linked CRM company identifier.',
        example: 55,
    }),
    type: exports.CrmActivityTypeSchema,
    direction: exports.CrmActivityDirectionSchema.nullable().optional(),
    channel: openapi_js_1.z.string().nullable().optional(),
    subject: openapi_js_1.z.string().nullable().optional(),
    body: openapi_js_1.z.string().nullable().optional(),
    occurred_at: openapi_js_1.z.coerce.date().openapi({
        description: 'When the activity happened. ISO 8601.',
    }),
    due_at: openapi_js_1.z.coerce.date().nullable().optional().openapi({
        description: 'Task due time, when applicable. ISO 8601.',
    }),
    completed_at: openapi_js_1.z.coerce.date().nullable().optional().openapi({
        description: 'Task completion time, when applicable. ISO 8601.',
    }),
}).openapi('CrmActivity', {
    description: 'Public CRM activity projection.',
});
exports.CrmActivityPagedSchema = openapi_js_1.z.object({
    results: openapi_js_1.z.array(exports.CrmActivitySchema),
    nextCursor: openapi_js_1.z.string().nullable(),
    prevCursor: openapi_js_1.z.string().nullable(),
    limit: openapi_js_1.z.number().int(),
}).openapi('CrmActivities', {
    description: 'Paginated CRM activities response.',
});
exports.CrmActivityListQuerySchema = CrmPaginationQuery.extend({
    contact_id: openapi_js_1.z.coerce.number().int().min(1).optional().openapi({
        description: 'Filter activities by CRM contact identifier.',
        example: 1024,
    }),
    company_id: openapi_js_1.z.coerce.number().int().min(1).optional().openapi({
        description: 'Filter activities by CRM company identifier.',
        example: 55,
    }),
}).refine(query => query.contact_id != null || query.company_id != null, {
    message: 'contact_id or company_id is required.',
}).openapi('CrmActivityListQuery');
exports.CrmActivityCreateSchema = openapi_js_1.z.object({
    contact_id: openapi_js_1.z.number().int().min(1).nullable().optional().openapi({
        description: 'CRM contact to attach the activity to.',
        example: 1024,
    }),
    company_id: openapi_js_1.z.number().int().min(1).nullable().optional().openapi({
        description: 'CRM company to attach the activity to.',
        example: 55,
    }),
    type: exports.CrmActivityTypeSchema.exclude(['stage_change']).openapi('CrmManualActivityType', {
        description: 'Manual activity type. Stage changes are created by the stage endpoint.',
    }),
    direction: exports.CrmActivityDirectionSchema.nullable().optional(),
    channel: openapi_js_1.z.string().max(100).nullable().optional(),
    subject: openapi_js_1.z.string().max(255).nullable().optional(),
    body: openapi_js_1.z.string().nullable().optional(),
    occurred_at: openapi_js_1.z.string().datetime().nullable().optional().openapi({
        description: 'When the activity happened. Defaults to now.',
    }),
    due_at: openapi_js_1.z.string().datetime().nullable().optional().openapi({
        description: 'Task due time, when applicable.',
    }),
    completed_at: openapi_js_1.z.string().datetime().nullable().optional().openapi({
        description: 'Task completion time, when applicable.',
    }),
}).refine(input => input.contact_id != null || input.company_id != null, {
    message: 'contact_id or company_id is required.',
}).openapi('CrmActivityCreate');
exports.CrmPipelineStageSchema = openapi_js_1.z.object({
    key: openapi_js_1.z.string().openapi({
        description: 'Stable pipeline stage key.',
        example: 'qualified',
    }),
    label: openapi_js_1.z.string().openapi({
        description: 'Human-readable pipeline stage label.',
        example: 'Qualified',
    }),
    display_order: openapi_js_1.z.number().int(),
    colour: openapi_js_1.z.string().nullable().optional().openapi({
        description: 'Accessible stage colour token.',
        example: 'blue',
    }),
    is_won: openapi_js_1.z.boolean(),
    is_lost: openapi_js_1.z.boolean(),
}).openapi('CrmPipelineStage');
exports.CrmPipelineStageListSchema = openapi_js_1.z.array(exports.CrmPipelineStageSchema).openapi('CrmPipelineStageList');
exports.CrmContactStageMoveResponseSchema = openapi_js_1.z.object({
    contact: exports.CrmContactSchema,
    activity: exports.CrmActivitySchema,
}).openapi('CrmContactStageMoveResponse');
exports.CrmViewSchema = openapi_js_1.z.object({
    id: openapi_js_1.z.number().int(),
    object_type: exports.CrmObjectTypeSchema,
    name: openapi_js_1.z.string(),
    is_shared: openapi_js_1.z.boolean(),
}).openapi('CrmView', {
    description: 'Saved CRM view metadata. Public CRM v1 does not expose saved-view rule editing.',
});
exports.CrmViewListQuerySchema = openapi_js_1.z.object({
    object_type: exports.CrmObjectTypeSchema.optional(),
}).openapi('CrmViewListQuery');
exports.CrmViewListSchema = openapi_js_1.z.array(exports.CrmViewSchema).openapi('CrmViewList');
//# sourceMappingURL=crm.js.map