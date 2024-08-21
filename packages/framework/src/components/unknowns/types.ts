import { Entity } from '../common/Entity'

export type UnknownStatus = 'satisfied' | 'pending' | 'unsatisfied'

/**
 * Unknowns represent significant details which are needed by a participant. They allow for any participant to make their needs known, subscribe to updates, and be notified when those needs are met.
 */
export interface Unknown extends Entity {
  kind: 'Unknown'
  status: UnknownStatus
  summary: string
}
