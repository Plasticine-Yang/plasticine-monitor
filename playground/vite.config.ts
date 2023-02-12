import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

const BASE_DIR = resolve(process.cwd(), 'src/setup/react')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(BASE_DIR, 'components'),
      '@utils': resolve(BASE_DIR, 'utils'),
    },
  },
})
