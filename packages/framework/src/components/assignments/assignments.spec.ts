import { beforeEach, describe, expect, it } from 'vitest'
import { AssignmentRegistry } from './assignmentRegistry'
import { Assignments } from './Assignment'
import { Assignment } from './types'
import { EventBus } from '../events'
import { Project } from '../../model'

vi.mock('../events')

describe('AssignmentRegistry Tests', () => {
  let registry: AssignmentRegistry
  let mockObject: any
  const mockServiceName = 'mockService'

  beforeEach(() => {
    registry = new AssignmentRegistry({
      eventBus: new EventBus(),
      project: {} as Project,
    }) // Pass any necessary props here
    mockObject = {}
  })

  it('should create a new assignment when no assignment exists', () => {
    const assignment = registry.getAssignment(mockObject)
    expect(assignment).toBeInstanceOf(Assignments)
    expect(registry['store'].has(mockObject)).toBeTruthy() // check if store has the object
  })

  it('should retrieve the existing assignment', () => {
    const assignment1 = registry.getAssignment(mockObject)
    const assignment2 = registry.getAssignment(mockObject)
    expect(assignment1).toBe(assignment2) // should return the same instance
  })

  it('should assign a service to an object', () => {
    registry.assign(mockObject, mockServiceName)
    const assignment = registry.getAssignment(mockObject)
    expect(assignment.get(mockServiceName)).toEqual(
      Assignments.defaultAssignment,
    ) // check if service is assigned
  })

  it('should update the assignment status for a service', () => {
    registry.assign(mockObject, mockServiceName)
    const update: Partial<Assignment> = { operationState: 'running' }

    registry.updateAssignment(mockObject, mockServiceName, update)

    const assignment = registry.getAssignment(mockObject)
    expect(assignment.get(mockServiceName)).toEqual({
      assignmentState: 'assigned',
      operationState: 'running', // Updates inline with the new state
    })
  })
})

describe('Assignments Tests', () => {
  let assignments: Assignments

  beforeEach(() => {
    assignments = new Assignments()
  })

  it('should assign a service with default assignment state', () => {
    assignments.assign('testService')
    expect(assignments.get('testService')).toEqual({
      assignmentState: 'assigned',
      operationState: 'unprocessed',
    })
  })

  it('should update the service status correctly', () => {
    const service = 'testService'
    assignments.assign(service)
    const update: Partial<Assignment> = { operationState: 'running' }

    assignments.updateStatus(service, update)

    expect(assignments.get(service)).toEqual({
      assignmentState: 'assigned',
      operationState: 'running',
    })
  })

  it('should not alter other service assignments when updating one', () => {
    assignments.assign('service1')
    assignments.assign('service2')

    assignments.updateStatus('service1', { operationState: 'running' })

    expect(assignments.get('service2')).toEqual({
      assignmentState: 'assigned',
      operationState: 'unprocessed',
    })
  })
})
