FROM node:18

WORKDIR /usr/share/monitor-server

EXPOSE 4000

ENV NODE_ENV=production

# 换源
RUN npm config set registry http://registry.npmmirror.com

# 安装依赖
COPY package.json .
COPY pnpm-lock.yaml .
RUN npm i -g pnpm
RUN pnpm i

# 复制构建产物
COPY dist .

ENTRYPOINT ["node", "main.js" ]
