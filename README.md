# plasticine-monitor

前端性能监控系统 -- 包含 SDK 和 后端服务实现

## Features

### Core

- [x] ConfigManager 负责配置处理，支持传入配置项和默认配置，内部 SDK 实现时直接使用父类 Core 的构造函数即可完成配置解析

  ```ts
  interface Config {
    name: string
    age?: number
    phone?: number
  }
  const defaultConfig: Required<Config> = {
    name: 'default-foo',
    age: 21,
    phone: 666,
  }

  class SDK extends Core<WebSDKConfig, ActionsType> {
    constructor(config: WebSDKConfig) {
      super(config, defaultWebSDKConfig)

      console.log('sdk config:', this.configManager.resolvedConfig)
    }
  }

  const sdk = new SDK({ name: 'foo' })

  // The resolved config in sdk
  // {
  //   "age": 21,
  //   "name": "foo",
  //   "phone": 666,
  // }
  ```

- [x] Sender 提供上报能力，支持单独和统一注册上报行为，有良好的 TypeScript 类型提示

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
  ```

### WebSDK

错误监控

- [x] JS 运行时代码错误监控
- [x] Promise 错误
- [ ] 网络错误监控 -- 如资源加载错误、HTTP 请求错误
- [ ] 跨域错误监控
- [ ] sourcemap 解析
- [x] 错误上报管理后端服务
- [ ] 可视化管理平台

## Usage

1. 启动后端服务器开发环境：

```shell
pnpm dev:server
```

2. 构建 SDK

```shell
pnpm build
```

3. 启动 playground 项目进行体验

开发环境

```shell
pnpm play
```

生产环境

```shell
pnpm play:prod
```
