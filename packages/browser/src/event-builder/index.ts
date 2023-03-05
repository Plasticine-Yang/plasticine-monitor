import { EventLevelEnum } from '@plasticine-monitor/shared'
import type { Event, EventLevel, RuntimeException } from '@plasticine-monitor/types'

import { DEFAULT_MESSAGE_LEVEL } from '../constants'
import { generateEventExceptionFromRuntimeException } from './generate-event-exception'

import { generateEventId } from './generate-event-id'

export function eventFromException(exception: RuntimeException): Event {
  const eventId = generateEventId({ exception })
  const eventException = generateEventExceptionFromRuntimeException(exception)

  return {
    eventId,
    level: EventLevelEnum.Error,
    exception: eventException,
    message: exception.message,
  }
}

export function eventFromMessage(message: string, level?: EventLevel): Event {
  const eventId = generateEventId({ message, level })

  return {
    eventId,
    level: level ?? DEFAULT_MESSAGE_LEVEL,
    message,
  }
}
