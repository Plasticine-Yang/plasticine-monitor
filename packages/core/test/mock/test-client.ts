import type { ClientOptions } from '@plasticine-monitor/types'

import { BaseClient } from '../../src/base-client'

export type TestClientOptions = ClientOptions

export class TestClient extends BaseClient<TestClientOptions> {
  constructor(options: TestClientOptions) {
    super(options)
  }
}
