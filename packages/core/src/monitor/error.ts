import { Context } from '../types'

/**
 * @description 监视 JS 异常
 */
function monitorError(ctx: Context) {
  const { sender } = ctx

  window.addEventListener('error', ev => {
    sender.send(ev)
  })
}

export { monitorError }
