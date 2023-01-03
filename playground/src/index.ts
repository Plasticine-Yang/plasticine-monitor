import { init } from '@plasticine-monitor/core'

init({
  platformURL: 'http://localhost:5173/api',
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
