type Action<Payload = any, ReturnValue = any> = (
  payload: Payload,
) => ReturnValue

type Actions = Record<string, Action>

/**
 * @description 提取 Actions 中 action 的 payload 类型
 */
type ExtractActionPayloadType<
  ActionsType extends Actions,
  ActionKey extends keyof ActionsType,
> = ActionsType[ActionKey] extends (payload: infer Payload) => any
  ? Payload
  : never

/**
 * @description 提取 Actions 中 action 的返回值类型
 */
type ExtractActionReturnType<
  ActionsType extends Actions,
  ActionKey extends keyof ActionsType,
> = ActionsType[ActionKey] extends (payload: any) => infer ReturnValue
  ? ReturnValue
  : never

export type {
  Action,
  Actions,
  ExtractActionPayloadType,
  ExtractActionReturnType,
}
