export interface EventException {
  type?: string
  value?: string
}

export type RuntimeException = Error | ErrorEvent | DOMException
