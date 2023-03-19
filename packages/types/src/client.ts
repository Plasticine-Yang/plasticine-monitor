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

  /**
   * @description 捕获异常并进行上报
   * @returns 异常对应的 Event 的 id
   */
  captureException(exception: RuntimeException): string

  /**
   * @description 捕获消息并进行上报
   * @param message 消息
   * @param level 消息等级
   * @returns 消息对应的 Event 的 id
   */
  captureMessage(message: string, level?: EventLevel): string

  sendEvent(event: Event): void
}
