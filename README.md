# Movies API Documentation

## Introduction

This documentation provides an overview of the Movies API, which allows you to manage movie entries, including creating, updating, deleting, and querying movie data. The API uses GraphQL to handle requests and responses.

If a movie is not found in the local database, the API will automatically fetch the movie information from the OMDB API and save it to the local database.

## Tech Stack

- **GraphQL**: For querying and mutating data. [GraphQL](https://graphql.org/).
- **Knex.js**: SQL query builder for interacting with the database. [Knex.js](https://knexjs.org/).
- **PostgreSQL**: Relational database system, hosted on [Aiven Cloud Console](https://console.aiven.io).
- **NestJS**: Framework for building efficient and scalable server-side applications. [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.
- **Axios**: Promise-based HTTP client for making requests. [Axios](https://axios-http.com/).
- **Apollo Server**: GraphQL server implementation that integrates with NestJS. [Apollo Server](https://www.apollographql.com/).

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL or another database compatible with Knex.js
- API key for OMDB API (optional, if using an external data source). Obtain your API key from [OMDB API](https://www.omdbapi.com/).
- `ca.pem` file from your cloud server (needed for secure database connection)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/your-project.git
   cd your-project
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_SERVICE_URI=your_database_service_uri
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_DATABASE=your_database_name
   DB_SSL=true # or false based on your configuration
   OMDB_API_KEY=your_omdb_api_key
   APP_PORT=your_application_port
   ```

4. **Add the CA Certificate**

   Place the `ca.pem` file from your cloud server in the root directory of your project. This file is required to securely connect to the PostgreSQL database.

5. **Database Configuration**

   Make sure your PostgreSQL database is set up and accessible via [Aiven Cloud Console](https://console.aiven.io). Update the database configuration in `knexfile.js` if necessary. Ensure that the `ca.pem` file is referenced correctly in your configuration.

6. **Run Migrations**

   Apply any pending migrations to your database:

   ```bash
   npx knex migrate:latest
   ```

7. **Start the Application**

   ```bash
   npm run start
   ```

## GraphQL Schema

### Types

#### `Movie`

```graphql
type Movie {
  imdbID: String!
  Title: String!
  Year: String!
  Rated: String!
  Released: String!
  Runtime: String!
  Actors: String!
  Plot: String!
  imdbRating: String!
  likes: Int!
  dislikes: Int!
  created_at: String
  updated_at: String
}
```

## API Testing

You can test the API using Postman or any other API testing tool. For Postman, you can import the Postman collection file.

### Postman Collection

1. Download the [Postman collection](path/to/your/collection.json).
2. Open Postman.
3. Go to "Import" and select the downloaded collection file.
4. You can now test the API endpoints directly from Postman.

### API Documentation

The API follows the OpenAPI (Swagger) specification. You can use tools like Swagger UI or Redoc to view and interact with the API documentation. The OpenAPI specification file is available [here](path/to/openapi.yaml).

## Troubleshooting

- **Error fetching data:** Ensure your OMDB API key is correct and your database is properly configured.
- **GraphQL schema issues:** Run `npm run generate` to update the GraphQL schema file if using schema generation tools.
- **Database connection issues:** Verify that the `ca.pem` file is correctly placed in the root directory and referenced in your database configuration.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
