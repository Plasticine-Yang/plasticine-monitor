import type { Plugin } from '@plasticine-monitor/types'

import { examplePlugin } from './example-plugin'

export { examplePlugin } from './example-plugin'

export const defaultPlugins: Plugin[] = [examplePlugin()]
