# Service Interface

Services allow Systems to participate in a discussion without tightly coupling and allowing them to remain independent.

When a discussion is created, all registered services are instantiated with the discussion context, access to framework
APIs, and the purpose of the discussion.

## Structure

```ts
interface FrameworkApis {
  events: EventsApi;
  facts: FactsApi;
  unknowns: UnknownsApi;
}

interface DiscussionContext {
  apis: FrameworkApis;
  discussion: Discussion;
  project: Project;
  purpose: string;
}


abstract class Service {


  constructor(private context: DiscussionOptions) {


  }


}

```





