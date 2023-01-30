import type { Integration } from '@plasticine-monitor/types'

import { getCurrentHub } from './hub'

/**
 * @description Given a list of integration instances this installs them all.
 * @param integrations Array of integration instance
 * @returns see {@link IntegrationRecord}
 */
function setupIntegrations(integrations: Integration[]) {
  integrations.forEach((integraion) => {
    integraion.setupOnce(getCurrentHub)
  })
}

export { setupIntegrations }
