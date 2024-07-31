declare module '@registry' {
  interface Events {
    ping: { timestamp: number }
    messageReceived: { message: string }
  }
}
