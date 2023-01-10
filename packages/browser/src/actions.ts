import type { BusinessResponse } from '@plasticine-monitor/shared'
import type {
  RuntimeErrorActionPayload,
  RuntimeErrorActionResponse,
} from './types'

import { api } from '@plasticine-monitor/shared'

type ActionsType = {
  /** @description 运行时错误 */
  'runtime-error': (
    payload: RuntimeErrorActionPayload,
  ) => Promise<BusinessResponse<RuntimeErrorActionResponse>>
}

const actions: ActionsType = {
  async 'runtime-error'(payload) {
    const res = await api.runtimeError.reportRuntimeErrorInfo(payload)

    return res!
  },
}

export type { ActionsType }

export { actions }
