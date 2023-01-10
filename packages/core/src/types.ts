import { Core } from './core'

interface CoreConfig {
  /** @description 监控平台 url */
  platformURL?: string
}

interface Plugin {
  install: (instance: Core) => void
}

export type { CoreConfig, Plugin }
