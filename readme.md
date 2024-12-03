# BikeInfo Backend Project

## Project Structure

- src
  - app.ts
  - server.ts
  - config
    - index.ts
  - interfaces
    - error.interface.ts
  - app
    - modules
      - auth
        - auth.controller.ts
        - auth.interface.ts
        - auth.model.ts
        - auth.route.ts
        - auth.service.ts
        - auth.validation.ts
      - user
        - user.controller.ts
        - user.interface.ts
        - user.model.ts
        - user.route.ts
        - user.service.ts
        - user.validation.ts
      - bike
        - bike.controller.ts
        - bike.interface.ts
        - bike.model.ts
        - bike.route.ts
        - bike.service.ts
        - bike.validation.ts
  - errors
    - ApiError.ts
    - handleValidationError.ts
    - handleZodError.ts
  - middlewares
    - globalErrorHandler.ts
    - validateRequest.ts
  - shared
    - catchAsync.ts
    - sendResponse.ts
  - utils
    - jwt.ts

