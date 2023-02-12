import type { Hub } from './hub'

export interface Plugin {
  /** @description 插件名称 */
  name: string

  /**
   * @description 注册插件
   * @param getCurrentHub 获取 Hub 实例
   */
  setupOnce(getCurrentHub: () => Hub): void
}
