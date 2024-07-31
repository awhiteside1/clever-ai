declare module '@registry' {
  interface Events {
    factCreated: { name: string; confidence: number }
  }
}
