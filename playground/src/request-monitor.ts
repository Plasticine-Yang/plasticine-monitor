export const setupRequestMonitor = () => {
  // trigger normal fetch
  document
    .querySelector<HTMLButtonElement>('#btn-fetch-error')!
    .addEventListener('click', () => {
      fetch('https://example.com/foo')
    })
}
