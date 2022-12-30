import { Sender } from '../sender'

/**
 * @description 监视 JS 异常
 */
function monitorError(sender: Sender) {
  window.addEventListener('error', ev => {
    sender.send(ev)
  })
}

export { monitorError }
