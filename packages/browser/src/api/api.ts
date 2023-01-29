import { WebSDKConfig } from '../config'
import { request } from './request'
import { ReportRoute } from './routes'
import { SendEvent, WebReport } from './types'

import pkg from '../../package.json'

export class Api {
  constructor(private webSDKConfig: Required<WebSDKConfig>) {}

  /**
   * @description 数据上报
   */
  async report(webReport: WebReport) {
    const { eventType, payload } = webReport
    const { release } = this.webSDKConfig

    // 生成 SendEvent
    const sendEvent: SendEvent = {
      eventType,
      payload,
      common: {
        url: window.location.href,
        domain: window.location.hostname,
        protocol: window.location.protocol,
        path: window.location.pathname,
        query: window.location.search,
        timestamp: Date.now(),
        release,
        sdkVersion: pkg.version,
      },
    }

    // 上报数据
    const [err, data] = await request.post<SendEvent, null>(
      ReportRoute,
      sendEvent,
    )

    if (err) {
      console.error('错误上报失败:', err)
    } else {
      console.log('错误上报成功:', data, 'report:', event)
    }

    return data ?? null
  }
}
