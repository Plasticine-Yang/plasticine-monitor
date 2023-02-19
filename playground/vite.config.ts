import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

import { resolve } from 'path'

const BASE_DIR = resolve(process.cwd(), 'src/setup/react')

const shouldMock = Boolean(process.env.SHOULD_MOCK) ?? false

const proxyUrl = shouldMock ? 'https://mock.apifox.cn/m1/2144205-0-default' : 'http://localhost:3000/v1'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(BASE_DIR, 'components'),
      '@utils': resolve(BASE_DIR, 'utils'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: proxyUrl,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    sourcemap: true,
  },
})
