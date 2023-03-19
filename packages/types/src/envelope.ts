import type { Event } from './event'

export type EnvelopeItemType = 'event' | 'user_report'

export interface EnvelopeHeaders {
  sdkVersion: string
}

export interface EnvelopeBodyItem {
  type: EnvelopeItemType
  payload: Event
}

export interface Envelope {
  headers: EnvelopeHeaders
  body: EnvelopeBodyItem[]
}
