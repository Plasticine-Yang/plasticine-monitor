import type {
  BusinessResponse,
  JSErrorPayload,
} from '@plasticine-monitor/shared'

import { api } from '@plasticine-monitor/shared'

type ActionsType = {
  /** @description js-error */
  'report-js-error': (
    payload: JSErrorPayload,
  ) => Promise<BusinessResponse<null> | null>
}

const actions: ActionsType = {
  'report-js-error': async (payload) => {
    return api.jsError.reportJSError(payload)
  },
}

export type { ActionsType }

export { actions }
