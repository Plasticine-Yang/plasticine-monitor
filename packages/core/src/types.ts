import { Core } from './core'

interface Plugin {
  install: (instance: Core) => void
}

export type { Plugin }
