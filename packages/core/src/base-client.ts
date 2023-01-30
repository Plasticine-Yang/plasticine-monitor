import type { Client, ClientOptions } from '@plasticine-monitor/types'

import { setupIntegrations } from './integration'

/**
 * @description Base implementation for all Javascript SDK clients.
 */
export abstract class BaseClient<O extends ClientOptions> implements Client<O> {
  private readonly _options: O

  protected constructor(options: O) {
    this._options = options
  }

  /**
   * @description Sets up the integrations in options
   */
  public setupIntegrations(): void {
    setupIntegrations(this._options.integrations)
  }
}
