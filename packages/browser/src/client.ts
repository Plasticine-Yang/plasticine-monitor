import type { ClientOptions, Options } from '@plasticine-monitor/types'

import { BaseClient } from '@plasticine-monitor/core'

/** @description Configuration options for Browser SDK. */
type BrowserOptions = Options

/** @description Configuration options for the Browser SDK Client class. */
type BrowserClientOptions = ClientOptions

/** @description The plasticine-monitor Browser SDK Client. */
class BrowserClient extends BaseClient<BrowserClientOptions> {
  public constructor(options: BrowserClientOptions) {
    super(options)
  }
}

export type { BrowserOptions, BrowserClientOptions }

export { BrowserClient }
