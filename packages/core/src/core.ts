import type { Actions } from './sender/types'
import type { Plugin } from './types'

import { ConfigManager } from './config-manager'
import { Sender } from './sender'

class Core<
  Config extends Record<string, any> = Record<string, any>,
  ActionsType extends Actions = Actions,
> {
  protected configManager: ConfigManager<Config>
  public sender: Sender<ActionsType>

  constructor(rawConfig: Config, defaultConfig: Required<Config>) {
    this.configManager = new ConfigManager(rawConfig, defaultConfig)
    this.sender = new Sender<ActionsType>()
    this.onNetworkRequesterInit()
  }

  /**
   * @description 网络请求初始化钩子
   */
  protected onNetworkRequesterInit() {}

  /**
   * @description 注册插件
   */
  public use(...plugins: Plugin<typeof this>[]) {
    plugins.forEach((plugin) => {
      plugin.install(this)
    })
  }
}

export { Core }
