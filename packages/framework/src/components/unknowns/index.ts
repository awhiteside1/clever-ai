import { uid } from 'radash'
import { Unknown } from './types'
import { Service, ServiceProps } from '../Service'

export class UnknownsApi extends Service {
  name = 'unknowns'
  unknowns: Map<string, Unknown> = new Map()

  constructor(props: ServiceProps) {
    super(props)
  }

  getUnknown(id: string) {
    return this.unknowns.get(id)
  }

  getUnknowns() {
    return this.unknowns.values()
  }

  create(service: Service, unknown: Unknown) {
    const id = uid(10)
    this.unknowns.set(id, unknown)
    this.eventBus.handleEvent('unknownCreated', { id, unknown }, service)
  }
}
