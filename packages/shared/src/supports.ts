import { getGlobalObject } from './global-object'

const WINDOW = getGlobalObject<Window>()

/** @description 检查当前运行时环境是否支持 Fetch API */
export function supportsFetch() {
  if (!('fetch' in WINDOW)) return false

  try {
    new Headers()
    new Request('http://www.example.com')
    new Response()
    return true
  } catch (error) {
    return false
  }
}
