import { setupConfigManager } from './config-manager'
import { defaultInitConfig } from './config-manager/default-config'
import { setupMonitors } from './monitor'
import { setupSender } from './sender'

import type { InitConfig } from './types'

function init(config: InitConfig = defaultInitConfig) {
  const { senderConfig } = setupConfigManager(config)

  const sender = setupSender(senderConfig)

  setupMonitors(sender)
}

export { init }
