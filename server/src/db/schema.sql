-- Open the terminal and login to psql by typing the command `psql -U <Your username>`

-- Create a new database
CREATE DATABASE pern_auth_system;

-- Connect to the newly created database with `\c pern_auth_system`


-- Create tables
-- users table:
CREATE TABLE users(
    id BIGSERIAL PRIMARY KEY NOT NULL, 
    username VARCHAR(32) UNIQUE NOT NULL,
    email VARCHAR(256) UNIQUE NOT NULL,
    password VARCHAR(512) NOT NULL,
    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
);

-- 