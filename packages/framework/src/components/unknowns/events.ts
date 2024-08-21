import { Unknown } from './types'

declare module '@registry' {
  interface Events {
    unknownCreated: { id: string; unknown: Unknown }
    unknownSatisfied: { id: string }
  }
}
