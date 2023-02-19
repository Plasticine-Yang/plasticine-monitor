import * as Sentry from '@sentry/browser'
import { BrowserTracing } from '@sentry/tracing'

export function setupSentry() {
  Sentry.init({
    dsn: 'https://7739b75518814822b9ca01f681a63d9c@o4504406454829056.ingest.sentry.io/4504597574123520',
    integrations: [new BrowserTracing()],
    tracesSampleRate: 1.0,
    release: '0.0.1',
  })
}
