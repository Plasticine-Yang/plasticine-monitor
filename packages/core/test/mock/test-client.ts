import { type ClientOptions, type Event, EventLevel, type RuntimeException } from '@plasticine-monitor/types'

import { BaseClient } from '../../src/base-client'

export type TestClientOptions = ClientOptions

export class TestClient extends BaseClient<TestClientOptions> {
  constructor(options: TestClientOptions) {
    super(options)
  }

  public eventFromException(exception: RuntimeException): Event {
    return {
      eventId: '',
      exception: {
        type: '',
        value: '',
      },
      level: EventLevel.Info,
      message: exception.message,
    }
  }

  public eventFromMessage(message: string, level?: EventLevel | undefined): Event {
    return {
      eventId: '',
      level,
      message,
    }
  }
}
