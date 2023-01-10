import type {
  CreateRuntimeErrorDto,
  RuntimeError,
} from '@plasticine-monitor/shared'

type RuntimeErrorActionPayload = CreateRuntimeErrorDto

type RuntimeErrorActionResponse = RuntimeError

export type { RuntimeErrorActionPayload, RuntimeErrorActionResponse }
