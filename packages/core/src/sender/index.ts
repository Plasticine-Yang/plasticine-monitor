import type { Action, Actions, ExtractActionPayloadType } from './types'

class Sender<ActionsType extends Actions = Actions> {
  private actionMap = new Map<keyof ActionsType, Action>()

  /**
   * @description 注册单个 action -- action 用于描述发送行为
   * @param type action type
   * @param action action
   */
  private registerAction<T = any, R = any>(
    type: keyof ActionsType,
    action: Action<T, R>,
  ): void {
    this.actionMap.set(type, action)
  }

  /**
   * @description 批量注册 actions
   * @param actions 所有 actions
   */
  public batchRegisterActions(actions: ActionsType) {
    for (const [type, action] of Object.entries(actions)) {
      this.action(
        type as keyof ActionsType,
        action as ActionsType[keyof ActionsType],
      )
    }
  }

  public action<ActionKey extends keyof ActionsType>(
    type: ActionKey,
    action: ActionsType[ActionKey],
  ) {
    this.registerAction(type, action)

    return this
  }

  public send<ActionKey extends keyof ActionsType>(
    type: ActionKey,
    payload: ExtractActionPayloadType<ActionsType, ActionKey>,
  ) {
    if (this.actionMap.has(type)) {
      const action = this.actionMap.get(type)!
      return action.call(null, payload)
    }

    return null
  }
}

export { Sender }
