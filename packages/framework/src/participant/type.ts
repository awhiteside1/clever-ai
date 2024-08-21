import { Service } from "../components/Service";
import { EventAPI } from "../components/events/types";

/**
 * A Participant is an actor in a Discussion which can subscribe to events and invoke discussion APIs.
 */
export interface Participant {
  name: string

  join(props: { eventBus: EventAPI; apis: Record<string, Service> }): void
}
