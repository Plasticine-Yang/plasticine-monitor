interface Plugin<T = unknown> {
  install: (instance: T) => void
}

export type { Plugin }
