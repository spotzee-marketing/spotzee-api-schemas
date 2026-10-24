# Zod 4 schema migration evidence

Source-only migration from `eb43a32ed29963d06b94509346b8860bb6d51590`.
No merge, tag, publication, deployment or consumer edit is authorised here.

## Contract and dependency result

- Development dependencies: Zod `4.6.6`, zod-to-openapi `8.0.0`; corresponding peer ranges `^4.6.6` and `^8.0.0`.
- Full generated OpenAPI JSON is **byte-equal** to the preserved baseline: both SHA-256 `7d010f56813ec81ed529c6d5d9de3deaba4bbbb4fdbdd053ab4c5c7baba12505`.
- Coverage: ESM and CJS; all four package export namespaces; 58 exported schema roots; constants; 63 registered components per format, including one existing pagination-helper instantiation.
- Candidate generation uses official definitions: `schemas.map(schema => ({ type: 'schema', schema }))`. No fields are filtered or normalised.
- `npm audit --json` reports zero vulnerabilities at every severity; no exceptions or ignores were introduced.
- Consumer Node floor is `>=22.22.0`. Locked TypeScript requires `>=14.17`, YAML requires `>=14.6`; other reachable packages declare no engine restriction. Native PR CI runs Node 22.

## Canonical migration and root cause

[Zod's migration guide](https://zod.dev/v4/changelog) requires two-argument records and replaces the old `ZodTypeAny` generic with `ZodType`.
[zod-to-openapi metadata documentation](https://github.com/asteasolutions/zod-to-openapi/blob/master/_autodocs/configuration.md) explains that `type` replaces generated schema data entirely.

Zod 4 `.int()` rejects unsafe integers accepted by the baseline. The internal integer refinement preserves acceptance and rejects fractions with `invalid_type`. It remains internal: package export names are unchanged. Explicit integer metadata preserves each affected minimum, maximum, default and nullable field.

The generator's date transformer newly adds `format: date`; seven date properties explicitly retain the baseline's string/nullable OpenAPI shape. Actual date validation remains `z.coerce.date()`.

Generator 8's metadata type applies `Omit` to a union of OpenAPI 3.0/3.1 schema types, losing the 3.0-only `nullable` key. Spreading a shared `{ nullable: true }` value preserves valid 3.0 metadata without a cast or dependency.

## Generated dist differences

The official `npm run build` generated all 106 files. Forty-four differ from the baseline:

| Files | Count | Reason |
| --- | ---: | --- |
| ESM/CJS JavaScript for `main/crm`, `shared/openapi`, `shared/pagination` | 6 | Internal integer refinement, explicit legacy metadata, two-argument records and matching imports |
| ESM/CJS declarations for CRM, channel, errors, headers, OpenAPI, pagination, responses and tag | 16 | Zod 4 enum/object/refinement generic declarations and coercion-input types; removed Zod 3 generic internals; internal compatibility helpers |
| Corresponding JavaScript/declaration maps | 22 | Generated mappings for those changed outputs |

The remaining 62 dist files are unchanged. No generated file was edited manually. Dist is necessarily not byte-equal because it now references Zod 4 types and runs the compatibility refinement; public OpenAPI output is byte-equal.

## Checks and limits

- `npm run typecheck`: exit 0.
- `npm run build`: exit 0.
- `cmp baseline-openapi.json resume-openapi.json`: exit 0.
- `node --test test/shared-errors.test.js`: exit 0; 2 tests passed, 0 failed, 0 skipped. Existing capacity-code coverage remains unchanged; the resumed task added no tests.
- Historical unsafe-integer regression was seen red: `too_big`, maximum `9007199254740991`, for `9007199254740992`; the retained CRM test now passes with the compatibility refinement.
- One resumed typecheck failed on direct nullable metadata; the documented structural metadata correction passed before push. Historical failed source/artifact attempts remain preserved.
- Native PR CI runs `npm ci`, `npm run typecheck`, `npm test`, then `git diff --exit-code -- dist`; no publisher exists in this workflow.
- Browser journeys do not apply to this schema-only package. App API error mapping and CustomDomain raw validation are validated in the consumer PR, not claimed by this package's OpenAPI comparison.
- No session-owned build-cache directory or `*.tsbuildinfo` remained after the step. Dependencies and tracked dist are retained.

Local raw evidence: `/Users/rj/Desktop/GIT-REPOS/spotzee-api-schemas/.claude/artifacts/spotzee-zod-schema/` (`baseline-openapi.json`, `resume-openapi.json`, `resume-dist.raw.diff`, `resume-dist.sha256`, `resume-source.raw.diff`, `resume-typecheck-correction.log`, `resume-build.log`, `resume-focused-test.log`, `resume-audit.json`). Prior failing artifacts are retained verbatim.

Rollback: consumers retain their previous immutable schema commit; this PR can be reverted to baseline `eb43a32ed29963d06b94509346b8860bb6d51590`. Nothing has been published or deployed.
