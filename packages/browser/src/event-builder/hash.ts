export function hash(input: string): string {
  return globalThis.btoa(decodeURIComponent(input))
}
