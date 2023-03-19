import type { Plugin } from '@plasticine-monitor/types'

export function examplePlugin(): Plugin {
  return {
    name: 'examplePlugin',
    setupOnce(getCurrentHub) {
      const client = getCurrentHub().getClient()
      client?.captureException(new Error('example plugin error'))
      client?.captureMessage('example plugin message', 'debug')
    },
  }
}
