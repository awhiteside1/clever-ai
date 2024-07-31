/**
 * This defines a virtual -fake- module which can be augmented by other event emitters,
 * and whose type when imported is a merge of all events. By convention these will be in events.ts files.
 */
declare module '@registry' {
  interface Events {
    ping: { timestamp: number }
    messageReceived: { message: string }
  }
}
