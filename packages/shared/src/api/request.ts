import { BusinessResponse } from './types'

import type { Method } from 'axios'

import { axiosInstanceManager, AxiosInstanceManager } from '../axios'

type ResponsePreprocessor<T = unknown> = (
  businessResponse: BusinessResponse<T>,
) => BusinessResponse<T>

/**
 * @description 响应结果以元组返回 第一个元素是错误信息，第二个元素是 api 调用的结果
 */
type UnifiedResult<T = unknown> = [any, BusinessResponse<T> | undefined]

class Request {
  constructor(private axiosInstanceManager: AxiosInstanceManager) {}

  request<RequestBody = unknown, ResponseData = unknown>(
    url: string,
    method: Method,
    body?: RequestBody,
    params?: Record<string, string | number>,
    responsePreprocessor?: ResponsePreprocessor<ResponseData>,
  ): Promise<UnifiedResult<ResponseData>> {
    return new Promise(resolve => {
      this.axiosInstanceManager
        .getInstance()
        .request({ url, method, data: body, params })
        .then(axiosResponse => {
          let businessResponse: BusinessResponse<ResponseData> =
            axiosResponse.data

          responsePreprocessor &&
            (businessResponse = responsePreprocessor(businessResponse))

          resolve([null, businessResponse])
        })
        .catch(reason => {
          resolve([reason, undefined])
        })
    })
  }

  get<ResponseData = unknown>(
    url: string,
    params?: Record<string, string | number>,
    responsePreprocessor?: ResponsePreprocessor<ResponseData>,
  ): Promise<UnifiedResult<ResponseData>> {
    return this.request(url, 'GET', null, params, responsePreprocessor)
  }

  post<RequestBody = unknown, ResponseData = unknown>(
    url: string,
    body?: RequestBody,
    params?: Record<string, string | number>,
    responsePreprocessor?: ResponsePreprocessor<ResponseData>,
  ): Promise<UnifiedResult<ResponseData>> {
    return this.request(url, 'POST', body, params, responsePreprocessor)
  }

  delete<RequestBody = unknown, ResponseData = unknown>(
    url: string,
    body?: RequestBody,
    params?: Record<string, string | number>,
    responsePreprocessor?: ResponsePreprocessor<ResponseData>,
  ): Promise<UnifiedResult<ResponseData>> {
    return this.request(url, 'DELETE', body, params, responsePreprocessor)
  }

  put<RequestBody = unknown, ResponseData = unknown>(
    url: string,
    body?: RequestBody,
    params?: Record<string, string | number>,
    responsePreprocessor?: ResponsePreprocessor<ResponseData>,
  ): Promise<UnifiedResult<ResponseData>> {
    return this.request(url, 'PUT', body, params, responsePreprocessor)
  }

  patch<RequestBody = unknown, ResponseData = unknown>(
    url: string,
    body?: RequestBody,
    params?: Record<string, string | number>,
    responsePreprocessor?: ResponsePreprocessor<ResponseData>,
  ): Promise<UnifiedResult<ResponseData>> {
    return this.request(url, 'PATCH', body, params, responsePreprocessor)
  }
}

const request = new Request(axiosInstanceManager)

export { request }
