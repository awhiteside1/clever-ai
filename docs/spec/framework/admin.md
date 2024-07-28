# Framework Administration

### Register Services and Components

Allows systems to register compatible services, load components, etc which are instantiated for each discussion

### Create Discussion

Allows for the creation of a discussion within a project, instantiating all registered services and defining the goal
for the discussion and access scope.

### Handles Errors

Should a service not respond, conflict, etc, the runtime will restart the discussion and communicate the error

