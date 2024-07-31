import EventEmitter from 'node:events'
import { EventBus } from '../components/events'
import { Service, ServiceProps } from '../components/types'
import { mapValues, uid } from 'radash'
import { Participant } from '../participant/type'

const debug = console.debug

interface DiscussionProps<
  T extends Record<string, { new (props: ServiceProps): Service }>,
> {
  project: Project
  components: T
}

/**
 * A Discussion provides the runtime construct for many independent {@Link|Participants} to contribute to a goal, across many requests.
 *
 */
export class Discussion<
  const T extends Record<string, { new (props: ServiceProps): Service }>,
> {
  protected events = new EventEmitter<any>()
  protected eventBus = new EventBus()
  protected messageHistory = new Array<{ role: string; message: string }>()
  protected apis: Record<keyof T, Service>
  private id = uid(6)

  constructor(protected scope: DiscussionProps<T>) {
    this.apis = mapValues(
      scope.components,
      (ServiceClass) =>
        new ServiceClass({ eventBus: this.eventBus, project: scope.project }),
    ) as Record<keyof T, Service>
    this.eventBus.subscribe(
      { name: 'external' },
      'messageReceived',
      ({ message }) => this.messageHistory.push({ role: 'user', message }),
    )
  }

  message(message: string): void {
    this.eventBus.handleEvent('messageReceived', { message }, { name: 'user' })
  }

  registerParticipant(participant: Participant) {
    const eventApi = this.eventBus.registerService(participant)
    participant.join({ eventBus: eventApi, apis: this.apis })
    debug(`[Discussion ${this.id}] ${participant.name} Joined `)
  }
}
