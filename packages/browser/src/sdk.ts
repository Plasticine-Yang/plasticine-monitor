import { initAndBind } from '@plasticine-monitor/core'

import type { BrowserClientOptions, BrowserOptions } from './client'
import { BrowserClient } from './client'

/**
 * @description The plasticine-monitor browser SDK client.
 */
function init(options: BrowserOptions) {
  const clientOptions: BrowserClientOptions = {
    ...options,
    integrations: [],
  }

  initAndBind(BrowserClient, clientOptions)
}

export { init }
