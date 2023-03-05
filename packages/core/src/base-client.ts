import type { Client, ClientOptions, RuntimeException } from '@plasticine-monitor/types'
import { Event, EventLevel } from 'packages/types/src/event'

import { setupPlugins } from './plugins'

/**
 * @description 只提供通用逻辑的抽象类，具体的平台相关的逻辑需要子类继承去实现
 */
export abstract class BaseClient<O extends ClientOptions> implements Client<O> {
  protected readonly _options: O

  // 只允许子类实例化 不允许直接实例化 BaseClient
  protected constructor(options: O) {
    this._options = options
  }

  getOptions(): O {
    return this._options
  }

  setupPlugins(): void {
    const { plugins } = this._options
    setupPlugins(plugins)
  }

  public abstract eventFromException(exception: RuntimeException): Event

  public abstract eventFromMessage(message: string, level?: EventLevel | undefined): Event
}
