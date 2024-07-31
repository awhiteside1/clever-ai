import { Fact } from './types'

declare module '@registry' {
  interface Events {
    factCreated: { fact: Fact; confidence: number; id: string }
    factUpdated: { id: string }
  }
}
