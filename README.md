# plasticine-monitor

前端性能监控系统 -- 包含 SDK 和 后端服务实现

## Features

- [x] JS 运行时代码错误监控
- [ ] JS 异步代码错误监控 -- Promise、import chunk
- [ ] 网络错误监控 -- 如资源加载错误、HTTP 请求错误
- [ ] 跨域错误监控
- [ ] sourcemap 解析
- [x] 错误上报管理后端服务
- [ ] 可视化管理平台

## Usage

启动后端服务器开发环境：

```shell
pnpm dev:server
```

构建 SDK

```shell
pnpm build:core
```

启动 playground 项目进行体验

```shell
pnpm play
```
