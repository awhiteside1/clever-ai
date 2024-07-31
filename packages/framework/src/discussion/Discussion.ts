import EventEmitter from 'node:events'

interface DiscussionProps {
  project: Project
}

class Discussion {
  protected events = new EventEmitter<any>()

  constructor(protected scope: DiscussionProps) {}
}
