class ConfigManager<T extends Record<string, any> = Record<string, any>> {
  public resolvedConfig: Required<T>

  constructor(private rawConfig: T, private defaultConfig: Required<T>) {
    this.resolvedConfig = this.resolveConfig()
  }

  private resolveConfig(): Required<T> {
    const resolvedConfig = { ...this.rawConfig }

    Object.entries(resolvedConfig).forEach(([key, value]) => {
      // 使用默认值替代未传入的配置项
      if (!value) {
        this.rawConfig[key as keyof T] = this.defaultConfig[key as keyof T]
      }
    })

    return resolvedConfig as Required<T>
  }
}

export { ConfigManager }
