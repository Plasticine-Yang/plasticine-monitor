interface InternalGlobalObject {
  __PLASTICINE_MONITOR__: {
    hub?: any
  }
}

export const GLOBAL_OBJECT: InternalGlobalObject =
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
 * 从全局对象的 `__PLASTICINE_MONITOR__` 中获取全局单例值，尽量避免直接通过 GLOBAL_OBJECT 获取值
 * 因为 GLOBAL_OBJECT.__PLASTICINE_MONITOR__ 可能为 undefined
 * 通过该函数去获取能够保证其不为 undefined
 *
 * @param factory 待获取的属性不存在时会调用该工厂函数进行创建
 */
export function getOrCreateSingletonOnGlobalObject<T>(
  key: keyof InternalGlobalObject['__PLASTICINE_MONITOR__'],
  factory: () => T,
): T {
  // 确保全局对象上存在 `__PLASTICINE_MONITOR__`
  const __PLASTICINE_MONITOR__ = (GLOBAL_OBJECT.__PLASTICINE_MONITOR__ = GLOBAL_OBJECT.__PLASTICINE_MONITOR__ || {})

  // 待获取的单例 不存在时则调用工厂函数进行创建
  const singleton = __PLASTICINE_MONITOR__[key] || (__PLASTICINE_MONITOR__[key] = factory())

  return singleton
}
