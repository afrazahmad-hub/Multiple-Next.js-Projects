# for using vercel database

1.  npm i @vercel/postgres
    import { db } from "@vercel/postgres";

2.  Run "vercel" to deploy, and open project.....go to storage section and create a postgress database
    Vercel database will automatically connect with our project.

3.  Run "vercel env pull .env.development.local" to bring the environment variables for the tood project vercel website.
    It will create an env file which will use only for development, for production we will have to import production environment variables.

4.  Insert data through vercel database, INSERT INTO Todos(Task) VALUES ('task 1')

# Drizzle:

Drizzle can not create tables in the database. For this purpose we have to use quries i.e. SQL. Drizzle only perform functions on existing tables.
src/lib/drizzle.tsx

    npm install drizzle-orm
    import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
    import { drizzle } from 'drizzle-orm/node-postgres';
