import type { Plugin } from '@plasticine-monitor/core'

import { WebSDK } from '@/sdk'
import { monitorJSError } from './monitors/js-error'

/**
 * @description 监听运行时错误插件
 */
const errorMonitorPlugin = (): Plugin<WebSDK> => {
  return {
    install(webSDK) {
      monitorJSError(webSDK)
    },
  }
}

const __TEMP__ = WebSDK
console.log(__TEMP__)

export { errorMonitorPlugin }
