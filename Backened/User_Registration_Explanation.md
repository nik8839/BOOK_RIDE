
# User Registration Module

## Overview
This module provides functionality for user registration in a Node.js application. It handles:
- Input validation for user-provided data.
- Secure password hashing using `bcrypt`.
- User creation in the database using `Mongoose`.
- Authentication token generation using `jsonwebtoken`.

---

## Structure

### 1. Controller (`user.controller.js`)
The controller manages HTTP requests and responses.

- **Purpose**: Handles the registration process, validates input, and communicates with the service layer to create a new user.
- **Key Steps**:
  1. **Validate Input**: Using `express-validator`, ensures fields like email, password, and full name meet specified criteria.
  2. **Hash the Password**: Secures user passwords by converting them into hashed values using the `bcrypt` library.
  3. **Create User**: Calls the service layer to add the new user to the database.
  4. **Generate Token**: Once the user is created, a JWT token is generated for authentication purposes.
  5. **Send Response**: Returns the created user and authentication token to the client.

---

### 2. Model (`user.model.js`)
The model defines the structure of a user in the database.

- **Schema**:
  - **Full Name**: Stored as a nested object with `firstname` (required) and `lastname` fields.
  - **Email**: Unique and required field.
  - **Password**: Stored in a hashed format for security. The field is marked `select: false` to exclude it from query results unless explicitly requested.
  - **Socket ID**: Optional field for real-time connection tracking.

- **Methods**:
  - **`hashPassword`**: Converts a plain password into a secure hashed format.
  - **`generateAuthToken`**: Creates a JWT token for user authentication.
  - **`comparePassword`**: Compares a given password with the stored hashed password.

---

### 3. Service (`user.service.js`)
The service layer handles business logic for user creation.

- **Purpose**: Abstracts the database operations from the controller.
- **Key Functionality**:
  - Accepts user details (`firstname`, `lastname`, `email`, `password`) and validates required fields.
  - Uses the model to save the user in the database.
  - Ensures separation of concerns by isolating database interaction.

---

### 4. Route (`user.route.js`)
The route defines the API endpoint for user registration and applies middleware for input validation.

- **Endpoint**: `POST /register`
- **Input Validation**:
  - Email: Must be a valid email format.
  - Full Name: The `firstname` must have at least 3 characters.
  - Password: Must be at least 6 characters long.
- **Controller Binding**: The route uses `userController.registerUser` to process the registration logic.

---

## Registration Flow

1. **Client Request**:  
   - The client sends a `POST` request to `/register` with a JSON body containing user details: `fullname`, `email`, and `password`.

2. **Input Validation**:  
   - The route validates the input. If invalid, an error is returned immediately.

3. **Password Hashing**:  
   - The controller hashes the plain password using `bcrypt` to ensure it is stored securely in the database.

4. **Database Interaction**:  
   - The service creates a new user document in the database with the hashed password.

5. **Token Generation**:  
   - After successful user creation, the model generates a JWT token for the user, allowing them to authenticate in subsequent requests.

6. **Response to Client**:  
   - A success response is returned to the client, containing the authentication token and user details (excluding the password).

---

## Usage Example

- **Request**:
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }
  ```

- **Response**:
  ```json
  {
    "token": "JWT_TOKEN_HERE",
    "user": {
      "_id": "USER_ID",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }
  ```

---

## Security Features
1. **Password Hashing**: Ensures passwords are not stored in plain text, protecting against data breaches.
2. **JWT Authentication**: Provides a secure way to manage user sessions without storing session data on the server.
3. **Validation**: Prevents invalid or incomplete data from being stored in the database.

---
