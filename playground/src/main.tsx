import { setupReact, setupPlasticineMonitor } from './setup'

const bootstrap = () => {
  // plasticine-monitor
  setupPlasticineMonitor()

  // react
  setupReact()
}

bootstrap()
