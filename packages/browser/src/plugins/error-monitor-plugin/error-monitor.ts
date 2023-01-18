import { WebSDK } from '@/sdk'
import { ReportErrorPayload } from '@plasticine-monitor/shared'

class ErrorMonitor {
  constructor(private webSDK: WebSDK) {
    this.initJSErrorMonitor()
  }

  initJSErrorMonitor() {
    window.addEventListener('error', (ev) => {
      // 生成错误上报 payload
      const payload: ReportErrorPayload = {
        type: ev.type,
        message: ev.message,
        uid: this.genErrorUid(`${ev.type}-${ev.message}`),
        stacktrace: 'stack',
      }

      this.webSDK.sender.send('report-error', payload)
    })
  }

  /**
   * @description 为错误生成 uid
   * @param error 序列化后的错误信息
   */
  genErrorUid(error: string) {
    return btoa(decodeURIComponent(error))
  }
}

export { ErrorMonitor }
