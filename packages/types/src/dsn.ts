export type DSNProtocol = 'http' | 'https'

export interface DSN {
  protocol: DSNProtocol
  host: string
  projectId: string
  port?: number
  path?: string
}
