import type { TestClientOptions } from './mock/test-client'

import { getCurrentHub } from '../src/hub'
import { TestClient } from './mock/test-client'

describe('BaseClient', () => {
  test('constructor / getOptions()', () => {
    const options: TestClientOptions = {
      plugins: [],
    }
    const client = new TestClient(options)
    expect(client.getOptions()).toEqual(options)
  })

  test('setupPlugins', () => {
    const pluginSetup = {
      isSetup: false,
      clientOptions: {},
    }

    const options: TestClientOptions = {
      plugins: [
        {
          name: 'testPlugin',
          setupOnce(getCurrentHub) {
            const hub = getCurrentHub()
            const client = hub.getClient()

            pluginSetup.isSetup = true
            pluginSetup.clientOptions = client!.getOptions()
          },
        },
      ],
    }

    const client = new TestClient(options)
    const hub = getCurrentHub()
    hub.bindClient(client)

    expect(pluginSetup).toMatchInlineSnapshot(`
      {
        "clientOptions": {
          "plugins": [
            {
              "name": "testPlugin",
              "setupOnce": [Function],
            },
          ],
        },
        "isSetup": true,
      }
    `)
  })
})
