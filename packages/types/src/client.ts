import type { Event, EventLevel } from './event'
import type { RuntimeException } from './exception'
import type { ClientOptions } from './options'

export type ClientConstructor<C extends Client, O extends ClientOptions> = new (options: O) => C

export interface Client<O extends ClientOptions = ClientOptions> {
  /** @description 获取 client options */
  getOptions(): O

  /** @description 注册插件 - 插件从 options 中获取 */
  setupPlugins(): void

  /** @description 根据异常生成 Event */
  eventFromException(exception: RuntimeException): Event

  /** @description 根据消息生成 Event */
  eventFromMessage(message: string, level?: EventLevel): Event
}
