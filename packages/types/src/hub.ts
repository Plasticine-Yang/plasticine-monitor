import type { Client } from './client'

export interface Hub {
  bindClient(client: Client): void
}
