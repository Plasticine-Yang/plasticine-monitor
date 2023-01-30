# @plasticine-monitor/core

## 0.0.5

### Patch Changes

- feat(core): support batch registeration of plugins

## 0.0.4

### Patch Changes

- test(core): add unit test for config-manager -- should resolve config with default value
- fix(core): fix not resolve config with default value

## 0.0.3

### Patch Changes

- fix(core): fix the type error of Plugin

## 0.0.2

### Patch Changes

- refactor(core): 将 axios instance 初始化的逻辑转移到 onNetworkRequesterInit 生命周期钩子中
- feat: 新增 sender action 功能，以发布订阅模式管理数据上报逻辑
- feat(core): add plugin system
- refactor(core): move axios and api to @plasticine-monitor/shared package
- refactor(core): refactor sdk.ts to core.ts and add related unit test
- refactor(core): refactor sender with class and add related unit test
- refactor(core): 将配置控制权交给子类
- refactor(core): 移除 monitor，改为插件系统机制
- refactor(core): refactor config-manager
- refactor(core): 将 sdk 实现交由子类完成，Core 只作为基类提供底层支持

## 0.0.1

### Patch Changes

- encapsulate axios
- integrate with axiosInstanceManager
- encapsulate runtime-error api -- list and create
- Updated dependencies
  - @plasticine-monitor/shared@0.0.1
