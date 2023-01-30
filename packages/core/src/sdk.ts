import type { Client, ClientOptions } from '@plasticine-monitor/types'

import { getCurrentHub } from './hub'

/**
 * generic I: Client Instance
 *
 * generic O: ClientOption
 */
type ClientClass<I extends Client, O extends ClientOptions> = new (options: O) => I

/**
 * @description Inits Hub and Client instances and bind client instance to hub instance.
 * @param clientClass The class that implements Client interface
 * @param options The options for instantiating clientClass
 */
export function initAndBind<I extends Client, O extends ClientOptions>(
  clientClass: ClientClass<I, O>,
  options: O,
): void {
  const hub = getCurrentHub()
  const client = new clientClass(options)
  hub.bindClient(client)
}
