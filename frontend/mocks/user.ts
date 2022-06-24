export const mockUser = {
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjU2MDQ2NzA3LCJleHAiOjE2NTg2Mzg3MDd9.PETY5jb9d5Tbw3GXU60M_n9Jtcoo6L5u3ATuf8osiag",
  "user": {
    "id": 2,
    "username": "Johndoedoe",
    "email": "john@doe.com",
    "password": "password",
    "provider": "local",
    "confirmed": true,
    "blocked": false,
    "createdAt": "2022-06-23T06:37:08.989Z",
    "updatedAt": "2022-06-24T04:57:23.702Z"
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
