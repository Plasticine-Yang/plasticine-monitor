import type { DSN } from '@plasticine-monitor/types'

import { DEFAULT_PORT } from './constants'

export function transformDSNToURL(dsn: DSN): string {
  const { protocol, host, projectId, port = DEFAULT_PORT, path } = dsn

  const urlArr: string[] = [protocol, '://', host, ':', String(port)]

  path !== undefined && urlArr.push(`/${path}`)

  projectId !== undefined && urlArr.push(`?projectId=${projectId}`)

  return urlArr.join('')
}
