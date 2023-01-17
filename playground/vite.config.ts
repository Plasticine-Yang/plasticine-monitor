import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import { resolve } from 'path'

const NODE_ENV = process.env.NODE_ENV ?? 'development'
dotenv.config({
  path: resolve(
    process.cwd(),
    `.env${NODE_ENV === 'development' ? '' : `.${NODE_ENV}`}`,
  ),
})

const { PROXY_URL = 'http://localhost:3000/v1' } = process.env
console.log(PROXY_URL)

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: PROXY_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
