import type { EventException } from './exception'

export interface Event {
  eventId: string
  message?: string
  exception?: EventException
  level?: EventLevel
}

export type EventLevel = 'info' | 'warning' | 'error' | 'debug'
