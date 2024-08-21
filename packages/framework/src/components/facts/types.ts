import { Entity } from "../common/Entity";

/**
 * Facts are details and specifics about a particular {@Link|Discussion}, within a {@Link|Project}, which satisfy an {@Link|Unknown}.
 */
export interface Fact extends Entity {
  kind: 'Fact'
  summary: string
}
