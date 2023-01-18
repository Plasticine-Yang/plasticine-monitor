import { WebSDK } from '@/sdk'
import { JSErrorPayload } from '@plasticine-monitor/shared'

class ErrorMonitor {
  constructor(private webSDK: WebSDK) {
    this.initJSErrorMonitor()
    this.initPromiseErrorMonitor()
    this.initResourceErrorMonitor()
  }

  /**
   * @description 监控 JS Error
   */
  initJSErrorMonitor() {
    window.addEventListener('error', (ev) => {
      // 生成错误上报 payload
      const payload: JSErrorPayload = {
        error: {
          name: ev.type,
          message: ev.message,
          stacktrace: ev.error.stack ?? 'stacktrace',
        },
      }

      this.webSDK.sender.send('report-js-error', payload)
    })
  }

  /**
   * @description 监控 Promise Error
   */
  initPromiseErrorMonitor() {
    window.addEventListener('unhandledrejection', (ev) => {
      // 生成错误上报 payload
      const payload: JSErrorPayload = {
        error: {
          name: ev.type,
          message: ev.reason,
        },
      }

      this.webSDK.sender.send('report-js-error', payload)
    })
  }

  /**
   * @description 监控资源加载错误
   */
  initResourceErrorMonitor() {
    window.addEventListener(
      'error',
      (ev) => {
        // 生成错误上报 payload
        const payload: JSErrorPayload = {
          error: {
            name: ev.type,
            message: ev.message,
            stacktrace: 'stack',
          },
        }

        this.webSDK.sender.send('report-js-error', payload)
      },
      { capture: true },
    )
  }
}

export { ErrorMonitor }
