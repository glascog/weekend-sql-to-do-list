CREATE TABLE "to-dos" (
	"id" SERIAL PRIMARY KEY,
	"task" VARCHAR (100) NOT NULL,
  	"isCompleted" BOOLEAN DEFAULT FALSE
);

INSERT INTO "to-dos" 
	("task") 
VALUES 
	('Make haircut appointments'),
	('Set up new wifi modem'),
	('Buy dog food'),
	('Pack school lunches');