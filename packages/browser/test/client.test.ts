import { EventLevelEnum } from '@plasticine-monitor/shared'
import { BrowserClient } from '../src/client'

describe('BrowserClient', () => {
  let browserClient: BrowserClient

  beforeEach(() => {
    browserClient = new BrowserClient({
      plugins: [],
    })
  })

  test('eventFromException', () => {
    const error = new Error('foo')
    const event = browserClient.eventFromException(error)
    expect(event).toMatchInlineSnapshot(`
      {
        "eventId": "W29iamVjdCBPYmplY3RdLVtvYmplY3QgT2JqZWN0XS1bb2JqZWN0IE9iamVjdF0tW29iamVjdCBPYmplY3RdLVtvYmplY3QgT2JqZWN0XS1bb2JqZWN0IE9iamVjdF0tW29iamVjdCBPYmplY3RdLVtvYmplY3QgT2JqZWN0XS1bb2JqZWN0IE9iamVjdF0tW29iamVjdCBPYmplY3Rd",
        "exception": {
          "type": "Error",
          "value": "foo",
        },
        "level": "error",
        "message": "foo",
      }
    `)
  })

  test('eventFromMessage', () => {
    const event = browserClient.eventFromMessage('hello', 'debug')
    expect(event).toMatchInlineSnapshot(`
      {
        "eventId": "aGVsbG8tZGVidWc=",
        "level": "debug",
        "message": "hello",
      }
    `)
  })
})
