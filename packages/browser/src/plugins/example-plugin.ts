import type { Plugin } from '@plasticine-monitor/types'

export function examplePlugin(): Plugin {
  return {
    name: 'examplePlugin',
    setupOnce() {
      console.log('examplePlugin setup:')
    },
  }
}
