import type { DSN } from './dsn'
import type { Plugin } from './plugin'
import type { CreateTransportOptions, Transport } from './transport'

/**
 * @description 实例化 SDK client 的 options
 */
export interface ClientOptions {
  /** @description 插件 */
  plugins: Plugin[]

  /**
   * @description 是否允许将 SDK 运行时的错误信息输出到控制台
   * @default false
   */
  enableLogger?: boolean

  /** 数据往哪里上报 */
  dsn?: DSN

  /** @description 创建 Transport 对象 */
  createTransport?: (options: CreateTransportOptions) => Transport
}

/**
 * @description 初始化 SDK 的 options
 */
export type Options = Partial<ClientOptions>
