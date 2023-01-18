/**
 * @description js error payload
 */
export interface JSErrorPayload {
  error: JSError
}

interface JSError {
  /** @description 错误名称 */
  name: string

  /** @description 错误信息 */
  message: string

  /** @description 错误堆栈记录 -- Promise Error 无法捕获到堆栈信息 */
  stacktrace?: string

  /** @description 错误文件名 */
  filename?: string

  /** @description 错误发生的代码对应行号 */
  lineno?: number

  /** @description 错误发生的代码对应列号 */
  colno?: number
}
