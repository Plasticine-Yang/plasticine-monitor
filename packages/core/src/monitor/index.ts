import type { Context } from '../types'
import { monitorError } from './error'

/**
 * @description 初始化所有监视器
 */
function setupMonitors(ctx: Context) {
  // 监控 JS 异常
  monitorError(ctx)
}

export { setupMonitors }
