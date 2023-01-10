import type { BusinessResponse } from '../api/types'

import { SUCCESS_BUSINESS_API_CODE } from '../api/constants'

import axios, { AxiosInstance } from 'axios'

import {
  processBusinessError,
  processNetworkError,
  processRequestHeaders,
} from './interceptors'

class AxiosInstanceManager {
  private instance!: AxiosInstance

  initAxiosInstance(baseURL: string) {
    this.instance = axios.create({ baseURL })

    // request interceptor
    this.instance.interceptors.request.use(config => {
      // process request headers
      config = processRequestHeaders(config)

      return config
    })

    // response interceptor
    this.instance.interceptors.response.use(response => {
      // Network Error
      if (!String(response.status).startsWith('2')) {
        return Promise.reject(
          processNetworkError(response.status, response.statusText),
        )
      }

      // Business Error
      if (
        (response.data as BusinessResponse<any>)?.code !==
        SUCCESS_BUSINESS_API_CODE
      ) {
        return Promise.reject(processBusinessError(response.data))
      }

      return response
    })
  }

  getInstance() {
    return this.instance
  }
}

const axiosInstanceManager = new AxiosInstanceManager()

export { axiosInstanceManager, AxiosInstanceManager }
