FROM node:18

WORKDIR /usr/share/monitor-server

EXPOSE 3000

ENV NODE_ENV=development

# 换源
RUN npm config set registry http://registry.npmmirror.com

# 安装依赖
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm i -g pnpm
RUN pnpm i

# 复制源码
COPY . .

ENTRYPOINT ["pnpm", "start:dev" ]
