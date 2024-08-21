import { uid } from 'radash'
import { Fact } from './types'
import { Service, ServiceProps } from '../Service'

export class FactAPI extends Service {
  name = 'facts'
  facts: Map<string, Fact> = new Map()

  constructor(props: ServiceProps) {
    super(props)
  }

  getFact(id: string) {
    return this.facts.get(id)
  }

  getFacts() {
    return this.facts.values()
  }

  create(service: Service, fact: Fact) {
    const id = uid(10)
    this.facts.set(id, fact)
    this.eventBus.handleEvent(
      'factCreated',
      { id, fact, confidence: 1 },
      service,
    )
  }
}
