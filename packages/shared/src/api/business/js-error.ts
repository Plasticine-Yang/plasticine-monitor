import type { JSErrorPayload } from '../types'

import { ErrorRoutes } from '../routes'

import { request } from '../request'

/**
 * @description 上报 js error
 * @param payload JSErrorPayload
 */
export const reportJSError = async (payload: JSErrorPayload) => {
  const [err, data] = await request.post<JSErrorPayload, null>(
    ErrorRoutes.ReportError,
    payload,
  )

  if (err) {
    console.error('错误上报失败:', err)
  } else {
    console.log('错误上报成功:', data, 'payload:', payload)
  }

  return data ?? null
}
