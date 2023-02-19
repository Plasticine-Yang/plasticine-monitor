import { setupPlasticineMonitor, setupReact, setupSentry } from './setup'

const bootstrap = () => {
  const useSentry = Boolean(import.meta.env.VITE_USE_SENTRY) ?? false

  if (useSentry) {
    // sentry
    setupSentry()
  } else {
    // plasticine-monitor
    setupPlasticineMonitor()
  }

  // react
  setupReact()
}

bootstrap()
