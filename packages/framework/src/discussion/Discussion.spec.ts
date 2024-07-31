import { Discussion } from './Discussion'
import { FactAPI } from '../components/facts'
import { LoggerParticipant } from '../participant/LoggerParticipant'

describe('Discussion', () => {
  it('should work', () => {
    const project = {} as Project
    const discussion = new Discussion({ project, components: { FactAPI } })
    discussion.registerParticipant(LoggerParticipant)
    discussion.message('I would like to buy a hamburger')
  })
})
