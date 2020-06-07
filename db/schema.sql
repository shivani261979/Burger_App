### Schema

CREATE DATABASE burgers_db;

USE burgers_db;
DROP table burgers;

USE burgers_db;
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN,
	PRIMARY KEY (id)
);

