/**
 * @description 错误上报 payload
 */
export interface ReportErrorPayload {
  /** @description 错误类型 */
  type: string

  /** @description 错误信息 */
  message: string

  /** @description 为每个错误生成的标识 id */
  uid: string

  /** @description 错误堆栈记录 -- Promise Error 无法捕获到堆栈信息 */
  stacktrace?: string
}

/**
 * @description 带有 id 的 payload
 */
export type ReportErrorPayloadWithId = { id: number } & ReportErrorPayload
