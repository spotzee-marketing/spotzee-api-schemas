# @spotzee/api-schemas

Shared Zod + OpenAPI schemas for the Spotzee public APIs.

This repo is consumed as a git submodule by:

- `spotzee-js-app` (Main API)
- `spotzee-cf-apis` (Extended API)

Both repos pin to a tag; bumps are explicit PRs in each consumer.

## Layout

```
src/
├── shared/    Cross-cutting types: errors, pagination, IDs, channel, headers, tag
├── main/      Main API resources (User, Campaign, Journey, ...)
└── extended/  Extended API resources (EmailHealth, DNS, SMS, AI, Quota)
```

## What lives here vs the consumer repos

**Lives here:**

- Public-facing types that appear in the OpenAPI spec.
- Cross-cutting building blocks (error envelope, pagination, ID prefixes, headers).
- Resource shapes published to customers.

**Stays in the consumer repos:**

- Internal database models.
- Controller/handler code.
- Anything that names internal infrastructure.

## Confidentiality

No file in this repo may name internal infrastructure (database engines, queue
backends, edge runtimes, hosting providers, identity providers, internal
hostnames, repo file paths). Schemas are emitted into a public spec served at
`docs.spotzee.com`; CI greps for the forbidden token list before publishing.

## Versioning

Semver. The `version` field in `package.json` is bumped on every change.
Breaking schema changes (renamed fields, removed fields, changed types,
narrower enums, tightened required-ness) require a major bump and a CHANGELOG
entry under **Breaking**.

## Build

```bash
npm install
npm run build      # emit dist/
npm run typecheck  # strict-mode TS check, no emit
```

## Local development as a submodule

```bash
# in the consumer repo:
git submodule add git@github.com:spotzee-marketing/spotzee-api-schemas.git
git submodule update --init --recursive
```
