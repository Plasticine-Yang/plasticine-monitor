import type { Plugin } from '@plasticine-monitor/types'

import { errorMonitorPlugin } from './error-monitor'

export const defaultPlugins: Plugin[] = [errorMonitorPlugin()]
