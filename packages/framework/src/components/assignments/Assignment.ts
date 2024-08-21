import { Assignment } from './types'

export class Assignments extends Map {
  static defaultAssignment: Assignment = {
    assignmentState: 'assigned',
    operationState: 'unprocessed',
  }

  constructor() {
    super()
  }

  updateStatus(service: string, state: Partial<Assignment>) {
    this.set(service, {
      ...Assignments.defaultAssignment,
      ...this.get(service),
      ...state,
    })
  }

  assign(service: string) {
    this.set(service, Assignments.defaultAssignment)
  }
}
