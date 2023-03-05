import { isDOMException, isError, isErrorEvent } from '@plasticine-monitor/shared'
import type { EventException, RuntimeException } from '@plasticine-monitor/types'

export function generateEventExceptionFromRuntimeException(runtimeException: RuntimeException): EventException {
  if (isError(runtimeException)) return eventExceptionFromError(runtimeException)

  if (isErrorEvent(runtimeException)) return eventExceptionFromErrorEvent(runtimeException)

  if (isDOMException(runtimeException)) return eventExceptionFromDOMException(runtimeException)

  return {
    type: 'unknown',
    value: 'unknown',
  }
}

function eventExceptionFromError(error: Error): EventException {
  return {
    type: error.name,
    value: error.message,
  }
}

function eventExceptionFromErrorEvent(errorEvent: ErrorEvent): EventException {
  return eventExceptionFromError(errorEvent.error)
}

function eventExceptionFromDOMException(domException: DOMException): EventException {
  return eventExceptionFromError(domException)
}
