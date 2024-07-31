import { Discussion } from './Discussion'
import { FactAPI } from '../components/facts'
import { LoggerParticipant } from '../participant/LoggerParticipant'

const project = {} as Project
const discussion = new Discussion({ project, components: { FactAPI } })
discussion.registerParticipant(LoggerParticipant)
