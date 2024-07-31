// interface Event {
//   timestamp: number
//   kind: string
//   cause: any
//   source: Service
//   discussion: Discussion
//   complete: boolean
//   artifacts: Artifact[]
// }

import { EventBus } from './events'

export interface ServiceProps {
  project: Project
  eventBus: EventBus
}

export abstract class Service {
  abstract name: string
  project: Project
  eventBus: EventBus

  protected constructor(props: ServiceProps) {
    this.project = props.project
    this.eventBus = props.eventBus
  }
}
