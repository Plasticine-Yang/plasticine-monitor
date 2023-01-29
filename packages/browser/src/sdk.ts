import type { ActionsType } from './actions'
import type { WebSDKConfig } from './config'

import { Core } from '@plasticine-monitor/core'
import { axiosInstanceManager } from './axios'

import { defaultWebSDKConfig } from './config'
import { errorMonitorPlugin } from './plugins'
import { actions } from './actions'

class WebSDK extends Core<WebSDKConfig, ActionsType> {
  constructor(config: WebSDKConfig) {
    super(config, defaultWebSDKConfig)

    // 批量注册 sender actions
    this.sender.batchRegisterActions(actions)

    // 注册插件
    this.registerPlugins()

    console.log('SDK 初始化完成')
  }

  private registerPlugins() {
    this.use(
      // 错误监控
      errorMonitorPlugin(),
    )
  }

  /**
   * @description 在网络请求工具初始化钩子中初始化 axios instance
   */
  protected onNetworkRequesterInit(): void {
    const { senderURL } = this.configManager.resolvedConfig
    axiosInstanceManager.initAxiosInstance(senderURL)
  }
}

export { WebSDK }
