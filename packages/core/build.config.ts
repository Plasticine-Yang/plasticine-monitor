import { defineBuildConfig } from 'unbuild'

import pkg from './package.json'

const externals = Object.keys(pkg.dependencies)

export default defineBuildConfig({
  entries: ['./src/index'],
  outDir: 'dist',
  clean: true,
  declaration: true,
  rollup: {
    emitCJS: true,
  },
  externals,
})
