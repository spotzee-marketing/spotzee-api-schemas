import assert from 'node:assert/strict'
import test from 'node:test'

import { ErrorCode } from '@spotzee/api-schemas/shared'
import { CrmContactIdParamSchema, CrmContactPropertiesPatchSchema, CrmContactSchema, CrmContactListQuerySchema } from '@spotzee/api-schemas/main'

test('exports the stable user capacity error codes', () => {
    const expectedCodes = [
        'archived_user_conflict',
        'user_capacity_exhausted',
    ]
    const exportedCodes = expectedCodes.filter((code) => ErrorCode.safeParse(code).success)

    assert.deepEqual(exportedCodes, expectedCodes)
})

test('preserves CRM integer identifiers, property records, nulls and defaults', () => {
    assert.deepEqual(CrmContactIdParamSchema.parse({ contactId: '9007199254740992' }), {
        contactId: 9007199254740992,
    })
    const result = CrmContactIdParamSchema.safeParse({ contactId: '1.5' })
    assert.equal(result.success, false)
    assert.equal(result.error.issues[0].code, 'invalid_type')
    assert.deepEqual(result.error.issues[0].path, ['contactId'])
    const properties = { name: 'Jane', score: 3, enabled: true, nested: { tags: ['vip'] }, empty: null }
    assert.deepEqual(CrmContactPropertiesPatchSchema.parse({ properties, crm_company_id: null }), {
        properties, crm_company_id: null,
    })
    assert.deepEqual(CrmContactPropertiesPatchSchema.parse({}), {})
    assert.deepEqual(CrmContactListQuerySchema.parse({}), { limit: 25 })
    assert.equal(CrmContactSchema.safeParse({ id: 1, created_at: '2026-01-01T00:00:00Z' }).success, false)
})
