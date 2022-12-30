import type { SenderConfig } from './types'

class Sender {
  private platformURL: string

  constructor(senderConfig: SenderConfig) {
    const { platformURL } = senderConfig

    this.platformURL = platformURL
  }

  send(payload: any) {
    console.log(`上报数据到 ${this.platformURL}`)
    console.log('payload:', payload)
  }
}

function setupSender(config: SenderConfig) {
  const sender = new Sender(config)

  return sender
}

export { setupSender, Sender }
