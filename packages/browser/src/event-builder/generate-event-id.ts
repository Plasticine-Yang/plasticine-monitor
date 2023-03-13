import sha256 from 'crypto-js/sha256'

import { parse } from 'stacktrace-parser'

import { isDOMException, isError, isErrorEvent } from '@plasticine-monitor/shared'
import type { EventLevel, RuntimeException } from '@plasticine-monitor/types'

interface GenerateEventIdOptions {
  exception?: RuntimeException
  message?: string
  level?: EventLevel
}

function generateEventId(options: GenerateEventIdOptions): string {
  const { exception, message, level } = options

  if (exception !== undefined) return generateEventIdFromException(exception)

  if (message !== undefined && level !== undefined) return generateEventIdFromMessage(message, level)

  return generateRandomEventId()
}

function generateEventIdFromException(exception: RuntimeException): string {
  if ((isError(exception) || isDOMException(exception)) && exception.stack !== undefined) {
    return generateEventIdFromErrorLike(exception)
  }

  if (isErrorEvent(exception) && isError(exception.error)) {
    return generateEventIdFromErrorLike(exception.error)
  }

  return generateRandomEventId()
}

interface ErrorLike {
  name: string
  message: string
  stack?: string
}

function generateEventIdFromErrorLike(errorLike: ErrorLike): string {
  const stackframes = parse(errorLike.stack!)

  // 使用 name + message + stackframes 作为 hash 的输入
  const hashInput: string[] = [errorLike.name, errorLike.message]

  stackframes.forEach((frame) => {
    const { file, methodName, lineNumber, column } = frame

    file !== null && hashInput.push(file)
    methodName !== null && hashInput.push(methodName)
    lineNumber !== null && hashInput.push(String(lineNumber))
    column !== null && hashInput.push(String(column))
  })

  return sha256(stackframes.join('-')).toString()
}

function generateEventIdFromMessage(message: string, level: EventLevel): string {
  const hashInput = `${message}-${level}`

  return sha256(hashInput).toString()
}

function generateRandomEventId() {
  const hashInput = `${Date.now()}-${Math.random()}`

  return sha256(hashInput).toString()
}

export { generateEventId }
