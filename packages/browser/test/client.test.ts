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
        "eventId": "fdde7e7f828ac4f0043061605e5421f3d848b45b117e2e1c1a77df0a249e6ef7",
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
        "eventId": "bc048e4b260094c7281a371807c5cfaa2018f5d648e93f07be00b27ed30fc205",
        "level": "debug",
        "message": "hello",
      }
    `)
  })
})
