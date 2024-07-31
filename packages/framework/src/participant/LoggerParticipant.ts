import { Participant } from './type'
import { Events } from '@registry'

export const LoggerParticipant: Participant = {
  name: 'LoggerParticipant',
  join: ({ eventBus }) => {
    const subscribeTo = (name: keyof Events) => {
      eventBus.subscribe(name, (event) =>
        console.log(
          `[Logger Participant] ${name} Event -  ${JSON.stringify(event)}`,
        ),
      )
    }
    subscribeTo('factUpdated')
    subscribeTo('messageReceived')
    subscribeTo('factCreated')
    subscribeTo('ping')
  },
}
