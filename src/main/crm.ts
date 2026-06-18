import { z } from '../shared/openapi.js'

const PageDirection = z.enum(['next', 'prev']).openapi('CrmPageDirection', {
    description: 'Cursor traversal direction. `next` walks forward; `prev` walks backward.',
})

const SortDirection = z.enum(['asc', 'desc']).openapi('CrmSortDirection', {
    description: 'Sort order.',
})

const CrmPaginationQuery = z.object({
    cursor: z.string().optional().openapi({
        description: 'Opaque cursor returned by a previous page response.',
    }),
    page: PageDirection.optional().openapi({
        description: 'Direction to walk relative to `cursor`. Defaults to `next`.',
    }),
    limit: z.coerce.number().int().min(1).max(100).default(25).openapi({
        description: 'Maximum results per page. Maximum is 100.',
        example: 25,
    }),
    sort: z.string().optional().openapi({
        description: 'Field to sort by. Defaults vary by resource.',
        example: 'created_at',
    }),
    direction: SortDirection.optional().openapi({
        description: 'Sort direction. Defaults vary by resource.',
    }),
    q: z.string().optional().openapi({
        description: 'Free-text search across indexed CRM fields.',
    }),
}).openapi('CrmPaginationQuery')

export const CrmObjectTypeSchema = z.enum(['contact', 'company']).openapi('CrmObjectType', {
    description: 'CRM object type.',
})

export const CrmPropertyDataTypeSchema = z.enum([
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
})

export const CrmPropertyOptionSchema = z.object({
    label: z.string().openapi({
        description: 'Human-readable option label.',
        example: 'Qualified',
    }),
    value: z.string().openapi({
        description: 'Stable option value.',
        example: 'qualified',
    }),
}).openapi('CrmPropertyOption')

export const CrmPropertySchema = z.object({
    id: z.number().int().openapi({
        description: 'Numeric CRM property identifier.',
        example: 101,
    }),
    object_type: CrmObjectTypeSchema,
    key: z.string().openapi({
        description: 'Stable property key used in CRM `properties` objects.',
        example: 'pipeline_stage',
    }),
    label: z.string().openapi({
        description: 'Human-readable property label.',
        example: 'Stage',
    }),
    data_type: CrmPropertyDataTypeSchema,
    options: z.array(CrmPropertyOptionSchema).nullable().optional().openapi({
        description: 'Allowed values for select and multiselect properties.',
    }),
    group: z.string().nullable().optional().openapi({
        description: 'Display group used by Spotzee CRM.',
        example: 'Pipeline',
    }),
    is_default: z.boolean().openapi({
        description: 'True when the property is part of the default CRM catalogue.',
    }),
    is_system: z.boolean().openapi({
        description: 'True when the property is backed by a system field.',
    }),
    is_required: z.boolean().openapi({
        description: 'True when Spotzee requires a value for this property.',
    }),
    display_order: z.number().int().openapi({
        description: 'Display ordering hint.',
        example: 30,
    }),
    visibility: z.literal('public').openapi({
        description: 'Public CRM endpoints only expose public CRM properties.',
    }),
}).openapi('CrmProperty', {
    description: 'Public CRM property definition.',
})

export const CrmPropertiesQuerySchema = z.object({
    object_type: CrmObjectTypeSchema.optional().openapi({
        description: 'Filter property definitions by CRM object type.',
    }),
}).openapi('CrmPropertiesQuery')

export const CrmPropertyListSchema = z.array(CrmPropertySchema).openapi('CrmPropertyList', {
    description: 'CRM property definitions visible to the public CRM API.',
})

export const CrmContactSchema = z.object({
    id: z.number().int().openapi({
        description: 'Numeric CRM contact identifier.',
        example: 1024,
    }),
    external_id: z.string().nullable().optional().openapi({
        description: 'Caller-supplied user identifier, when present.',
        example: 'cust-9f4b21',
    }),
    anonymous_id: z.string().nullable().optional().openapi({
        description: 'Anonymous tracking identifier, when present.',
        example: 'anon-2c8a3e',
    }),
    email: z.string().nullable().optional().openapi({
        description: 'Contact email address.',
        example: 'jane@example.com',
    }),
    phone: z.string().nullable().optional().openapi({
        description: 'Contact phone number.',
        example: '+61 400 123 456',
    }),
    crm_company_id: z.number().int().nullable().optional().openapi({
        description: 'Linked CRM company identifier, when assigned.',
        example: 55,
    }),
    pipeline_stage: z.string().nullable().optional().openapi({
        description: 'Current CRM pipeline stage key.',
        example: 'qualified',
    }),
    properties: z.record(z.unknown()).openapi({
        additionalProperties: true,
        description: 'Public CRM property values keyed by property key.',
        example: { first_name: 'Jane', qualification_status: 'Qualified' },
    }),
    created_at: z.coerce.date().openapi({
        description: 'Time the contact was created. ISO 8601.',
    }),
    updated_at: z.coerce.date().optional().openapi({
        description: 'Time the contact was last modified. ISO 8601.',
    }),
}).openapi('CrmContact', {
    description: 'Public CRM contact projection.',
})

