import { z } from '../shared/openapi.js';
export declare const CrmObjectTypeSchema: z.ZodEnum<["contact", "company"]>;
export declare const CrmPropertyDataTypeSchema: z.ZodEnum<["string", "number", "boolean", "date", "datetime", "select", "multiselect", "reference"]>;
export declare const CrmPropertyOptionSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: string;
}, {
    value: string;
    label: string;
}>;
export declare const CrmPropertySchema: z.ZodObject<{
    id: z.ZodNumber;
    object_type: z.ZodEnum<["contact", "company"]>;
    key: z.ZodString;
    label: z.ZodString;
    data_type: z.ZodEnum<["string", "number", "boolean", "date", "datetime", "select", "multiselect", "reference"]>;
    options: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">>>;
    group: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_default: z.ZodBoolean;
    is_system: z.ZodBoolean;
    is_required: z.ZodBoolean;
    display_order: z.ZodNumber;
    visibility: z.ZodLiteral<"public">;
}, "strip", z.ZodTypeAny, {
    key: string;
    id: number;
    label: string;
    object_type: "contact" | "company";
    data_type: "string" | "number" | "boolean" | "date" | "datetime" | "select" | "multiselect" | "reference";
    is_default: boolean;
    is_system: boolean;
    is_required: boolean;
    display_order: number;
    visibility: "public";
    options?: {
        value: string;
        label: string;
    }[] | null | undefined;
    group?: string | null | undefined;
}, {
    key: string;
    id: number;
    label: string;
    object_type: "contact" | "company";
    data_type: "string" | "number" | "boolean" | "date" | "datetime" | "select" | "multiselect" | "reference";
    is_default: boolean;
    is_system: boolean;
    is_required: boolean;
    display_order: number;
    visibility: "public";
    options?: {
        value: string;
        label: string;
    }[] | null | undefined;
    group?: string | null | undefined;
}>;
export declare const CrmPropertiesQuerySchema: z.ZodObject<{
    object_type: z.ZodOptional<z.ZodEnum<["contact", "company"]>>;
}, "strip", z.ZodTypeAny, {
    object_type?: "contact" | "company" | undefined;
}, {
    object_type?: "contact" | "company" | undefined;
}>;
export declare const CrmPropertyListSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    object_type: z.ZodEnum<["contact", "company"]>;
    key: z.ZodString;
    label: z.ZodString;
    data_type: z.ZodEnum<["string", "number", "boolean", "date", "datetime", "select", "multiselect", "reference"]>;
    options: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">>>;
    group: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_default: z.ZodBoolean;
    is_system: z.ZodBoolean;
    is_required: z.ZodBoolean;
    display_order: z.ZodNumber;
    visibility: z.ZodLiteral<"public">;
}, "strip", z.ZodTypeAny, {
    key: string;
    id: number;
    label: string;
    object_type: "contact" | "company";
    data_type: "string" | "number" | "boolean" | "date" | "datetime" | "select" | "multiselect" | "reference";
    is_default: boolean;
    is_system: boolean;
    is_required: boolean;
    display_order: number;
    visibility: "public";
    options?: {
        value: string;
        label: string;
    }[] | null | undefined;
    group?: string | null | undefined;
}, {
    key: string;
    id: number;
    label: string;
    object_type: "contact" | "company";
    data_type: "string" | "number" | "boolean" | "date" | "datetime" | "select" | "multiselect" | "reference";
    is_default: boolean;
    is_system: boolean;
    is_required: boolean;
    display_order: number;
    visibility: "public";
    options?: {
        value: string;
        label: string;
    }[] | null | undefined;
    group?: string | null | undefined;
}>, "many">;
export declare const CrmContactSchema: z.ZodObject<{
    id: z.ZodNumber;
    external_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    anonymous_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    crm_company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    pipeline_stage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    created_at: z.ZodDate;
    updated_at: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    properties: Record<string, unknown>;
    id: number;
    created_at: Date;
    email?: string | null | undefined;
    pipeline_stage?: string | null | undefined;
    external_id?: string | null | undefined;
    anonymous_id?: string | null | undefined;
    phone?: string | null | undefined;
    crm_company_id?: number | null | undefined;
    updated_at?: Date | undefined;
}, {
    properties: Record<string, unknown>;
    id: number;
    created_at: Date;
    email?: string | null | undefined;
    pipeline_stage?: string | null | undefined;
    external_id?: string | null | undefined;
    anonymous_id?: string | null | undefined;
    phone?: string | null | undefined;
    crm_company_id?: number | null | undefined;
    updated_at?: Date | undefined;
}>;
export declare const CrmContactPagedSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        external_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        anonymous_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        crm_company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        pipeline_stage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        created_at: z.ZodDate;
        updated_at: z.ZodOptional<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        properties: Record<string, unknown>;
        id: number;
        created_at: Date;
        email?: string | null | undefined;
        pipeline_stage?: string | null | undefined;
        external_id?: string | null | undefined;
        anonymous_id?: string | null | undefined;
        phone?: string | null | undefined;
        crm_company_id?: number | null | undefined;
        updated_at?: Date | undefined;
    }, {
        properties: Record<string, unknown>;
        id: number;
        created_at: Date;
        email?: string | null | undefined;
        pipeline_stage?: string | null | undefined;
        external_id?: string | null | undefined;
        anonymous_id?: string | null | undefined;
        phone?: string | null | undefined;
        crm_company_id?: number | null | undefined;
        updated_at?: Date | undefined;
    }>, "many">;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
    limit: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    limit: number;
    results: {
        properties: Record<string, unknown>;
        id: number;
        created_at: Date;
        email?: string | null | undefined;
        pipeline_stage?: string | null | undefined;
        external_id?: string | null | undefined;
        anonymous_id?: string | null | undefined;
        phone?: string | null | undefined;
        crm_company_id?: number | null | undefined;
        updated_at?: Date | undefined;
    }[];
    nextCursor: string | null;
    prevCursor: string | null;
}, {
    limit: number;
    results: {
        properties: Record<string, unknown>;
        id: number;
        created_at: Date;
        email?: string | null | undefined;
        pipeline_stage?: string | null | undefined;
        external_id?: string | null | undefined;
        anonymous_id?: string | null | undefined;
        phone?: string | null | undefined;
        crm_company_id?: number | null | undefined;
        updated_at?: Date | undefined;
    }[];
    nextCursor: string | null;
    prevCursor: string | null;
}>;
export declare const CrmContactListQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodEnum<["next", "prev"]>>;
    limit: z.ZodDefault<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodString>;
    direction: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    q: z.ZodOptional<z.ZodString>;
} & {
    pipeline_stage: z.ZodOptional<z.ZodString>;
    crm_company_id: z.ZodOptional<z.ZodNumber>;
    view_id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
    pipeline_stage?: string | undefined;
    crm_company_id?: number | undefined;
    view_id?: number | undefined;
}, {
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    limit?: number | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
    pipeline_stage?: string | undefined;
    crm_company_id?: number | undefined;
    view_id?: number | undefined;
}>;
export declare const CrmContactIdParamSchema: z.ZodObject<{
    contactId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    contactId: number;
}, {
    contactId: number;
}>;
export declare const CrmContactPropertiesPatchSchema: z.ZodObject<{
    crm_company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    properties?: Record<string, unknown> | undefined;
    crm_company_id?: number | null | undefined;
}, {
    properties?: Record<string, unknown> | undefined;
    crm_company_id?: number | null | undefined;
}>;
export declare const CrmContactStagePatchSchema: z.ZodObject<{
    stage_key: z.ZodString;
}, "strip", z.ZodTypeAny, {
    stage_key: string;
}, {
    stage_key: string;
}>;
export declare const CrmCompanySchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    contacts_count: z.ZodOptional<z.ZodNumber>;
    created_at: z.ZodOptional<z.ZodDate>;
    updated_at: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    properties: Record<string, unknown>;
    id: number;
    name: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    domain?: string | null | undefined;
    contacts_count?: number | undefined;
}, {
    properties: Record<string, unknown>;
    id: number;
    name: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    domain?: string | null | undefined;
    contacts_count?: number | undefined;
}>;
export declare const CrmCompanyPagedSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        contacts_count: z.ZodOptional<z.ZodNumber>;
        created_at: z.ZodOptional<z.ZodDate>;
        updated_at: z.ZodOptional<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        properties: Record<string, unknown>;
        id: number;
        name: string;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        domain?: string | null | undefined;
        contacts_count?: number | undefined;
    }, {
        properties: Record<string, unknown>;
        id: number;
        name: string;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        domain?: string | null | undefined;
        contacts_count?: number | undefined;
    }>, "many">;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
    limit: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    limit: number;
    results: {
        properties: Record<string, unknown>;
        id: number;
        name: string;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        domain?: string | null | undefined;
        contacts_count?: number | undefined;
    }[];
    nextCursor: string | null;
    prevCursor: string | null;
}, {
    limit: number;
    results: {
        properties: Record<string, unknown>;
        id: number;
        name: string;
        created_at?: Date | undefined;
        updated_at?: Date | undefined;
        domain?: string | null | undefined;
        contacts_count?: number | undefined;
    }[];
    nextCursor: string | null;
    prevCursor: string | null;
}>;
export declare const CrmCompanyListQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodEnum<["next", "prev"]>>;
    limit: z.ZodDefault<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodString>;
    direction: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    q: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
}, {
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    limit?: number | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
}>;
export declare const CrmCompanyIdParamSchema: z.ZodObject<{
    companyId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    companyId: number;
}, {
    companyId: number;
}>;
export declare const CrmCompanyCreateSchema: z.ZodObject<{
    name: z.ZodString;
    domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    properties?: Record<string, unknown> | undefined;
    domain?: string | null | undefined;
}, {
    name: string;
    properties?: Record<string, unknown> | undefined;
    domain?: string | null | undefined;
}>;
export declare const CrmCompanyUpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    domain: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    properties: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, "strip", z.ZodTypeAny, {
    properties?: Record<string, unknown> | undefined;
    name?: string | undefined;
    domain?: string | null | undefined;
}, {
    properties?: Record<string, unknown> | undefined;
    name?: string | undefined;
    domain?: string | null | undefined;
}>;
export declare const CrmActivityTypeSchema: z.ZodEnum<["note", "call", "email", "sms", "meeting", "task", "stage_change"]>;
export declare const CrmActivityDirectionSchema: z.ZodEnum<["inbound", "outbound"]>;
export declare const CrmActivitySchema: z.ZodObject<{
    id: z.ZodNumber;
    contact_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodEnum<["note", "call", "email", "sms", "meeting", "task", "stage_change"]>;
    direction: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inbound", "outbound"]>>>;
    channel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    occurred_at: z.ZodDate;
    due_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
}, "strip", z.ZodTypeAny, {
    type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
    id: number;
    occurred_at: Date;
    direction?: "inbound" | "outbound" | null | undefined;
    contact_id?: number | null | undefined;
    company_id?: number | null | undefined;
    channel?: string | null | undefined;
    subject?: string | null | undefined;
    body?: string | null | undefined;
    due_at?: Date | null | undefined;
    completed_at?: Date | null | undefined;
}, {
    type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
    id: number;
    occurred_at: Date;
    direction?: "inbound" | "outbound" | null | undefined;
    contact_id?: number | null | undefined;
    company_id?: number | null | undefined;
    channel?: string | null | undefined;
    subject?: string | null | undefined;
    body?: string | null | undefined;
    due_at?: Date | null | undefined;
    completed_at?: Date | null | undefined;
}>;
export declare const CrmActivityPagedSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        contact_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        type: z.ZodEnum<["note", "call", "email", "sms", "meeting", "task", "stage_change"]>;
        direction: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inbound", "outbound"]>>>;
        channel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        occurred_at: z.ZodDate;
        due_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
        completed_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    }, "strip", z.ZodTypeAny, {
        type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
        id: number;
        occurred_at: Date;
        direction?: "inbound" | "outbound" | null | undefined;
        contact_id?: number | null | undefined;
        company_id?: number | null | undefined;
        channel?: string | null | undefined;
        subject?: string | null | undefined;
        body?: string | null | undefined;
        due_at?: Date | null | undefined;
        completed_at?: Date | null | undefined;
    }, {
        type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
        id: number;
        occurred_at: Date;
        direction?: "inbound" | "outbound" | null | undefined;
        contact_id?: number | null | undefined;
        company_id?: number | null | undefined;
        channel?: string | null | undefined;
        subject?: string | null | undefined;
        body?: string | null | undefined;
        due_at?: Date | null | undefined;
        completed_at?: Date | null | undefined;
    }>, "many">;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
    limit: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    limit: number;
    results: {
        type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
        id: number;
        occurred_at: Date;
        direction?: "inbound" | "outbound" | null | undefined;
        contact_id?: number | null | undefined;
        company_id?: number | null | undefined;
        channel?: string | null | undefined;
        subject?: string | null | undefined;
        body?: string | null | undefined;
        due_at?: Date | null | undefined;
        completed_at?: Date | null | undefined;
    }[];
    nextCursor: string | null;
    prevCursor: string | null;
}, {
    limit: number;
    results: {
        type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
        id: number;
        occurred_at: Date;
        direction?: "inbound" | "outbound" | null | undefined;
        contact_id?: number | null | undefined;
        company_id?: number | null | undefined;
        channel?: string | null | undefined;
        subject?: string | null | undefined;
        body?: string | null | undefined;
        due_at?: Date | null | undefined;
        completed_at?: Date | null | undefined;
    }[];
    nextCursor: string | null;
    prevCursor: string | null;
}>;
export declare const CrmActivityListQuerySchema: z.ZodEffects<z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodEnum<["next", "prev"]>>;
    limit: z.ZodDefault<z.ZodNumber>;
    sort: z.ZodOptional<z.ZodString>;
    direction: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    q: z.ZodOptional<z.ZodString>;
} & {
    contact_id: z.ZodOptional<z.ZodNumber>;
    company_id: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
    contact_id?: number | undefined;
    company_id?: number | undefined;
}, {
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    limit?: number | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
    contact_id?: number | undefined;
    company_id?: number | undefined;
}>, {
    limit: number;
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
    contact_id?: number | undefined;
    company_id?: number | undefined;
}, {
    sort?: string | undefined;
    cursor?: string | undefined;
    page?: "next" | "prev" | undefined;
    limit?: number | undefined;
    direction?: "asc" | "desc" | undefined;
    q?: string | undefined;
    contact_id?: number | undefined;
    company_id?: number | undefined;
}>;
export declare const CrmActivityCreateSchema: z.ZodEffects<z.ZodObject<{
    contact_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodEnum<["note", "call", "email", "sms", "meeting", "task"]>;
    direction: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inbound", "outbound"]>>>;
    channel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    occurred_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    due_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    type: "email" | "sms" | "note" | "call" | "meeting" | "task";
    direction?: "inbound" | "outbound" | null | undefined;
    contact_id?: number | null | undefined;
    company_id?: number | null | undefined;
    channel?: string | null | undefined;
    subject?: string | null | undefined;
    body?: string | null | undefined;
    occurred_at?: string | null | undefined;
    due_at?: string | null | undefined;
    completed_at?: string | null | undefined;
}, {
    type: "email" | "sms" | "note" | "call" | "meeting" | "task";
    direction?: "inbound" | "outbound" | null | undefined;
    contact_id?: number | null | undefined;
    company_id?: number | null | undefined;
    channel?: string | null | undefined;
    subject?: string | null | undefined;
    body?: string | null | undefined;
    occurred_at?: string | null | undefined;
    due_at?: string | null | undefined;
    completed_at?: string | null | undefined;
}>, {
    type: "email" | "sms" | "note" | "call" | "meeting" | "task";
    direction?: "inbound" | "outbound" | null | undefined;
    contact_id?: number | null | undefined;
    company_id?: number | null | undefined;
    channel?: string | null | undefined;
    subject?: string | null | undefined;
    body?: string | null | undefined;
    occurred_at?: string | null | undefined;
    due_at?: string | null | undefined;
    completed_at?: string | null | undefined;
}, {
    type: "email" | "sms" | "note" | "call" | "meeting" | "task";
    direction?: "inbound" | "outbound" | null | undefined;
    contact_id?: number | null | undefined;
    company_id?: number | null | undefined;
    channel?: string | null | undefined;
    subject?: string | null | undefined;
    body?: string | null | undefined;
    occurred_at?: string | null | undefined;
    due_at?: string | null | undefined;
    completed_at?: string | null | undefined;
}>;
export declare const CrmPipelineStageSchema: z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    display_order: z.ZodNumber;
    colour: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_won: z.ZodBoolean;
    is_lost: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    key: string;
    label: string;
    display_order: number;
    is_won: boolean;
    is_lost: boolean;
    colour?: string | null | undefined;
}, {
    key: string;
    label: string;
    display_order: number;
    is_won: boolean;
    is_lost: boolean;
    colour?: string | null | undefined;
}>;
export declare const CrmPipelineStageListSchema: z.ZodArray<z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    display_order: z.ZodNumber;
    colour: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_won: z.ZodBoolean;
    is_lost: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    key: string;
    label: string;
    display_order: number;
    is_won: boolean;
    is_lost: boolean;
    colour?: string | null | undefined;
}, {
    key: string;
    label: string;
    display_order: number;
    is_won: boolean;
    is_lost: boolean;
    colour?: string | null | undefined;
}>, "many">;
export declare const CrmContactStageMoveResponseSchema: z.ZodObject<{
    contact: z.ZodObject<{
        id: z.ZodNumber;
        external_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        anonymous_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        crm_company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        pipeline_stage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        created_at: z.ZodDate;
        updated_at: z.ZodOptional<z.ZodDate>;
    }, "strip", z.ZodTypeAny, {
        properties: Record<string, unknown>;
        id: number;
        created_at: Date;
        email?: string | null | undefined;
        pipeline_stage?: string | null | undefined;
        external_id?: string | null | undefined;
        anonymous_id?: string | null | undefined;
        phone?: string | null | undefined;
        crm_company_id?: number | null | undefined;
        updated_at?: Date | undefined;
    }, {
        properties: Record<string, unknown>;
        id: number;
        created_at: Date;
        email?: string | null | undefined;
        pipeline_stage?: string | null | undefined;
        external_id?: string | null | undefined;
        anonymous_id?: string | null | undefined;
        phone?: string | null | undefined;
        crm_company_id?: number | null | undefined;
        updated_at?: Date | undefined;
    }>;
    activity: z.ZodObject<{
        id: z.ZodNumber;
        contact_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        type: z.ZodEnum<["note", "call", "email", "sms", "meeting", "task", "stage_change"]>;
        direction: z.ZodOptional<z.ZodNullable<z.ZodEnum<["inbound", "outbound"]>>>;
        channel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        occurred_at: z.ZodDate;
        due_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
        completed_at: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    }, "strip", z.ZodTypeAny, {
        type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
        id: number;
        occurred_at: Date;
        direction?: "inbound" | "outbound" | null | undefined;
        contact_id?: number | null | undefined;
        company_id?: number | null | undefined;
        channel?: string | null | undefined;
        subject?: string | null | undefined;
        body?: string | null | undefined;
        due_at?: Date | null | undefined;
        completed_at?: Date | null | undefined;
    }, {
        type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
        id: number;
        occurred_at: Date;
        direction?: "inbound" | "outbound" | null | undefined;
        contact_id?: number | null | undefined;
        company_id?: number | null | undefined;
        channel?: string | null | undefined;
        subject?: string | null | undefined;
        body?: string | null | undefined;
        due_at?: Date | null | undefined;
        completed_at?: Date | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    contact: {
        properties: Record<string, unknown>;
        id: number;
        created_at: Date;
        email?: string | null | undefined;
        pipeline_stage?: string | null | undefined;
        external_id?: string | null | undefined;
        anonymous_id?: string | null | undefined;
        phone?: string | null | undefined;
        crm_company_id?: number | null | undefined;
        updated_at?: Date | undefined;
    };
    activity: {
        type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
        id: number;
        occurred_at: Date;
        direction?: "inbound" | "outbound" | null | undefined;
        contact_id?: number | null | undefined;
        company_id?: number | null | undefined;
        channel?: string | null | undefined;
        subject?: string | null | undefined;
        body?: string | null | undefined;
        due_at?: Date | null | undefined;
        completed_at?: Date | null | undefined;
    };
}, {
    contact: {
        properties: Record<string, unknown>;
        id: number;
        created_at: Date;
        email?: string | null | undefined;
        pipeline_stage?: string | null | undefined;
        external_id?: string | null | undefined;
        anonymous_id?: string | null | undefined;
        phone?: string | null | undefined;
        crm_company_id?: number | null | undefined;
        updated_at?: Date | undefined;
    };
    activity: {
        type: "email" | "sms" | "note" | "call" | "meeting" | "task" | "stage_change";
        id: number;
        occurred_at: Date;
        direction?: "inbound" | "outbound" | null | undefined;
        contact_id?: number | null | undefined;
        company_id?: number | null | undefined;
        channel?: string | null | undefined;
        subject?: string | null | undefined;
        body?: string | null | undefined;
        due_at?: Date | null | undefined;
        completed_at?: Date | null | undefined;
    };
}>;
export declare const CrmViewSchema: z.ZodObject<{
    id: z.ZodNumber;
    object_type: z.ZodEnum<["contact", "company"]>;
    name: z.ZodString;
    is_shared: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    object_type: "contact" | "company";
    is_shared: boolean;
}, {
    id: number;
    name: string;
    object_type: "contact" | "company";
    is_shared: boolean;
}>;
export declare const CrmViewListQuerySchema: z.ZodObject<{
    object_type: z.ZodOptional<z.ZodEnum<["contact", "company"]>>;
}, "strip", z.ZodTypeAny, {
    object_type?: "contact" | "company" | undefined;
}, {
    object_type?: "contact" | "company" | undefined;
}>;
export declare const CrmViewListSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    object_type: z.ZodEnum<["contact", "company"]>;
    name: z.ZodString;
    is_shared: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    object_type: "contact" | "company";
    is_shared: boolean;
}, {
    id: number;
    name: string;
    object_type: "contact" | "company";
    is_shared: boolean;
}>, "many">;
//# sourceMappingURL=crm.d.ts.map