import { createTransport } from '@plasticine-monitor/core'
import type { CreateTransportOptions, Transport } from '@plasticine-monitor/types'

export function createTransportWithFetch(options: CreateTransportOptions): Transport {
  const { url, headers } = options

  return createTransport(async (request) => {
    const { body } = request

    const { status } = await fetch(url, {
      body: JSON.stringify(body),
      headers,
      method: 'POST',
    })

    return {
      statusCode: status,
    }
  })
}
