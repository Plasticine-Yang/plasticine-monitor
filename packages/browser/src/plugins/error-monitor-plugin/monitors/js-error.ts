import { WebSDK } from '@/sdk'

/**
 * @description 监听运行时错误
 */
function monitorJSError(webSDK: WebSDK) {
  // 注册运行时错误上报的 sender action
  window.addEventListener('error', ev => {
    webSDK.sender.send('runtime-error', {
      errorMessage: ev.message,
      rowNo: ev.lineno,
      colNo: ev.colno,
    })
  })
}

export { monitorJSError }
