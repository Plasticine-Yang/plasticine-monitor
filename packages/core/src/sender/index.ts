import { CreateRuntimeErrorDto } from '@plasticine-monitor/shared'

import { api } from '../api'
import { axiosInstanceManager } from '../api/axios'
import type { SenderConfig } from './types'

class Sender {
  constructor(senderConfig: SenderConfig) {
    const { platformURL } = senderConfig

    axiosInstanceManager.initAxiosInstance(platformURL)
  }

  send(payload: any) {
    if (payload instanceof ErrorEvent) {
      const runtimeError: CreateRuntimeErrorDto = {
        errorMessage: payload.message,
        rowNo: payload.lineno,
        colNo: payload.colno,
      }

      console.log('上报异常，生成的 payload 为:', runtimeError)
      api.runtimeError.reportRuntimeErrorInfo(runtimeError)
    }
  }
}

function setupSender(config: SenderConfig) {
  const sender = new Sender(config)

  return sender
}

export { setupSender, Sender }
