import type { BusinessResponse, WebReport } from '@plasticine-monitor/shared'

import { api } from '@plasticine-monitor/shared'

type ReportActionType = 'report-js-error'

type ReportAction = (
  report: WebReport,
) => Promise<BusinessResponse<null> | null>

type ActionsType = Record<ReportActionType, ReportAction>

const actions: ActionsType = {
  'report-js-error': async (jsErrorReport) => {
    return api.reportJSError(jsErrorReport)
  },
}

export type { ActionsType }
export { actions }
