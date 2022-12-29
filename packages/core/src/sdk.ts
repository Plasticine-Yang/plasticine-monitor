interface InitOptions {
  /** @description 监控平台 url */
  platformURL?: string
}

function init(options: InitOptions = {}) {
  const { platformURL } = options

  // 监听 error 事件处理 JS 运行错误、语法错误、图片、CSS 等资源加载错误
  window.addEventListener('error', () => {
    console.log('监听到 JS 运行错误、语法错误、图片、CSS 等资源加载错误')
  })

  // 监听异步错误
  window.addEventListener('unhandledrejection', () => {
    console.log('监听到异步错误')
  })

  console.log(
    `SDK initialization completed. Subsequent data will be sent to: ${platformURL}`,
  )
}

export { init }
