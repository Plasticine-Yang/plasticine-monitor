import type { Plugin } from '@plasticine-monitor/types'

import { getCurrentHub } from './hub'

export function setupPlugins(plugins: Plugin[]) {
  plugins.forEach((plugin) => {
    plugin.setupOnce(getCurrentHub)
  })
}
