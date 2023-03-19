import { initAndBind } from '@plasticine-monitor/core'
import { supportsFetch } from '@plasticine-monitor/shared'
import type { Options } from '@plasticine-monitor/types'

import type { BrowserClientOptions } from './client'

import { BrowserClient } from './client'
import { defaultPlugins } from './plugins'
import { createTransportWithFetch, createTransportWithXHR } from './transports'

type BrowserOptions = Options

export function init(options: BrowserOptions = {}) {
  const { dsn, plugins, enableLogger, createTransport } = options

  const clientOptions: BrowserClientOptions = {
    dsn,
    enableLogger: enableLogger ?? false,
    plugins: plugins ?? defaultPlugins,
    createTransport: createTransport ?? supportsFetch() ? createTransportWithFetch : createTransportWithXHR,
  }

  initAndBind(BrowserClient, clientOptions)

  console.log('plasticine-monitor SDK 初始化完成')
}
