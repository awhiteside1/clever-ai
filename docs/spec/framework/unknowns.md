# Unknowns API

The Unknowns API allows for services to create known unknowns they need, which other services may act on and provide as
facts.

## Structure

```ts

interface Unknown {
  parent?: Unknown
  kind: 'Idea' | 'Problem' | 'Context' | 'Clarification'
  summary: string
  requirements: any
}

interface ActiveUnknown {
  requestedAt: number
  requestedBy: Service
  unknown: Unknown
  activity: Record<Service, 'unsupported' | 'blocked' | 'running' | 'failed' | 'succeeded'>
}


```

## API

### create(Unknown)

Creates a new Unknown and alerts appropriate services

### respond(status, details)

updates an unknown from the perspective of a single service

