import { WebSDK } from '@plasticine-monitor/browser'

new WebSDK({
  senderURL: `${new URL(import.meta.url).origin}/api`,
})

const $root = document.getElementById('root')!

$root.innerHTML = `
<button id="btn">emit error</button>
<button id="pbtn">emit promise error</button>
`

document.getElementById('btn')?.addEventListener('click', () => {
  // @ts-ignore
  undefinedFn()
})

document.getElementById('pbtn')?.addEventListener('click', () => {
  new Promise((_, reject) => {
    reject('promise error')
  })
})
