# Framework Components

The framework allows systems to implement services which can be orchestrated at runtime. It defines an number of
components and allows registration of services to integrate with systems.

## Runtime Features

### Register Services and Components

Allows systems to register compatible services, load components, etc which are instantiated for each discussion

### Create Discussion

Allows for the creation of a discussion within a project, instantiating all registered services and defining the goal
for the discussion and access scope.

### Handles Errors

Should a service not respond, conflict, etc, the runtime will restart the discussion and communicate the error

## Components and Services

- [Events API](./events.md)
- [Facts API](./facts.md)
- [Unknowns API](./unknowns.md)
- [Services](./services.md)
- [Admin](./admin.md)


