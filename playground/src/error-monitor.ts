export const setupErrorMonitor = () => {
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

  // trigger resource error
  document
    .querySelector<HTMLButtonElement>('#btn-resource-error')!
    .addEventListener('click', () => {
      const $app = document.querySelector<HTMLDivElement>('#app')!
      const $invalidImg = document.createElement('img')
      $invalidImg.src = 'https://example.com/img.jpg'
      $app.appendChild($invalidImg)

      Promise.resolve().then(() => {
        $invalidImg.remove()
      })
    })

  // trigger XMLHttpRequest error
  document
    .querySelector<HTMLButtonElement>('#btn-xml-http-request-error')!
    .addEventListener('click', () => {})
}
