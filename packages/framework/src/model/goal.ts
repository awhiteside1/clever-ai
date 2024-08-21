/**
 * Goals encapsulate significant context of a project which is not finite in nature.
 * @example Minimize third party dependencies, especially those which are not replaceable.
 */
export interface Goal {
  summary: string
  subject: string
  subgoals: Array<Goal>
  desirable: Array<string>
  undesirable: Array<string>
}
