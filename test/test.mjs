import { fileURLToPath } from 'node:url'
import markdownit from 'markdown-it'
import generate from 'markdown-it-testgen'

import sup from '../index.mjs'

describe('markdown-it-sup', function () {
  const md = markdownit().use(sup)

  generate(fileURLToPath(new URL('fixtures/sup.txt', import.meta.url)), md)
})
