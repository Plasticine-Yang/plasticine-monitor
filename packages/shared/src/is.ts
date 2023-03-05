const objectToString = Object.prototype.toString

function isBuiltin(input: unknown, builtinClassName: string) {
  return objectToString.call(input) === `[object ${builtinClassName}]`
}

export function isError(input: unknown): input is Error {
  return isBuiltin(input, 'Error')
}

export function isErrorEvent(input: unknown): input is ErrorEvent {
  return isBuiltin(input, 'ErrorEvent')
}

export function isDOMException(input: unknown): input is DOMException {
  return isBuiltin(input, 'DOMException')
}
