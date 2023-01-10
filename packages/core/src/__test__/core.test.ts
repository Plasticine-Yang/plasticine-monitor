import { Core } from '../core'

describe('core', () => {
  test('should work with sender', () => {
    interface ActionResponse<T = any> {
      code: number
      data: T
      message: 'success' | 'failed'
    }

    type Actions = {
      'js-error': (payload: string) => ActionResponse<string>
      'network-error': (payload: string) => ActionResponse<string>
    }

    const core = new Core<Record<string, never>, Actions>({}, {})
    let jsError = ''
    let networkError = ''

    core.sender
      .action('js-error', payload => {
        jsError = payload
        return {
          code: 0,
          message: 'success',
          data: payload,
        }
      })
      .action('network-error', payload => {
        networkError = payload
        return {
          code: 0,
          message: 'success',
          data: payload,
        }
      })

    const jsErrorResp = core.sender.send('js-error', 'js-error payload')
    expect(jsError).toBe('js-error payload')
    expect(jsErrorResp).toMatchInlineSnapshot(`
      {
        "code": 0,
        "data": "js-error payload",
        "message": "success",
      }
    `)

    const networkErrorResp = core.sender.send(
      'network-error',
      'network-error payload',
    )
    expect(networkError).toBe('network-error payload')
    expect(networkErrorResp).toMatchInlineSnapshot(`
      {
        "code": 0,
        "data": "network-error payload",
        "message": "success",
      }
    `)
  })
})
