# Assistant API Instructions

## Introduction
This project provides an Assistant API built using Node.js and MongoDB. Basically i've performed the CRUD operations on Assistant data.

## Getting Started
1. **Clone or Download the Repository**

2. **Install Dependencies:**
npm install

3. **Run the Server:**
nodemon index.js


4. **Using Postman:**

- **Create Assistant (POST):**
  - Method: POST
  - URL: `http://localhost:3000/assistant/create`
  - Body (JSON) example:
    ```json
    {
        "name": "John Doe",
        "mobile": "1234567890",
        "email": "john@example.com",
        "salary": 50000,
        "city": "New York",
        "country": "USA",
        "department": "IT",
        "role": "Assistant"
    }
    ```

- **Get Assistant by ID (GET):**
  - Method: GET
  - URL: `http://localhost:3000/assistant/<assistant_id>`
  - Replace `<assistant_id>` with the actual ID of the assistant which you will get from the create assistant.

- **Update Assistant by ID (PUT):**
  - Method: PUT
  - URL: `http://localhost:3000/assistant/<assistant_id>`
  - Replace `<assistant_id>` with the actual ID of the assistant you want to update.
  - Body (JSON): Provide the fields you want to update.
    ```json
    {
        "name": "Updated Name",
        "email": "updated@example.com"
        // Add other fields to update
    }
    ```

- **Delete Assistant by ID (DELETE):**
  - Method: DELETE
  - URL: `http://localhost:3000/assistant/<assistant_id>`
  - Replace `<assistant_id>` with the actual ID of the assistant you want to delete.


