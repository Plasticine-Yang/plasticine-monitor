import { AxiosRequestConfig } from 'axios'

/**
 * @description add header fields here
 */
function processRequestHeaders(config: AxiosRequestConfig<any>) {
  return config
}

export { processRequestHeaders }
