import { Sender } from '../sender'
import { monitorError } from './error'

/**
 * @description 初始化所有监视器
 */
function setupMonitors(sender: Sender) {
  // 监控 JS 异常
  monitorError(sender)
}

export { setupMonitors }
