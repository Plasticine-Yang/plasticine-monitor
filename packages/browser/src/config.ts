interface WebSDKConfig {
  /** @description 代码部署版本 */
  release: string

  /** @description 数据上报 url */
  senderURL: string
}

const defaultWebSDKConfig: Required<WebSDKConfig> = {
  release: '',
  senderURL: '',
}

export type { WebSDKConfig }

export { defaultWebSDKConfig }
