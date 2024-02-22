----- drop database -----
DROP DATABASE IF EXISTS amberoak_dev;


----- create database -----
CREATE DATABASE amberoak_dev;

----- connect to database -----
\c amberoak_dev;

----- create table -----
CREATE TABLE amberoak_dev (
id SERIAL PRIMARY KEY,
bourbon_name TEXT NOT NULL,
geographic_orgin TEXT NOT NULL,
abv INT,
tasting_notes TEXT,
food_pairings TEXT,
description TEXT NOT NULL
);