import { EventAPI, Service } from './types'
import { uid } from 'radash'
import { Participant } from '../../participant/type'
import { Events } from '@registry'

export class EventBus {
  private subscriptions: Record<
    string,
    {
      event: string
      callback: Function
      service: Service
      id: string
    }
  > = {}

  handleEvent(name: string, event: Object, source?: Service): void {
    Object.values(this.subscriptions)
      .filter((sub) => sub.event === name)
      .forEach((sub) => {
        sub.callback({ source, event, name })
      })
  }

  subscribe<T extends keyof Events>(
    service: Service,
    name: T,
    callback: (event: Events[T]) => void,
  ) {
    const id = uid(10)
    Object.assign(this.subscriptions, {
      [id]: { event: name, callback, service, id },
    })
    return {
      unsubscribe: () => {
        delete this.subscriptions[id]
      },
    }
  }

  registerService(service: Participant): EventAPI {
    return {
      report: (name, event) => {
        if (event) {
          this.handleEvent(name, event, service)
        }
      },
      subscribe: (name, callback) => {
        return this.subscribe(service, name, callback)
      },
    }
  }
}
