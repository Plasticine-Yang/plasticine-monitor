import { Core } from './core'

interface Plugin<T extends Core<any, any> = Core> {
  install: (instance: T) => void
}

export type { Plugin }
