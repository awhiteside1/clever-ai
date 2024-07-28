# Facts API

The Facts API allows for the management of facts during a discussion, contributed by services, user provided
information, or rules from the project.

## Structure

Facts are primarily a summary with a reference.

```ts
interface Fact {
  summary: string
  source: Service
  confidence: number
  reference: any
}
```

## API

### create(Fact)

creates a new fact, emitting an event and notifying services

### reject(Fact)

rejects an existing fact

### get(FactCriteria)

gets all known facts that match
