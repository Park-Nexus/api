## API

1. To start the dev server on port 4000, run `yarn dev`.

## Database

1. Setup

   1. Make sure `Docker` is installed.
   2. Go to `prisma`, run `docker-compose up` to spin up the database in a Docker container.
   3. To access the database, run `docker exec -it parkNexus.db bash` and then `psql --username postgres`.
   4. Create a database with `create database parkNexus;`.
   5. Grant all privileges to the database with `grant all privileges on database parkNexus to postgres;`.

2. Usage
   1. To migrate the database, run `npx prisma migrate dev --name <migration name>`.
   2. To generate the Prisma client, run `npx prisma generate`.

## ENV File

- The env file must contain the following variables:
  1. `API_PORT`
  2. `DATABASE_URL`
  3. `JWT_SECRET`
  4. `JWT_REFRESH_EXPIRES`
  5. `JWT_ACCESS_EXPIRES`
  6. `PASSWORD_ROUNDS`
