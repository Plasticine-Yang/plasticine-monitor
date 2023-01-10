import type { Plugin } from '@plasticine-monitor/core'
import { monitorRuntimeError } from '../monitors/runtime-error'

import { WebSDK } from '../sdk'

/**
 * @description 监听运行时错误插件
 */
const runtimeErrorPlugin: Plugin<WebSDK> = {
  install(webSDK) {
    monitorRuntimeError(webSDK)
  },
}

export { runtimeErrorPlugin }
