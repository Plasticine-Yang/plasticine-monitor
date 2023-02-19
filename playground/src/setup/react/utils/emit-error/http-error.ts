import { markFuncStack } from './shared'

export const emitHttpError = async () => {
  markFuncStack()

  await fetch('/api/test/400')

  // @ts-ignore
  undefinedFn()
}
