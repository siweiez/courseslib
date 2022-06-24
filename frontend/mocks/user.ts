export const mockUser = {
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU2MDM2NzE4LCJleHAiOjE2NTg2Mjg3MTh9.SNHs7DZn0Dla8J3jvkPx44gd34TBOZMYFLbQtHrZ53Y",
  "user": {
    "id": 2,
    "username": "John",
    "email": "john@doe.com",
    "password": "password",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2022-06-23T06:37:08.989Z",
    "updatedAt": "2022-06-23T06:37:08.989Z"
  }
};

export const ValidationError = {
  error: {
    status: 400,
    name: "ValidationError",
    message: "Invalid identifier or password",
    details: {},
  },
};

export const RegistrationError = {
  error: {
    status: 400,
    name: "ApplicationError",
    message: "An error occurred during account creation",
    details: {},
  },
};
