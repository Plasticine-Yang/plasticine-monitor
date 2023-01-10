import { BusinessResponse } from '@plasticine-monitor/shared'

const networkErrorMap = new Map<number, string>([[404, 'not found']])
function processNetworkError(statusCode: number, statusText: string) {
  const errorMessage = networkErrorMap.has(statusCode)
    ? networkErrorMap.get(statusCode)!
    : statusText

  console.error('processNetworkError:', errorMessage)

  return errorMessage
}

function processBusinessError(businessResponse: BusinessResponse) {
  const { message } = businessResponse
  console.error('processBusinessError:', message)

  return message
}

export { processNetworkError, processBusinessError }
