import { JSErrorReport } from './js-error'

export type SendEvent = JSErrorReport

export type WebReport = Omit<SendEvent, 'common'>
