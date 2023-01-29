import type { SendEvent, WebReport } from '../types/reports/event'

import { request } from '../request'
import { ReportRoute } from '../routes'

async function baseReport<T extends WebReport>(report: T) {
  const { eventType, payload } = report

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
      release: '',
      sdkVersion: '',
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

/** @description 上报 js-error */
const reportJSError = <T extends WebReport>(
  jsErrorReport: T['eventType'] extends 'js-error' ? T : never,
) => baseReport(jsErrorReport)

export { reportJSError }
