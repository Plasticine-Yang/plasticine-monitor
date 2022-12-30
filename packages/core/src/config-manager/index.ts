import type { InitConfig } from '../types'
import type { ResolvedConfig } from './types'
import { defaultInitConfig } from './default-config'
import { SenderConfig } from '../sender/types'

function setupConfigManager(initConfig: InitConfig): ResolvedConfig {
  const resolvedInitConfig = resolveInitConfigWithDefaults(initConfig)

  const resolvedConfig: ResolvedConfig = {
    senderConfig: resolveSenderConfig(resolvedInitConfig),
  }

  return resolvedConfig
}

/**
 * @description 配置缺失时使用默认配置替代
 * @param initConfig InitConfig
 */
const resolveInitConfigWithDefaults = (
  initConfig: InitConfig,
): Required<InitConfig> => {
  const resolvedConfig = Object.assign({}, initConfig)

  Object.entries(resolvedConfig).forEach(([key, value]) => {
    // 使用默认值替代未传入的配置项
    if (!value) {
      initConfig[key as keyof InitConfig] =
        defaultInitConfig[key as keyof InitConfig]
    }
  })

  return resolvedConfig as Required<InitConfig>
}

function resolveSenderConfig(
  resolvedInitConfig: Required<InitConfig>,
): SenderConfig {
  const { platformURL } = resolvedInitConfig

  return {
    platformURL,
  }
}

export { setupConfigManager }
