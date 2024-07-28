# Events

Events allow for decoupling among components and services, and enable auditing a discussion. The Events API defines the
basic Event object which can be extended by other APIs for specific events.

## Event Structure

The core event structure is as follows, extended by specific events, which may define additional properties.

```ts
interface Event {
  timestamp: number
  kind: string
  cause: any
  source: Service
  discussion: Discussion
  complete: boolean
  artifacts: Artifact[]
}
```

## Event API

### reportEvent(event:Event)

validates, logs, and notifies relevant subscribers

### subscribe(EventCriteria)

requests a callback whenever certain matching events are reported

### query(EventCriteria)

queries all discussion events for matching events
