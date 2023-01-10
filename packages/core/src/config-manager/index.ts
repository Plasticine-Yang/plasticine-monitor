import { SenderConfig } from '../sender/types'
import type { CoreConfig } from '../types'
import { defaultInitConfig } from './default-config'

class ConfigManager {
  private resolvedInitConfig: Required<CoreConfig>
  private senderConfig: SenderConfig

  constructor(private initConfig: CoreConfig) {
    this.resolvedInitConfig = this.resolveInitConfigWithDefaults()
    this.senderConfig = this.resolveSenderConfig()
  }

  private resolveInitConfigWithDefaults(): Required<CoreConfig> {
    const resolvedConfig = Object.assign({}, this.initConfig)

    Object.entries(resolvedConfig).forEach(([key, value]) => {
      // 使用默认值替代未传入的配置项
      if (!value) {
        this.initConfig[key as keyof CoreConfig] =
          defaultInitConfig[key as keyof CoreConfig]
      }
    })

    return resolvedConfig as Required<CoreConfig>
  }

  private resolveSenderConfig(): SenderConfig {
    const { platformURL } = this.resolvedInitConfig

    return {
      platformURL,
    }
  }

  public getSenderConfig(): SenderConfig {
    return this.senderConfig
  }
}

export { ConfigManager }
