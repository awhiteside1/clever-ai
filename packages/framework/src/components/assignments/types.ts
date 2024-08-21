/**
 * Represents the state of a Service with respect to an Unknown.
 */
export type OperationStatus =
  | 'unprocessed'
  | 'cannot'
  | 'will-not'
  | 'running'
  | 'failed'
  | 'succeeded'

export type AssignmentStatus = 'assigned' | 'claimed' | 'unassigned'

export type Assignment = {
  assignmentState: AssignmentStatus
  operationState: OperationStatus
}
