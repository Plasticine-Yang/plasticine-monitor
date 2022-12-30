import { setupConfigManager } from './config-manager'
import { defaultInitConfig } from './config-manager/default-config'
import { setupMonitors } from './monitor'
import { Sender, setupSender } from './sender'

import type { Context, InitConfig } from './types'

function init(config: InitConfig = defaultInitConfig) {
  const { senderConfig } = setupConfigManager(config)

  const sender = setupSender(senderConfig)
  const ctx = createContext(sender)

  setupMonitors(ctx)
}

function createContext(sender: Sender): Context {
  return {
    sender,
  }
}

export { init }
