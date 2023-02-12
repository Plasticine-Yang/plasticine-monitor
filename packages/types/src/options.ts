import type { Plugin } from './plugin'

/**
 * @description 实例化 SDK client 的 options
 */
export interface ClientOptions {
  /** @description 插件 */
  plugins: Plugin[]
}

/**
 * @description 初始化 SDK 的 options
 */
export type Options = Partial<ClientOptions>
