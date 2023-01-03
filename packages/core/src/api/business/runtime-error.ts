import {
  CreateRuntimeErrorDto,
  RUNTIME_ERROR_ROUTES,
} from '@plasticine-monitor/shared'

import { request } from '../request'

export const getRuntimeErrorList = async () => {
  const [err, data] = await request.get(
    RUNTIME_ERROR_ROUTES.GET_RUNTIME_ERROR_LIST,
    null,
  )

  if (err) {
    console.log(err)
  }

  return data
}

export const reportRuntimeErrorInfo = async (
  runtimeError: CreateRuntimeErrorDto,
) => {
  const [err, data] = await request.post(
    RUNTIME_ERROR_ROUTES.REPORT_RUNTIME_ERROR,
    runtimeError,
    null,
  )

  if (err) {
    console.error('异常上报失败:', err)
  } else {
    console.log('异常上报成功:', data)
  }

  return data
}
