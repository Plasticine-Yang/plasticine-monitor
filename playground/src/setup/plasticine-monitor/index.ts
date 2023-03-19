import { init } from '@plasticine-monitor/browser'

export function setupPlasticineMonitor() {
  init({
    dsn: {
      protocol: 'http',
      projectId: 'test6666',
      host: 'localhost',
      port: 6666,
    },
  })
}