export const CrmContactPagedSchema = z.object({
    results: z.array(CrmContactSchema),
    nextCursor: z.string().nullable(),
    prevCursor: z.string().nullable(),
    limit: z.number().int(),
}).openapi('CrmContacts', {
    description: 'Paginated CRM contacts response.',
})

export const CrmContactListQuerySchema = CrmPaginationQuery.extend({
    pipeline_stage: z.string().optional().openapi({
        description: 'Filter contacts by pipeline stage key.',
        example: 'qualified',
    }),
    crm_company_id: z.coerce.number().int().min(1).optional().openapi({
        description: 'Filter contacts by linked company identifier.',
        example: 55,
    }),
    view_id: z.coerce.number().int().min(1).optional().openapi({
        description: 'Apply a saved CRM contact view.',
        example: 10,
    }),
}).openapi('CrmContactListQuery')

export const CrmContactIdParamSchema = z.object({
    contactId: z.coerce.number().int().min(1).openapi({
        description: 'Numeric CRM contact identifier.',
        example: 1024,
    }),
}).openapi('CrmContactIdParam')

export const CrmContactPropertiesPatchSchema = z.object({
    crm_company_id: z.number().int().min(1).nullable().optional().openapi({
        description: 'Company to link, or `null` to unlink.',
        example: 55,
    }),
    properties: z.record(z.unknown()).optional().openapi({
        additionalProperties: true,
        description: 'Public CRM property values to update.',
        example: { qualification_status: 'Qualified' },
    }),
}).openapi('CrmContactPropertiesPatch')

export const CrmContactStagePatchSchema = z.object({
    stage_key: z.string().min(1).max(100).openapi({
        description: 'Pipeline stage key to move the contact to.',
        example: 'proposal',
    }),
}).openapi('CrmContactStagePatch')

export const CrmCompanySchema = z.object({
    id: z.number().int().openapi({
        description: 'Numeric CRM company identifier.',
        example: 55,
    }),
    name: z.string().openapi({
        description: 'Company name.',
        example: 'Acme Group',
    }),
    domain: z.string().nullable().optional().openapi({
        description: 'Company domain, when known.',
        example: 'acme.example',
    }),
    properties: z.record(z.unknown()).openapi({
        additionalProperties: true,
        description: 'Public CRM company property values keyed by property key.',
        example: { industry: 'Finance' },
    }),
    contacts_count: z.number().int().optional().openapi({
        description: 'Number of linked contacts, when included.',
        example: 12,
    }),
    created_at: z.coerce.date().optional().openapi({
        description: 'Time the company was created. ISO 8601.',
    }),
    updated_at: z.coerce.date().optional().openapi({
        description: 'Time the company was last modified. ISO 8601.',
    }),
}).openapi('CrmCompany', {
    description: 'Public CRM company projection.',
})

export const CrmCompanyPagedSchema = z.object({
    results: z.array(CrmCompanySchema),
    nextCursor: z.string().nullable(),
    prevCursor: z.string().nullable(),
    limit: z.number().int(),
}).openapi('CrmCompanies', {
    description: 'Paginated CRM companies response.',
})

export const CrmCompanyListQuerySchema = CrmPaginationQuery.openapi('CrmCompanyListQuery')

export const CrmCompanyIdParamSchema = z.object({
    companyId: z.coerce.number().int().min(1).openapi({
        description: 'Numeric CRM company identifier.',
        example: 55,
    }),
}).openapi('CrmCompanyIdParam')

export const CrmCompanyCreateSchema = z.object({
    name: z.string().min(1).max(255).openapi({
        description: 'Company name.',
        example: 'Acme Group',
    }),
    domain: z.string().max(255).nullable().optional().openapi({
        description: 'Company domain.',
        example: 'acme.example',
    }),
    properties: z.record(z.unknown()).optional().openapi({
        additionalProperties: true,
        description: 'Public CRM company property values.',
        example: { industry: 'Finance' },
    }),
}).openapi('CrmCompanyCreate')

export const CrmCompanyUpdateSchema = CrmCompanyCreateSchema.partial().openapi('CrmCompanyUpdate')

export const CrmActivityTypeSchema = z.enum([
    'note',
    'call',
    'email',
    'sms',
    'meeting',
    'task',
    'stage_change',
]).openapi('CrmActivityType')

