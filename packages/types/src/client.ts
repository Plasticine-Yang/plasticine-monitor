import type { ClientOptions } from './options'

export interface Client<O extends ClientOptions = ClientOptions> {
  setupIntegrations(): void
}
