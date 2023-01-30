/**
 * @description Internal global object with common properties and `__PLASTICINE_MONITOR__`.
 */
interface InternalGlobalObject {
  /**
   * @description
   * DSN to use when client doesn't pass the dsn option.
   *
   * It's value will be set from environment variables when building.
   */
  PLASTICINE_MONITOR_DSN?: string

  /** @description The global object for plasticine-monitor runtime.  */
  __PLASTICINE_MONITOR__: {
    hub: any
  }
}

/**
 * @description The global object in current Javascript runtime.
 */
const GLOBAL_OBJECT: InternalGlobalObject =
  (typeof globalThis === 'object' && globalThis) ||
  (typeof window === 'object' && window) ||
  (typeof self === 'object' && self) ||
  (typeof global === 'object' && global) ||
  (function (this: any) {
    return this
  })() ||
  {}

/**
 * @description
 * Returns a singleton contained in the global `__PLASTICINE_MONITOR__` object.
 *
 * If the singleton doesn't already exist in `__PLASTICINE_MONITOR__`, it will be created using the given factory
 * function and added to the `__PLASTICINE_MONITOR__` object.
 *
 * @param name The name of global singleton on `__PLASTICINE_MONITOR__`
 * @param creator The creator factory function to create the singleton if it doesn't already exist on `__PLASTICINE_MONITOR__`
 * @returns The singleton
 */
function getGlobalSingleton<T>(name: keyof InternalGlobalObject['__PLASTICINE_MONITOR__'], creator: () => T) {
  // Get `__PLASTICINE_MONITOR__` or init `__PLASTICINE_MONITOR__` if it doesn't exist on internalGlobalObject
  const __PLASTICINE_MONITOR__ = (GLOBAL_OBJECT.__PLASTICINE_MONITOR__ = GLOBAL_OBJECT.__PLASTICINE_MONITOR__ || {})

  // Get singleton on the `__PLASTICINE_MONITOR__` or create it by the creator if the name of singleton
  // doesn't exist on `__PLASTICINE_MONITOR__`
  const singleton = __PLASTICINE_MONITOR__[name] || (__PLASTICINE_MONITOR__[name] = creator())

  return singleton as T
}

export type { InternalGlobalObject as InternalGlobal }

export { GLOBAL_OBJECT, getGlobalSingleton }
