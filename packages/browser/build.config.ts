import { resolve } from 'path'
import { defineBuildConfig } from 'unbuild'

import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineBuildConfig({
  entries: ['./src/index'],
  outDir: 'dist',
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  alias: {
    '@': resolve(__dirname, 'src'),
  },
  failOnWarn: false,
})
