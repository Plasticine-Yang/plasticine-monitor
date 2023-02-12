import type { Client } from './client'

/** @description 内部模拟函数调用栈的栈帧元素类型 */
export interface Layer {
  client?: Client
}

export interface Hub {
  /** @description 将 client 绑定到 hub 中 */
  bindClient(client?: Client): void

  /** @description 获取 Client 实例 */
  getClient(): Client | undefined

  /** @description 获取内部模拟的函数调用栈 */
  getStack(): Layer[]

  /** @description 获取内部模拟的函数调用栈的栈顶元素 */
  getStackTop(): Layer
}
