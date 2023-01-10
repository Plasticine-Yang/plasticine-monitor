import type { Actions } from '../types'

import { Sender } from '..'

describe('sender', () => {
  test('should support call action chaining', async () => {
    interface ActionResponse<T = any> {
      code: number
      data: T
      message: 'success' | 'failed'
    }

    interface ActionsType extends Actions {
      'js-error': (payload: string) => ActionResponse<string>
      'network-error': (payload: string) => ActionResponse<string>
    }

    const sender = new Sender<ActionsType>()
    const res = {
      jsError: '',
      networkError: '',
    }

    sender
      .action('js-error', (payload: string) => {
        res.jsError = payload
        return {
          code: 0,
          data: payload,
          message: 'success',
        }
      })
      .action('network-error', (payload: string) => {
        res.networkError = payload
        return {
          code: 0,
          data: payload,
          message: 'success',
        }
      })

    const jsErrorResp = sender.send('js-error', 'js-error payload')
    expect(res.jsError).toBe('js-error payload')
    expect(res.networkError).toBe('')
    expect(jsErrorResp).toMatchInlineSnapshot(`
      {
        "code": 0,
        "data": "js-error payload",
        "message": "success",
      }
    `)

    const networkErrorResp = sender.send(
      'network-error',
      'network-error payload',
    )
    expect(res.jsError).toBe('js-error payload')
    expect(res.networkError).toBe('network-error payload')
    expect(networkErrorResp).toMatchInlineSnapshot(`
      {
        "code": 0,
        "data": "network-error payload",
        "message": "success",
      }
    `)
  })
})
