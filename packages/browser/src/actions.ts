import type { BusinessResponse, WebReport } from './api'

type ReportActionType = 'report'

type ReportAction = (
  report: WebReport,
) => Promise<BusinessResponse<null> | null>

type ActionsType = Record<ReportActionType, ReportAction>

export type { ActionsType }
