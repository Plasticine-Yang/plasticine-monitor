import { markFuncStack } from './shared'

export const emitJSError = () => {
  markFuncStack()

  setTimeout(async () => {
    // @ts-ignore
    undefinedFn()
  }, 300)
}
