import { fileURLToPath } from 'url'

/**
 * @description shims `__dirname`
 */
function shimsDirname(baseURL: string) {
  return fileURLToPath(new URL('.', baseURL))
}

export { shimsDirname }
