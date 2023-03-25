import { getGlobalObject } from '@plasticine-monitor/shared'
import type { Plugin } from '@plasticine-monitor/types'

export function errorMonitorPlugin(): Plugin {
  return {
    name: 'error-monitor-plugin',
    setupOnce(getCurrentHub) {
      const WINDOW = getGlobalObject<Window>()
      const client = getCurrentHub().getClient()

      if (client) {
        WINDOW.addEventListener('error', (ev) => {
          client.captureException(ev.error)
        })

        WINDOW.addEventListener('unhandledrejection', (ev) => {
          client.captureException(ev.reason)
        })
      }
    },
  }
}
