import { createTransport } from '@plasticine-monitor/core'
import type { CreateTransportOptions, Transport } from '@plasticine-monitor/types'

const XHR_READYSTATE_DONE = 4

export function createTransportWithXHR(options: CreateTransportOptions): Transport {
  const { url, headers } = options

  return createTransport(async (request) => {
    const { body } = request

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.addEventListener('error', reject)
      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === XHR_READYSTATE_DONE) {
          resolve({
            statusCode: xhr.status,
          })
        }
      })

      // set headers
      Object.entries(headers).forEach(([key, value]) => {
        xhr.setRequestHeader(key, value)
      })

      xhr.open('POST', url)
      xhr.send(JSON.stringify(body))
    })
  })
}
