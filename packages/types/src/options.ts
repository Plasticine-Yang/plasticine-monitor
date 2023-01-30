import type { Integration } from './integration'

export interface ClientOptions {
  /**
   * @description
   * Its full name is `data source name`, which used to connect to plasticine-monitor
   * and identify the project.
   */
  dsn?: string

  /**
   * @description The maximum number of breadcrumbs sent with events.
   * @default 100
   */
  maxBreadcrumbs?: number

  /**
   * @description List of integrations that should be installed after SDK initialized.
   */
  integrations: Integration[]

  /**
   * @description Enable log to console functionality of SDK itself.
   */
  debug?: boolean
}

/**
 * @description Base configuration options for every SDK.
 */
export interface Options extends Partial<ClientOptions> {
  /**
   * @description
   * If this is set to false, default integrations will not to be added, otherwise this will internally to be set to the
   * recommended default integrations.
   */
  defaultIntegrations?: false | Integration[]
}
