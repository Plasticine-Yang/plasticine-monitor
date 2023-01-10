import type { CoreConfig, Plugin } from './types'
import type { Actions } from './sender/types'

import { ConfigManager } from './config-manager'
import { Sender } from './sender'

class Core<ActionsType extends Actions = Actions> {
  private configManager: ConfigManager
  private plugins: Plugin[] = []
  public sender: Sender<ActionsType>

  constructor(protected config: CoreConfig) {
    this.configManager = new ConfigManager(this.config)
    this.sender = new Sender<ActionsType>(this.configManager.getSenderConfig())
  }

  /**
   * @description 注册插件
   */
  public use() {
    this.plugins.forEach(plugin => {
      plugin.install(this as Core<any>)
    })
  }
}

export { Core }
