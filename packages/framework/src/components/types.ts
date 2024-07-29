interface Event {
  timestamp: number
  kind: string
  cause: any
  source: Service
  discussion: Discussion
  complete: boolean
  artifacts: Artifact[]
}
