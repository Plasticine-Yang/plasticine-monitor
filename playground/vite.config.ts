import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import { resolve } from 'path'

const PROXY_MODE = process.env.PROXY_MODE ?? 'development'
dotenv.config({
  path: resolve(
    process.cwd(),
    `.env${PROXY_MODE === 'development' ? '' : `.${PROXY_MODE}`}`,
  ),
})

const { PROXY_URL = 'http://localhost:3000/v1' } = process.env

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: PROXY_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
