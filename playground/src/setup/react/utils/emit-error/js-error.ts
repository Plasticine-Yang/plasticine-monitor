export const emitJSError = () => {
  markFuncStack()

  // @ts-ignore
  undefinedFn()
}

function markFuncStack() {
  console.log('markFuncStack')
}
