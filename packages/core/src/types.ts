import { Sender } from './sender'

interface InitConfig {
  /** @description 监控平台 url */
  platformURL?: string
}

interface Context {
  sender: Sender
}

export type { InitConfig, Context }
