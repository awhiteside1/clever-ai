import { Events } from '@registry'

type Subscription = <Name extends keyof Events>(
  name: Name,
  callback: (event: Events[Name]) => void,
) => { unsubscribe: () => void }

type Report = <Name extends keyof Events>(
  name: Name,
  event?: Events[Name],
) => void

export interface EventAPI {
  report: Report
  subscribe: Subscription
}

export interface Service {
  name: string
}
