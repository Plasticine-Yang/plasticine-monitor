import type { Transport, TransportRequestExecutor } from '@plasticine-monitor/types'

import { getCurrentHub } from './hub'

export function createTransport(requestExecutor: TransportRequestExecutor): Transport {
  const options = getCurrentHub().getClient()?.getOptions()

  return {
    async send(envelope) {
      const { headers, body } = envelope
      const { sdkVersion } = headers

      try {
        await requestExecutor({
          body: {
            sdkVersion,
            data: body,
          },
        })
      } catch (error) {
        if (options?.enableLogger) {
          console.error('plasticine-monitor 数据上报出错：', error)
        }
      }
    },
  }
}
