import assert from 'node:assert/strict'
import test from 'node:test'

import { ErrorCode } from '@spotzee/api-schemas/shared'

test('exports the stable user capacity error codes', () => {
    const expectedCodes = [
        'archived_user_conflict',
        'user_capacity_exhausted',
    ]
    const exportedCodes = expectedCodes.filter((code) => ErrorCode.safeParse(code).success)

    assert.deepEqual(exportedCodes, expectedCodes)
})
