import { markFuncStack } from './shared'

export const emitJSError = () => {
  markFuncStack()

  // @ts-ignore
  undefinedFn()
}
