import type { Options } from '@plasticine-monitor/types'
import type { BrowserClientOptions } from './client'

import { initAndBind } from '@plasticine-monitor/core'

import { BrowserClient } from './client'
import { defaultPlugins } from './plugins'

type BrowserOptions = Options

export function init(options: BrowserOptions = {}) {
  const clientOptions: BrowserClientOptions = {
    plugins: options.plugins ?? defaultPlugins,
  }

  initAndBind(BrowserClient, clientOptions)

  console.log('SDK 初始化完成')
}
