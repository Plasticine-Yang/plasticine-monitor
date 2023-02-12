import type { Client, ClientConstructor, ClientOptions } from '@plasticine-monitor/types'

import { getCurrentHub } from './hub'

/**
 * @description 初始化 Hub 和 Client 并将二者关联
 */
export function initAndBind<C extends Client, O extends ClientOptions>(
  clientConstructor: ClientConstructor<C, O>,
  clientOptions: O,
): void {
  const hub = getCurrentHub()
  const client = new clientConstructor(clientOptions)

  hub.bindClient(client)
}
