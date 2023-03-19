import type { DSN, Envelope, Event } from '@plasticine-monitor/types'

export function createEventEnvelope(dsn: DSN, event: Event): Envelope {
  return {
    headers: {
      sdkVersion: '0.0.0',
    },
    body: [
      {
        type: 'event',
        payload: event,
      },
    ],
  }
}
