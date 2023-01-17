import type { Plugin } from '@plasticine-monitor/core'

import { WebSDK } from '@/sdk'
import { ErrorMonitor } from './error-monitor'

/**
 * @description 监听运行时错误插件
 */
const errorMonitorPlugin = (): Plugin<WebSDK> => {
  return {
    install(webSDK) {
      new ErrorMonitor(webSDK)
    },
  }
}

export { errorMonitorPlugin }
