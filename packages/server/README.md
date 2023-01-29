# @plasticine-monitor/server

## 开发环境

使用 `docker-compose` 完成开发环境的搭建，比如 MySQL 数据库

```shell
# 启动开发环境容器
pnpm dev:up -d

# 启动 nest
pnpm dev
```

如果需要移除容器，可执行：

```shell
pnpm dev:down -v
```

## 生产环境部署

在 `packages/server` 目录中运行下面的命令：

```shell
# 完整部署流程
pnpm run deploy

# 启动容器
pnpm run deploy:up -d

# 移除容器
pnpm run deploy:down -v
```

## 配置文件

项目根目录下创建 `.config` 目录，里面编写对应环境的配置文件，比如 `development.yaml` 或 `development.yml`

实例配置文件如下：

```yaml
mysql:
  host: localhost
  port: 3306
  username: root
  password: root
  database: monitor-server
  synchronize: true
```

修改了配置文件的话记得将 `docker-compose` 的配置文件也修改一下

### 可配置项

`src/types/config.ts` 中的 `PlasticineMonitorServerConfig` 接口即为 `.config` 目录下对应环境的配置文件支持的配置项

## scripts

- nest generator

```shell
pnpm nest g res xxx modules
```
