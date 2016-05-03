# Many to many relationship example with Bookshelf.js

This is a simple example of how to use many to many relationships with [Bookshelf.js](http://bookshelfjs.org/). This example was put together using [Perk](http://perkframework.com) - a well documented set of tools for building node web applications.

This example was created for the [Perk Documentation on many to many relationships](http://perkframework.com/api/database.html#many-to-many)

## To run

1. Git clone this repo
1. cd into project and `npm install`
1. Install knex: `npm install -g knex`
1. With PostgreSQL: `createdb many-to-many`
1. Boot up the server `npm run dev`
1. Run migrations: `knex migrate:latest`
1. Run seed files: `knex seed:run`
1. Fill in database credentials and random string for session secret.
1. Go to [http://localhost:3000](http://localhost:3000)

## Important files

Look at these files for the necessary pieces to establish a many to many relationship using Bookshelf.js.

### Migrations

* [/migrations/20160502194317_create_colleges.js](/migrations/20160502194317_create_colleges.js)
* [/migrations/20160502194331_create_applications.js](/migrations/20160502194331_create_applications.js)
* [/migrations/20160502194337_create_collegeApplications.js](/migrations/20160502194337_create_collegeApplications.js)

### Models

* [/models/Application.js](/models/Application.js)
* [/models/College.js](/models/College.js)

### Queries

* [/routes/index.js](/routes/index.js)

### Seed data

* [/seeds/dev/all.js](/seeds/dev/all.js)
