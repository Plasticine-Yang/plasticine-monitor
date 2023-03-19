import { transformDSNToURL } from '@plasticine-monitor/shared'
import type {
  Client,
  ClientOptions,
  DSN,
  Event,
  EventLevel,
  RuntimeException,
  Transport,
} from '@plasticine-monitor/types'
import { createEventEnvelope } from './envelope'

import { setupPlugins } from './plugins'

/**
 * @description 只提供通用逻辑的抽象类，具体的平台相关的逻辑需要子类继承去实现
 */
export abstract class BaseClient<O extends ClientOptions> implements Client<O> {
  protected readonly _options: O

  protected readonly _dsn?: DSN

  protected readonly _transport?: Transport

  // 只允许子类实例化 不允许直接实例化 BaseClient
  protected constructor(options: O) {
    const { dsn, createTransport } = options

    this._options = options

    if (dsn) {
      this._dsn = dsn

      const url = transformDSNToURL(dsn)
      this._transport = createTransport?.({
        url,
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }

  getOptions(): O {
    return this._options
  }

  setupPlugins(): void {
    const { plugins } = this._options
    setupPlugins(plugins)
  }

  public captureException(exception: RuntimeException): string {
    const event = this.eventFromException(exception)
    this.sendEvent(event)

    return event.eventId
  }

  public captureMessage(message: string, level?: EventLevel | undefined): string {
    const event = this.eventFromMessage(message, level)
    this.sendEvent(event)

    return event.eventId
  }

  public sendEvent(event: Event): void {
    if (this._dsn) {
      const envelope = createEventEnvelope(this._dsn, event)

      this._transport?.send(envelope)
    }
  }

  public abstract eventFromException(exception: RuntimeException): Event

  public abstract eventFromMessage(message: string, level?: EventLevel | undefined): Event
}
