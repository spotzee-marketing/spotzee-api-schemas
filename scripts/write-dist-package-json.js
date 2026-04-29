#!/usr/bin/env node
// Per Node ESM resolution rules, a package.json with `"type"` is needed inside
// each emitted output dir so Node treats `dist/esm/*.js` as ESM and
// `dist/cjs/*.js` as CommonJS — independently of the parent package's `type`.
// This file is the canonical pattern documented at:
//   https://nodejs.org/api/packages.html#dual-commonjses-module-packages
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = resolve(here, '..')

const targets = [
    [resolve(root, 'dist/cjs/package.json'), { type: 'commonjs' }],
    [resolve(root, 'dist/esm/package.json'), { type: 'module' }],
]

for (const [path, body] of targets) {
    mkdirSync(dirname(path), { recursive: true })
    writeFileSync(path, JSON.stringify(body, null, 2) + '\n')
    console.log(`wrote ${path}`)
}
