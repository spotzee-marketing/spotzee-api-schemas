# Changelog

All notable changes to `@spotzee/api-schemas` are documented here.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Versioning is [Semver](https://semver.org/) — breaking schema changes bump major.

## [0.3.0] — 2026-07-14

### Added

- `shared/errors.ts` `ErrorCode`: added `archived_user_conflict` and `user_capacity_exhausted`.

## [0.2.0] — 2026-04-29

### Changed (build only — no schema changes)

- **Dual-package** the build output (CJS + ESM) so the package can be consumed from both `apps/platform` (CommonJS) and `spotzee-cf-apis` (ESM/Cloudflare Workers) without re-export shims or local mirrors.
- New build pipeline: `tsc -p tsconfig.esm.json` → `dist/esm/`, `tsc -p tsconfig.cjs.json` → `dist/cjs/`, plus a post-build step that writes `dist/{cjs,esm}/package.json` with the appropriate `"type"` field per the canonical Node dual-package recipe (https://nodejs.org/api/packages.html#dual-commonjses-module-packages).
- `package.json` `exports` map now uses `import`/`require`/`types` conditions per export.
- Source `.ts` files updated to use explicit `.js` import extensions (TypeScript-supported pattern; required for Node ESM resolution, harmless under CJS).

### Notes

- No schema changes from v0.1.0. Consumers can upgrade with `git submodule update --remote` and re-install.

## [0.1.0] — 2026-04-29

### Added

- `shared/responses.ts` — `NoContentResponse` (HTTP 204 empty-body schema). Distinct module from `errors.ts` so consumers can import either.

### Changed

- `shared/errors.ts` `ErrorResponse`: `title`, `type`, `request_id` are now **optional** (was required). Aligned with the Spotzee Main API runtime emission — handler paths that throw before `requestIdMiddleware` runs cannot emit `request_id`, and not every error class has a docs URL or short title.
- `shared/errors.ts` `ErrorResponse`: added optional `error` field — legacy human-readable mirror of `message` retained per PRD §4.5 dual-emission window while in-product clients migrate to `message`. Bumps minor: existing consumers that read `message` continue to work; new ones may also read `error` until removed.

## [0.0.1] — 2026-04-28

### Added

- Initial scaffold of the shared schema package.
- `shared/openapi.ts` — Zod instance pre-extended with `extendZodWithOpenApi`.
- `shared/ids.ts` — prefixed identifier schemas (`usr_`, `seg_`, `cmp_`, `jrn_`, `tpl_`, `lst_`, `evt_`, `tag_`, `prj_`, `org_`, `key_`, `whk_`, `sub_`, `req_`).
- `shared/channel.ts` — `Channel` enum (`email`, `sms`, `push`, `webhook`, `in_app`, `whatsapp`).
- `shared/errors.ts` — RFC 7807 + Stripe-style envelope (`ErrorResponse`, `FieldError`, `ErrorCode`).
- `shared/pagination.ts` — `PaginationQuery` and `paginationResponse(item, name)` helper.
- `shared/headers.ts` — `SpotzeeVersionHeader`, `IdempotencyKeyHeader`, `RequestIdHeader`, `ClientTypeHeader`, `RateLimitHeaders` constant.
- `shared/tag.ts` — `Tag` and `TagName`.

### Notes

- Empty `main/` and `extended/` namespaces — populated as resource controllers migrate.
