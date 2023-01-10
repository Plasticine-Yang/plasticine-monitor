interface WebSDKConfig {
  /** @description 数据上报 url */
  senderURL: string
}

const defaultWebSDKConfig: Required<WebSDKConfig> = {
  senderURL: '',
}

export type { WebSDKConfig }

export { defaultWebSDKConfig }
