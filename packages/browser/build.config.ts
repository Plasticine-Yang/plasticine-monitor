import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

import { shimsDirname } from '@plasticine-monitor/shared'

const __dirname = shimsDirname(import.meta.url)

export default defineBuildConfig({
  entries: ['./src/index'],
  outDir: 'dist',
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  alias: {
    '@': resolve(),
  },
})
