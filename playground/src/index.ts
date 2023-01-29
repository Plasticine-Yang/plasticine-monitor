import './style.css'

import { WebSDK } from '@plasticine-monitor/browser'

import { setupErrorMonitor } from './error-monitor'
import { setupRequestMonitor } from './request-monitor'

new WebSDK({
  release: '0.0.1',
  senderURL: `${new URL(import.meta.url).origin}/api`,
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
    <section>
      <h3>错误监控</h3>
      <div class="btn-group">
        <button id="btn-js-error">emit js error</button>
        <button id="btn-promise-error">emit promise error</button>
        <button id="btn-resource-error">emit resource error</button>
        <button id="btn-xml-http-request-error">emit XMLHttpRequest error</button>
        <button id="btn-fetch-error">emit fetch error</button>
      </div>
    </section>

    <section>
      <h3>请求监控</h3>
      <div class="btn-group">
        <button id="btn-normal-fetch">normal fetch</button>
      </div>
    </section>
  </div>
`

setupErrorMonitor()
setupRequestMonitor()
