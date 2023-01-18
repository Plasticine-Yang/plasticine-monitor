import './style.css'

import { WebSDK } from '@plasticine-monitor/browser'

new WebSDK({
  senderURL: `${new URL(import.meta.url).origin}/api`,
})

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="btn-group">
    <button id="btn-js-error">emit js error</button>
    <button id="btn-promise-error">emit promise error</button>
  </div>
`

// trigger js error
document
  .querySelector<HTMLButtonElement>('#btn-js-error')!
  .addEventListener('click', () => {
    // @ts-ignore
    undefinedFn()
  })

// trigger promise error
document
  .querySelector<HTMLButtonElement>('#btn-promise-error')!
  .addEventListener('click', () => {
    new Promise((_, reject) => {
      reject('promise error')
    })
  })
