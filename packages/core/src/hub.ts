import type { Client, Hub as HubInterface } from '@plasticine-monitor/types'

import { getGlobalSingleton } from '@plasticine-monitor/shared'

class Hub implements HubInterface {
  bindClient(client: Client) {
    client.setupIntegrations()
  }
}

/**
 * @description Returns the hub instance in `__PLASTICINE_MONITOR__`
 */
function getCurrentHub() {
  return getGlobalSingleton('hub', () => new Hub())
}

export { Hub, getCurrentHub }
