import type { ActionsType } from './actions'
import type { WebSDKConfig } from './config'

import { Core } from '@plasticine-monitor/core'
import { axiosInstanceManager } from '@plasticine-monitor/shared'

import { defaultWebSDKConfig } from './config'

class WebSDK extends Core<WebSDKConfig, ActionsType> {
  constructor(config: WebSDKConfig) {
    super(config, defaultWebSDKConfig)
    this.registerPlugins()
  }

  private registerPlugins() {}

  /**
   * @description 在网络请求工具初始化钩子中初始化 axios instance
   */
  protected onNetworkRequesterInit(): void {
    const { senderURL } = this.configManager.resolvedConfig
    axiosInstanceManager.initAxiosInstance(senderURL)
  }
}

export { WebSDK }
