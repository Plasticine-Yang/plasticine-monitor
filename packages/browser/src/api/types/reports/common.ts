export interface Common {
  /** 客户端环境 */
  url: string
  protocol: string
  domain: string
  path: string
  query: string

  /** @description 上报 SDK 版本 */
  sdkVersion: string

  /** @description 代码部署版本 */
  release: string

  /** @description 客户端时间戳 */
  timestamp: number
}
