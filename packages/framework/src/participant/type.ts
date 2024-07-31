import { Service } from '../components/types'
import { EventAPI } from '../components/events/types'

export interface Participant {
  name: string

  join(props: { eventBus: EventAPI; apis: Record<string, Service> }): void
}
