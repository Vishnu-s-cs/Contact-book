## Node.js REST API for Contacts (Users) CRUD Operations and Login Module
This is a Node.js REST API for performing CRUD operations on contacts (users) and a login module. This API provides endpoints to manage user information including their names, date of birth, email, phone, occupation, company, and password. It also uses JWT to validate users and Joi to validate schemas.

## Table of Contents
* Technologies Used
* Getting Started
* API Endpoints
* Authorization
* Validation
* Testing
* Contributing
* License
## Technologies Used
* Node.js
* Express
* MongoDB
* JWT
* Joi
## Getting Started
Clone the repository:

git clone https://github.com/Vishnu-s-cs/Contact-book.git
Navigate to the project directory:

cd Contact-book

Install the dependencies:

npm install

Create a .env file in the root directory and set the following environment variables:


* MONGO_URL=mongodb://localhost:27017/contacts
* SECRET=your_secret_key

Start the server:

npm start

## API Endpoints
## Endpoint	      Method	Description
* /api/users	      GET	  Get all contacts
* /api/users/:id	  GET	  Get a contact by ID
* /api/users	      POST	  Create a new contact
* /api/users/:id  	PUT	  Update a contact by ID
* /api/users/:id	 DELETE	    Delete a contact by ID
* /api/register	  POST	  Register a new user
* /api/login	     POST	  Log in an existing user
## Authorization
This API uses JWT to validate users. A user can get a JWT token by logging in through the /api/login endpoint. The token should be passed in the Authorization header as a Bearer token for all endpoints that require authorization.

## Validation
This API uses Joi to validate schemas. All requests are validated before processing, and the API returns an error response if the request is not valid.

## Testing
You can run the tests using the following command:

bash
Copy code
npm test
Contributing
Contributions are welcome! Please see the contributing guide for more information.

## License
This project is licensed under the MIT License.