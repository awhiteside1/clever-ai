import { Goal } from "./goal";

/**
 * Represents an isolated workspace with a persisted context
 */
export interface Project {
  id: string
  user: User
  image: string
  name: string
  goals: Array<Goal>
}
