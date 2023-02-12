import type { Client, ClientOptions, Hub as HubInterface, Layer } from '@plasticine-monitor/types'

import { getOrCreateSingletonOnGlobalObject } from '@plasticine-monitor/shared'

export class Hub implements HubInterface {
  private readonly _stack: Layer[] = [{}]

  constructor(client?: Client) {
    if (client !== undefined) {
      this.bindClient(client)
    }
  }

  /** @inheritdoc */
  public bindClient(client?: Client<ClientOptions> | undefined): void {
    const top = this.getStackTop()
    top.client = client

    client?.setupPlugins()
  }

  /** @inheritdoc */
  public getClient<C extends Client>(): C | undefined {
    return this.getStackTop().client as C
  }

  /** @inheritdoc */
  public getStack(): Layer[] {
    return this._stack
  }

  /** @inheritdoc */
  public getStackTop(): Layer {
    return this._stack.at(-1) ?? {}
  }
}

/**
 * @description 从全局对象的 `__PLASTICINE_MONITOR__` 中获取 hub 单例
 */
export function getCurrentHub(): Hub {
  return getOrCreateSingletonOnGlobalObject('hub', () => new Hub())
}
