import type { EventLevel, ClientOptions, Event, RuntimeException } from '@plasticine-monitor/types'

import { BaseClient } from '@plasticine-monitor/core'
import { eventFromException, eventFromMessage } from './event-builder'

export type BrowserClientOptions = ClientOptions

export class BrowserClient extends BaseClient<BrowserClientOptions> {
  public constructor(options: BrowserClientOptions) {
    super(options)
  }

  public eventFromException(exception: RuntimeException): Event {
    return eventFromException(exception)
  }

  public eventFromMessage(message: string, level?: EventLevel): Event {
    return eventFromMessage(message, level)
  }
}
