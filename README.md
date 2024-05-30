**NestJS CRUD Project**

This project is a basic CRUD (Create, Read, Update, Delete) application built using NestJS, a progressive Node.js framework for building efficient and scalable server-side applications.

**Table of Contents**

NestJS CRUD Project
Table of Contents
Description
Installation
Running the Application
Scripts
Dependencies
License


**Description**
This project demonstrates the implementation of CRUD operations using NestJS with PostgreSQL as the database. It leverages Sequelize as the ORM and includes authentication using JWT.

**Installation**
To get started with the project, follow these steps:

**Clone the repository:**
git clone https://github.com/your-username/nestjs-crud.git

**Navigate to the project directory:**
cd nestjs-crud

**Install the dependencies:**
npm install

Set up the environment variables. Create a .env file in the root directory and add your configuration settings (example provided in .env.example if available).

**Running the Application**

To run the application in development mode:
**npm run start:dev**

To build the application for production:
**npm run build**

To start the application in production mode:
**npm run start:prod**

**Scripts**

Here are the main scripts available in the project:

build: Compiles the project.
format: Formats the code using Prettier.
start: Starts the application.
start:dev: Starts the application in development mode with hot-reload.
start:debug: Starts the application in debug mode.
start:prod: Starts the application in production mode.
lint: Lints the project using ESLint.
test: Runs all tests.
test:watch: Runs all tests in watch mode.
test:cov: Runs tests and collects coverage information.
test:debug: Runs tests in debug mode.
test:e2e: Runs end-to-end tests.

**Dependencies**

The main dependencies used in this project are:

@nestjs/common
@nestjs/config
@nestjs/core
@nestjs/jwt
@nestjs/platform-express
@nestjs/sequelize
@nestjs/swagger
bcrypt
class-transformer
class-validator
passport
passport-jwt
pg
pg-hstore
reflect-metadata
rxjs
sequelize
sequelize-typescript
swagger-ui-express

**License**

This project is UNLICENSED. 
