import { WebSDK } from '@/sdk'
import { WebReport } from 'packages/shared/src/api/types/reports/event'

class ErrorMonitor {
  constructor(private webSDK: WebSDK) {
    this.initJSErrorMonitor()
    this.initPromiseErrorMonitor()
  }

  /**
   * @description 监控 JS Error
   */
  initJSErrorMonitor() {
    window.addEventListener('error', (ev) => {
      // 生成错误上报 payload
      const jsErrorReport: WebReport = {
        eventType: 'js-error',
        payload: {
          error: {
            name: ev.type,
            message: ev.message,
            stacktrace: ev.error.stack ?? 'stacktrace',
          },
        },
      }

      this.webSDK.sender.send('report-js-error', jsErrorReport)
    })
  }

  /**
   * @description 监控 Promise Error
   */
  initPromiseErrorMonitor() {
    window.addEventListener('unhandledrejection', (ev) => {
      // 生成错误上报 payload
      const jsErrorReport: WebReport = {
        eventType: 'js-error',
        payload: {
          error: {
            name: ev.type,
            message: ev.reason,
          },
        },
      }

      this.webSDK.sender.send('report-js-error', jsErrorReport)
    })
  }
}

export { ErrorMonitor }