export const CrmActivityDirectionSchema = z.enum(['inbound', 'outbound']).openapi('CrmActivityDirection')

export const CrmActivitySchema = z.object({
    id: z.number().int().openapi({
        description: 'Numeric CRM activity identifier.',
        example: 5001,
    }),
    contact_id: z.number().int().nullable().optional().openapi({
        description: 'Linked CRM contact identifier.',
        example: 1024,
    }),
    company_id: z.number().int().nullable().optional().openapi({
        description: 'Linked CRM company identifier.',
        example: 55,
    }),
    type: CrmActivityTypeSchema,
    direction: CrmActivityDirectionSchema.nullable().optional(),
    channel: z.string().nullable().optional(),
    subject: z.string().nullable().optional(),
    body: z.string().nullable().optional(),
    occurred_at: z.coerce.date().openapi({
        description: 'When the activity happened. ISO 8601.',
    }),
    due_at: z.coerce.date().nullable().optional().openapi({
        description: 'Task due time, when applicable. ISO 8601.',
    }),
    completed_at: z.coerce.date().nullable().optional().openapi({
        description: 'Task completion time, when applicable. ISO 8601.',
    }),
}).openapi('CrmActivity', {
    description: 'Public CRM activity projection.',
})

export const CrmActivityPagedSchema = z.object({
    results: z.array(CrmActivitySchema),
    nextCursor: z.string().nullable(),
    prevCursor: z.string().nullable(),
    limit: z.number().int(),
}).openapi('CrmActivities', {
    description: 'Paginated CRM activities response.',
})

export const CrmActivityListQuerySchema = CrmPaginationQuery.extend({
    contact_id: z.coerce.number().int().min(1).optional().openapi({
        description: 'Filter activities by CRM contact identifier.',
        example: 1024,
    }),
    company_id: z.coerce.number().int().min(1).optional().openapi({
        description: 'Filter activities by CRM company identifier.',
        example: 55,
    }),
}).refine(query => query.contact_id != null || query.company_id != null, {
    message: 'contact_id or company_id is required.',
}).openapi('CrmActivityListQuery')

export const CrmActivityCreateSchema = z.object({
    contact_id: z.number().int().min(1).nullable().optional().openapi({
        description: 'CRM contact to attach the activity to.',
        example: 1024,
    }),
    company_id: z.number().int().min(1).nullable().optional().openapi({
        description: 'CRM company to attach the activity to.',
        example: 55,
    }),
    type: CrmActivityTypeSchema.exclude(['stage_change']).openapi('CrmManualActivityType', {
        description: 'Manual activity type. Stage changes are created by the stage endpoint.',
    }),
    direction: CrmActivityDirectionSchema.nullable().optional(),
    channel: z.string().max(100).nullable().optional(),
    subject: z.string().max(255).nullable().optional(),
    body: z.string().nullable().optional(),
    occurred_at: z.string().datetime().nullable().optional().openapi({
        description: 'When the activity happened. Defaults to now.',
    }),
    due_at: z.string().datetime().nullable().optional().openapi({
        description: 'Task due time, when applicable.',
    }),
    completed_at: z.string().datetime().nullable().optional().openapi({
        description: 'Task completion time, when applicable.',
    }),
}).refine(input => input.contact_id != null || input.company_id != null, {
    message: 'contact_id or company_id is required.',
}).openapi('CrmActivityCreate')

export const CrmPipelineStageSchema = z.object({
    key: z.string().openapi({
        description: 'Stable pipeline stage key.',
        example: 'qualified',
    }),
    label: z.string().openapi({
        description: 'Human-readable pipeline stage label.',
        example: 'Qualified',
    }),
    display_order: z.number().int(),
    colour: z.string().nullable().optional().openapi({
        description: 'Accessible stage colour token.',
        example: 'blue',
    }),
    is_won: z.boolean(),
    is_lost: z.boolean(),
}).openapi('CrmPipelineStage')

export const CrmPipelineStageListSchema = z.array(CrmPipelineStageSchema).openapi('CrmPipelineStageList')

export const CrmContactStageMoveResponseSchema = z.object({
    contact: CrmContactSchema,
    activity: CrmActivitySchema,
}).openapi('CrmContactStageMoveResponse')

export const CrmViewSchema = z.object({
    id: z.number().int(),
    object_type: CrmObjectTypeSchema,
    name: z.string(),
    is_shared: z.boolean(),
}).openapi('CrmView', {
    description: 'Saved CRM view metadata. Public CRM v1 does not expose saved-view rule editing.',
})

export const CrmViewListQuerySchema = z.object({
    object_type: CrmObjectTypeSchema.optional(),
}).openapi('CrmViewListQuery')

export const CrmViewListSchema = z.array(CrmViewSchema).openapi('CrmViewList')
