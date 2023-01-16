import { ConfigManager } from '../config-manager'

describe('config-manager', () => {
  test('should resolve config with default value', () => {
    interface Config {
      name: string
      age?: number
      phone?: number
    }
    const config: Config = {
      name: 'foo',
    }
    const defaultConfig: Required<Config> = {
      name: 'default-foo',
      age: 21,
      phone: 666,
    }

    const configManager = new ConfigManager(config, defaultConfig)
    expect(configManager.resolvedConfig).toMatchInlineSnapshot(`
      {
        "age": 21,
        "name": "foo",
        "phone": 666,
      }
    `)
  })
})
