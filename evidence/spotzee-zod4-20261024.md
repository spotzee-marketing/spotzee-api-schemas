# Zod 4 schema migration evidence

Source-only migration from `eb43a32ed29963d06b94509346b8860bb6d51590`.
No merge, tag, publication, deployment or consumer edit is authorised here.

## Contract and dependency result

- Development dependencies: Zod `4.6.6`, zod-to-openapi `8.0.0`; corresponding peer ranges `^4.6.6` and `^8.0.0`.
- Full parsed OpenAPI JSON is **exactly equal** to the preserved baseline (`assert.deepStrictEqual`). The only raw differences are the six object-key order swaps listed below; no fields or values differ.
- Coverage: ESM and CJS; all four package export namespaces; 58 exported schema roots; constants; 63 registered components per format, including one existing pagination-helper instantiation.
- Candidate generation uses official definitions: `schemas.map(schema => ({ type: 'schema', schema }))`. No fields are filtered or normalised.
- `npm audit --json` reports zero vulnerabilities at every severity; no exceptions or ignores were introduced.
- Consumer Node floor is `>=22.22.0`. Locked TypeScript requires `>=14.17`, YAML requires `>=14.6`; other reachable packages declare no engine restriction. Native PR CI runs Node 22.

## Canonical migration and root cause

[Zod's migration guide](https://zod.dev/v4/changelog) requires two-argument records and replaces the old `ZodTypeAny` generic with `ZodType`.
[zod-to-openapi metadata documentation](https://github.com/asteasolutions/zod-to-openapi/blob/master/_autodocs/configuration.md) explains that `type` replaces generated schema data entirely.

Zod 4 `.int()` rejects unsafe integers accepted by the baseline. The internal integer refinement preserves acceptance and rejects fractions with `invalid_type`. It remains internal: package export names are unchanged. Explicit integer metadata preserves each affected minimum, maximum, default and nullable field.

The generator's date transformer newly adds `format: date`; seven date properties explicitly retain the baseline's string/nullable OpenAPI shape. Actual date validation remains `z.coerce.date()`.

Zod 4.5+ [requires seconds in UTC datetimes](https://github.com/colinhacks/zod/blob/main/packages/docs/content/blog/zod-4-5.mdx), while the baseline permits minute precision. The three activity-input datetime fields use the exact baseline UTC regex (`node_modules/zod/v3/types.js:406-432`) through the supported `z.string().regex()` API, retain `Invalid datetime`, and explicitly preserve their OpenAPI type/format/nullable metadata. The integer refinement also retains the baseline's exact `expected: 'integer'` and `received: 'float'` issue fields.

Generator 8's metadata type applies `Omit` to a union of OpenAPI 3.0/3.1 schema types, losing the 3.0-only `nullable` key. Spreading a shared `{ nullable: true }` value preserves valid 3.0 metadata without a cast or dependency.

## Every raw OpenAPI difference

The first metadata-only candidate was byte-equal. Correcting datetime acceptance adds `format` to the internal supported regex schema before outer nullable metadata is applied; JSON serialisation therefore emits `type, format, nullable` where the baseline emitted `type, nullable, format`.

Exactly three property paths differ in ordering, once in ESM and once in CJS (six total):

- `components.schemas.CrmActivityCreate.properties.occurred_at`
- `components.schemas.CrmActivityCreate.properties.due_at`
- `components.schemas.CrmActivityCreate.properties.completed_at`

Each remains exactly `{ type: 'string', nullable: true, format: 'date-time', description: <unchanged> }`; object-key order has no OpenAPI meaning. The raw output and diff remain unmodified.

Baseline SHA-256: `7d010f56813ec81ed529c6d5d9de3deaba4bbbb4fdbdd053ab4c5c7baba12505`.
Final candidate SHA-256: `3c16f4e849c619fa28588f804290a4ee6b018bcdc285aff9ae63d9e223609a32`.
Raw diff SHA-256: `628a26a7c3a3e17e0f04f1b2920832f44e00837200b7abac4dece1f0eb1ea757`.

## Generated dist differences

The official `npm run build` generated all 106 files. Forty-four differ from the baseline:

| Files | Count | Reason |
| --- | ---: | --- |
| ESM/CJS JavaScript for `main/crm`, `shared/openapi`, `shared/pagination` | 6 | Internal integer refinement, exact UTC datetime regex, explicit legacy metadata, two-argument records and matching imports |
| ESM/CJS declarations for CRM, channel, errors, headers, OpenAPI, pagination, responses and tag | 16 | Zod 4 enum/object/refinement generic declarations and coercion-input types; removed Zod 3 generic internals; internal compatibility helpers |
| Corresponding JavaScript/declaration maps | 22 | Generated mappings for those changed outputs |

The remaining 62 dist files are unchanged. No generated file was edited manually. Dist is necessarily not byte-equal because it now references Zod 4 types and runs the compatibility validators; public OpenAPI fields and values are exactly equal.

## Checks and limits

- `npm run typecheck`: exit 0.
- `npm run build`: exit 0.
- `assert.deepStrictEqual` on the complete parsed baseline/final documents: exit 0. Raw `cmp` exits 1 solely for the six justified object-key order swaps above.
- `node --test test/shared-errors.test.js`: exit 0; 2 tests passed, 0 failed, 0 skipped. Existing capacity-code coverage remains unchanged; the resumed task added no tests.
- Historical unsafe-integer regression was seen red: `too_big`, maximum `9007199254740991`, for `9007199254740992`; the retained CRM test now passes with the compatibility refinement.
- One resumed typecheck failed on direct nullable metadata; the documented structural metadata correction passed before push. Historical failed source/artifact attempts remain preserved.
- Review identified and reopened the candidate for datetime minute precision and raw float issue fields. The corrected ESM/CJS validators match the baseline pattern on 114 datetime/field/module combinations, including minute/second/fraction, leap-year, invalid-day/time, missing/null, offset rejection and non-string boundaries. Exact raw float issue-array comparison passes in both module formats (2 cases).
- Native PR CI runs `npm ci`, `npm run typecheck`, `npm test`, then `git diff --exit-code -- dist`; no publisher exists in this workflow.
- Browser journeys do not apply to this schema-only package. App API error mapping and CustomDomain raw validation are validated in the consumer PR, not claimed by this package's OpenAPI comparison.
- No session-owned build-cache directory or `*.tsbuildinfo` remained after the step. Dependencies and tracked dist are retained.

Local raw evidence: `/Users/rj/Desktop/GIT-REPOS/spotzee-api-schemas/.claude/artifacts/spotzee-zod-schema/` (`baseline-openapi.json`, `resume-semantic-openapi.json`, `resume-semantic-openapi.raw.diff`, `resume-semantic-dist.raw.diff`, `resume-semantic-dist.sha256`, `resume-semantic-source.raw.diff`, `resume-semantic-typecheck.log`, `resume-semantic-build.log`, `resume-semantic-focused-test.log`, `resume-semantic-runtime.log`, `resume-audit.json`). Prior failing artifacts are retained verbatim.

Rollback: consumers retain their previous immutable schema commit; this PR can be reverted to baseline `eb43a32ed29963d06b94509346b8860bb6d51590`. Nothing has been published or deployed.
