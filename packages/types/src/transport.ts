import type { Envelope, EnvelopeBodyItem } from './envelope'

export interface Transport {
  send(envelope: Envelope): Promise<void>
}

export interface TransportRequestBody {
  sdkVersion: string
  data: EnvelopeBodyItem[]
}

export interface TransportRequest {
  body: TransportRequestBody
}

export interface TransportResponse {
  statusCode?: number
}

export type TransportRequestExecutor = (request: TransportRequest) => Promise<TransportResponse>

export interface CreateTransportOptions {
  url: string
  headers: Record<string, string>
}
