# @plasticine-monitor/core

前端性能监控 SDK

## Usage

```shell
pnpm i @plasticine-monitor/core
```

在你的前端项目入口启动 SDK

```ts
import { init } from '@plasticine-monitor/core'

init({
  // 监控系统后端服务部署后的 url
  platformURL: 'http://localhost:5173/api',
})
```

后端服务请参考 [@plasticine-monitor/server](https://github.com/Plasticine-Yang/plasticine-monitor/tree/main/packages/server) 包进行部署

也可以使用 [@plasticine-monitor/playground](https://github.com/Plasticine-Yang/plasticine-monitor/tree/main/playground) 子项目进行体验
