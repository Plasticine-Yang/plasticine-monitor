import type { Hub } from './hub'

export interface Integration {
  /** @description Property that holds the integration name */
  name: string

  setupOnce(getCurrentHub: () => Hub): void
}
