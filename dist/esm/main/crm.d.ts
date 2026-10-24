import { z } from '../shared/openapi.js';
export declare const CrmObjectTypeSchema: z.ZodEnum<{
    contact: "contact";
    company: "company";
}>;
export declare const CrmPropertyDataTypeSchema: z.ZodEnum<{
    string: "string";
    number: "number";
    boolean: "boolean";
    date: "date";
    datetime: "datetime";
    select: "select";
    multiselect: "multiselect";
    reference: "reference";
}>;
export declare const CrmPropertyOptionSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, z.core.$strip>;
export declare const CrmPropertySchema: z.ZodObject<{
    id: z.ZodNumber;
    object_type: z.ZodEnum<{
        contact: "contact";
        company: "company";
    }>;
    key: z.ZodString;
    label: z.ZodString;
    data_type: z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        date: "date";
        datetime: "datetime";
        select: "select";
        multiselect: "multiselect";
        reference: "reference";
    }>;
    options: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>;
    group: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_default: z.ZodBoolean;
    is_system: z.ZodBoolean;
    is_required: z.ZodBoolean;
    display_order: z.ZodNumber;
    visibility: z.ZodLiteral<"public">;
}, z.core.$strip>;
export declare const CrmPropertiesQuerySchema: z.ZodObject<{
    object_type: z.ZodOptional<z.ZodEnum<{
        contact: "contact";
        company: "company";
    }>>;
}, z.core.$strip>;
export declare const CrmPropertyListSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    object_type: z.ZodEnum<{
        contact: "contact";
        company: "company";
    }>;
    key: z.ZodString;
    label: z.ZodString;
    data_type: z.ZodEnum<{
        string: "string";
        number: "number";
        boolean: "boolean";
        date: "date";
        datetime: "datetime";
        select: "select";
        multiselect: "multiselect";
        reference: "reference";
    }>;
    options: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, z.core.$strip>>>>;
    group: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_default: z.ZodBoolean;
    is_system: z.ZodBoolean;
    is_required: z.ZodBoolean;
    display_order: z.ZodNumber;
    visibility: z.ZodLiteral<"public">;
}, z.core.$strip>>;
export declare const CrmContactSchema: z.ZodObject<{
    id: z.ZodNumber;
    external_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    anonymous_id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    crm_company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    pipeline_stage: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    created_at: z.ZodCoercedDate<unknown>;
    updated_at: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
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
        created_at: z.ZodCoercedDate<unknown>;
        updated_at: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
    limit: z.ZodNumber;
}, z.core.$strip>;
export declare const CrmContactListQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodEnum<{
        next: "next";
        prev: "prev";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    sort: z.ZodOptional<z.ZodString>;
    direction: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    q: z.ZodOptional<z.ZodString>;
    pipeline_stage: z.ZodOptional<z.ZodString>;
    crm_company_id: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    view_id: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const CrmContactIdParamSchema: z.ZodObject<{
    contactId: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const CrmContactPropertiesPatchSchema: z.ZodObject<{
    crm_company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export declare const CrmContactStagePatchSchema: z.ZodObject<{
    stage_key: z.ZodString;
}, z.core.$strip>;
export declare const CrmCompanySchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    contacts_count: z.ZodOptional<z.ZodNumber>;
    created_at: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    updated_at: z.ZodOptional<z.ZodCoercedDate<unknown>>;
}, z.core.$strip>;
export declare const CrmCompanyPagedSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
        contacts_count: z.ZodOptional<z.ZodNumber>;
        created_at: z.ZodOptional<z.ZodCoercedDate<unknown>>;
        updated_at: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
    limit: z.ZodNumber;
}, z.core.$strip>;
export declare const CrmCompanyListQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodEnum<{
        next: "next";
        prev: "prev";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    sort: z.ZodOptional<z.ZodString>;
    direction: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    q: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const CrmCompanyIdParamSchema: z.ZodObject<{
    companyId: z.ZodCoercedNumber<unknown>;
}, z.core.$strip>;
export declare const CrmCompanyCreateSchema: z.ZodObject<{
    name: z.ZodString;
    domain: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, z.core.$strip>;
export declare const CrmCompanyUpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    domain: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    properties: z.ZodOptional<z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>>;
}, z.core.$strip>;
export declare const CrmActivityTypeSchema: z.ZodEnum<{
    email: "email";
    sms: "sms";
    note: "note";
    call: "call";
    meeting: "meeting";
    task: "task";
    stage_change: "stage_change";
}>;
export declare const CrmActivityDirectionSchema: z.ZodEnum<{
    inbound: "inbound";
    outbound: "outbound";
}>;
export declare const CrmActivitySchema: z.ZodObject<{
    id: z.ZodNumber;
    contact_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodEnum<{
        email: "email";
        sms: "sms";
        note: "note";
        call: "call";
        meeting: "meeting";
        task: "task";
        stage_change: "stage_change";
    }>;
    direction: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        inbound: "inbound";
        outbound: "outbound";
    }>>>;
    channel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    occurred_at: z.ZodCoercedDate<unknown>;
    due_at: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
}, z.core.$strip>;
export declare const CrmActivityPagedSchema: z.ZodObject<{
    results: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        contact_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        type: z.ZodEnum<{
            email: "email";
            sms: "sms";
            note: "note";
            call: "call";
            meeting: "meeting";
            task: "task";
            stage_change: "stage_change";
        }>;
        direction: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            inbound: "inbound";
            outbound: "outbound";
        }>>>;
        channel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        occurred_at: z.ZodCoercedDate<unknown>;
        due_at: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
        completed_at: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    }, z.core.$strip>>;
    nextCursor: z.ZodNullable<z.ZodString>;
    prevCursor: z.ZodNullable<z.ZodString>;
    limit: z.ZodNumber;
}, z.core.$strip>;
export declare const CrmActivityListQuerySchema: z.ZodObject<{
    cursor: z.ZodOptional<z.ZodString>;
    page: z.ZodOptional<z.ZodEnum<{
        next: "next";
        prev: "prev";
    }>>;
    limit: z.ZodDefault<z.ZodCoercedNumber<unknown>>;
    sort: z.ZodOptional<z.ZodString>;
    direction: z.ZodOptional<z.ZodEnum<{
        asc: "asc";
        desc: "desc";
    }>>;
    q: z.ZodOptional<z.ZodString>;
    contact_id: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    company_id: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
}, z.core.$strip>;
export declare const CrmActivityCreateSchema: z.ZodObject<{
    contact_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    type: z.ZodEnum<{
        email: "email";
        sms: "sms";
        note: "note";
        call: "call";
        meeting: "meeting";
        task: "task";
    }>;
    direction: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        inbound: "inbound";
        outbound: "outbound";
    }>>>;
    channel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    occurred_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    due_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    completed_at: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export declare const CrmPipelineStageSchema: z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    display_order: z.ZodNumber;
    colour: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_won: z.ZodBoolean;
    is_lost: z.ZodBoolean;
}, z.core.$strip>;
export declare const CrmPipelineStageListSchema: z.ZodArray<z.ZodObject<{
    key: z.ZodString;
    label: z.ZodString;
    display_order: z.ZodNumber;
    colour: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    is_won: z.ZodBoolean;
    is_lost: z.ZodBoolean;
}, z.core.$strip>>;
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
        created_at: z.ZodCoercedDate<unknown>;
        updated_at: z.ZodOptional<z.ZodCoercedDate<unknown>>;
    }, z.core.$strip>;
    activity: z.ZodObject<{
        id: z.ZodNumber;
        contact_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        company_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        type: z.ZodEnum<{
            email: "email";
            sms: "sms";
            note: "note";
            call: "call";
            meeting: "meeting";
            task: "task";
            stage_change: "stage_change";
        }>;
        direction: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
            inbound: "inbound";
            outbound: "outbound";
        }>>>;
        channel: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        subject: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        body: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        occurred_at: z.ZodCoercedDate<unknown>;
        due_at: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
        completed_at: z.ZodOptional<z.ZodNullable<z.ZodCoercedDate<unknown>>>;
    }, z.core.$strip>;
}, z.core.$strip>;
export declare const CrmViewSchema: z.ZodObject<{
    id: z.ZodNumber;
    object_type: z.ZodEnum<{
        contact: "contact";
        company: "company";
    }>;
    name: z.ZodString;
    is_shared: z.ZodBoolean;
}, z.core.$strip>;
export declare const CrmViewListQuerySchema: z.ZodObject<{
    object_type: z.ZodOptional<z.ZodEnum<{
        contact: "contact";
        company: "company";
    }>>;
}, z.core.$strip>;
export declare const CrmViewListSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    object_type: z.ZodEnum<{
        contact: "contact";
        company: "company";
    }>;
    name: z.ZodString;
    is_shared: z.ZodBoolean;
}, z.core.$strip>>;
//# sourceMappingURL=crm.d.ts.map