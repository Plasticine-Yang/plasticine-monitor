import type { ClientOptions } from './options'

export type ClientConstructor<C extends Client, O extends ClientOptions> = new (options: O) => C

export interface Client<O extends ClientOptions = ClientOptions> {
  /** @description 获取 client options */
  getOptions(): O

  /** @description 注册插件 - 插件从 options 中获取 */
  setupPlugins(): void
}
