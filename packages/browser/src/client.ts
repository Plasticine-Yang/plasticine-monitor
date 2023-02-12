import type { ClientOptions } from '@plasticine-monitor/types'

import { BaseClient } from '@plasticine-monitor/core'

export type BrowserClientOptions = ClientOptions

export class BrowserClient extends BaseClient<BrowserClientOptions> {
  public constructor(options: BrowserClientOptions) {
    super(options)
  }
}
