import { Assignment } from './types'
import { Service, ServiceProps } from '../Service'
import { Assignments } from './Assignment'

export class AssignmentRegistry extends Service {
  private store = new WeakMap<any, Assignments>()
  name = 'assignments'

  constructor(props: ServiceProps) {
    super(props)
  }

  /**
   * Updates the assignment for a particular service
   * @param object
   * @param service
   * @param update
   * @param silent
   */
  updateAssignment(
    object: unknown,
    service: string,
    update: Partial<Assignment>,
  ) {
    const assingment = this.getAssignment(object)
    assingment.updateStatus(service, update)
  }

  getAssignment(object: unknown) {
    const assignment = this.store.get(object)
    if (assignment) {
      return assignment
    } else {
      const newAssignment = new Assignments()
      this.store.set(object, newAssignment)
      return newAssignment
    }
  }

  assign(object: unknown, service: string) {
    const assignment = this.getAssignment(object)
    assignment.assign(service)
  }
}
