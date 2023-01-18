import type {
  BusinessResponse,
  ReportErrorPayload,
  ReportErrorPayloadWithId,
} from '@plasticine-monitor/shared'

import { api } from '@plasticine-monitor/shared'

type ActionsType = {
  /** @description 运行时错误 */
  'report-error': (
    payload: ReportErrorPayload,
  ) => Promise<BusinessResponse<ReportErrorPayloadWithId> | null>
}

const actions: ActionsType = {
  'report-error': async (payload) => {
    return api.error.reportError(payload)
  },
}

export type { ActionsType }

export { actions }
