import type {
  Action,
  Actions,
  ExtractActionPayloadType,
  SenderConfig,
} from './types'

import { axiosInstanceManager } from '../api/axios'

class Sender<ActionsType extends Actions = Actions> {
  private actionMap = new Map<keyof ActionsType, Action>()

  constructor(senderConfig: SenderConfig) {
    const { platformURL } = senderConfig

    axiosInstanceManager.initAxiosInstance(platformURL)
  }

  /**
   * @description 注册 action -- action 用于描述发送行为
   * @param type action type
   * @param action action
   */
  private registerAction<T = any, R = any>(
    type: keyof ActionsType,
    action: Action<T, R>,
  ): void {
    this.actionMap.set(type, action)
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
