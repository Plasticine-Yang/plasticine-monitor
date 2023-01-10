# @plasticine-monitor/core

前端监控系统 SDK 的核心内核实现

## Features

- [x] configManager 配置管理器 -- 对配置进行统一管理
- [x] sender 数据上报器：运用 TypeScript 类型体操以支持更好的开发体验，只需提前定义好 `ActionsType`，之后编写的代码全都会有类型提示提示，详细使用方式见 [Sender Usage](#Sender)
- [x] 插件系统 -- 通过调用 `Core` 实例的 `use` 方法进行插件注册，比如监听 JavaScript 运行时错误、监听 Promise 错误等功能都以插件的方式注册到 SDK 中

## Usage

### Sender

First, define the actions type:

```TypeScript
interface ActionResponse<T = any> {
  code: number
  data: T
  message: 'success' | 'failed'
}

type Actions = {
  'js-error': (payload: string) => ActionResponse<string>
  'network-error': (payload: string) => ActionResponse<string>
}
```

Then, new a `Core` instance and register actions, you can register actions by chain call.

```TypeScript
const core = new Core<Actions>(coreConfig)
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
```

Now, you can call send methods on sender instance to trigger action.

```TypeScript
const jsErrorResp = core.sender.send('js-error', 'js-error payload')
expect(jsError).toBe('js-error payload')
expect(jsErrorResp).toMatchInlineSnapshot(`
  {
    "code": 0,
    "data": "js-error payload",
    "message": "success",
  }
`)

const networkErrorResp = core.sender
  .send('network-error', 'network-error payload')
expect(networkError).toBe('network-error payload')
expect(networkErrorResp).toMatchInlineSnapshot(`
  {
    "code": 0,
    "data": "network-error payload",
    "message": "success",
  }
`)
```
