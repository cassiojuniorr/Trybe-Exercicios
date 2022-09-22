CREATE DATABASE Zoologic;

CREATE TABLE Zoologic.sexo (
id_sexo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
sexo VARCHAR(10)
);

CREATE TABLE Zoologic.specie (
id_specie INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
specie VARCHAR(20)
);

CREATE TABLE Zoologic.locals (
id_local INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
local VARCHAR(20)
);

CREATE TABLE Zoologic.employees (
id_elm INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(40)
);

CREATE TABLE Zoologic.animals (
	id_animal INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name_animal VARCHAR(40),
    id_specie INT NOT NULL,
    id_sexo INT NOT NULL,
    idade SMALLINT,
    id_local INT  NOT NULL,
    id_elm INT NOT NULL,
    FOREIGN KEY (id_specie) REFERENCES specie (id_specie),
	FOREIGN KEY (id_sexo) REFERENCES sexo (id_sexo),
    FOREIGN KEY (id_local) REFERENCES locals (id_local),
    FOREIGN KEY (id_elm) REFERENCES employees (id_elm)
);

INSERT INTO Zoologic.employees (name)
VALUE ('Henrique'), ('Pedro'), ('Daniela');

INSERT INTO Zoologic.locals (local)
VALUES ('SP'), ('RJ'), ('MG');

INSERT INTO Zoologic.sexo (sexo)
VALUES ('fêmea'), ('macho');

INSERT INTO Zoologic.specie (specie)
VALUES ('lion'), ('froggy'), ('zebra'), ('australopiteco');

INSERT INTO Zoologic.animals (name_animal, id_specie, id_sexo,  idade, id_local, id_elm)
VALUES ('Zed', 1, 2, 8 , 3 , 1), ('Tina', 4, 1, 4, 2, 3);
