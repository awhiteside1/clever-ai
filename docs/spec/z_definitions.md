# System Definitions and Specification

This document prescribes how to use files within spec, what they are for, and how flexible their contents are, for the
purpose of generating code that implements their goals. This document may not be superseded by any other document.

## Files

### Overview.md

#### Purpose:

Provides high level goals, purposes, use cases and objectives for the system as a whole, explains high level concepts,
abstractions, and flows. It also references files that go into technical details about each concept or service.

#### Contents:

Treat contents as directions which should be followed, so long as they are possible and do not conflict with other
directions. If there are multiple ways to satisfy the direction, choose the most simple and appropriate, so long as it
does not violate anything in Requirements.md. Use your judgement and best practices to decide on how to proceed when
there is ambiguity.

#### Notes:

Analyze ALL linked documents and treat them as the source of truth, so long as they dont conflict with the Overview.
When such conflicts occur, raise them as problems.

### Concepts.md

#### Purpose

Concepts.md defines the user facing, logical concepts that make up the domain of the system. These concepts will be
referred to throughout the specification and may be implemented by the cooperation of multiple system components.

#### Contents

Concepts should be used specifically and not vaguely. Do not use concepts for things outside their purpose, and do not
invent new concepts.

### Requirements.md

#### Purpose:

Defines policies, procedures, libraries and methods that should be followed in particular cases, with no exception.

#### Contents:

Treat these contents as rules which must always be satisfied, and cannot be taken loosly. If there is any chance that an
action will violate something in this file, you must choose an alternative that satisfies these rules or ask for help.

#### Notes:

Do not suggest changing anything in this file.

### Boundaries.md

#### Purpose

Boundaries.md dictates the architectural and logical boundaries of the system, including certain patterns to use.

#### Contents:

Ensure that you do not take any approaches which avoid, bypass, or negatively impact defined boundaries that are
explicitly defined. Only worry about boundaries that are defined and affect what you are implementing.

### Feedback.md

#### Purpose

Feedback.md allows for guidance to be provided based on the output of code generation and other implementations.

#### Contents

Feedback contents will be specific to actions taken in the past, which may no longer be relavent. Take the spirit of the
feedback to improve future generations, but do not consider feedback to be a source of truth.

## Folders

#### Purpose

Folders in specs define a grouping of system components (abstract class) defined by the name of the folder, details
about that grouping, and descriptions of subclasses of that grouping. For example, the Services folder contains
descriptions about many distinct services which need to be implemented.

#### Contents

Within each folder, there will be an `index.md` containing information that applies to all subclasses, as well as
interfaces they must implements and common behaviors. All other files in the folder are each individual, specific
subclasses which describe their own additional behaviors, methods, and purposes.
