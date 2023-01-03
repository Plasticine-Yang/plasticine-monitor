export interface RuntimeError {
  id: number
  errorMessage: string
  rowNo: number
  colNo: number
}

export interface CreateRuntimeErrorDto {
  errorMessage: string
  rowNo: number
  colNo: number
}
