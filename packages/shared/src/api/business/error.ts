import type { ReportErrorPayload, ReportErrorPayloadWithId } from '../types'

import { ErrorRoutes } from '../routes'

import { request } from '../request'

/**
 * @description 错误上报
 * @param runtimeError payload
 */
export const reportError = async (payload: ReportErrorPayload) => {
  const [err, data] = await request.post<
    ReportErrorPayload,
    ReportErrorPayloadWithId
  >(ErrorRoutes.ReportError, payload)

  if (err) {
    console.error('错误上报失败:', err)
  } else {
    console.log('错误上报成功:', data)
  }

  return data ?? null
}
