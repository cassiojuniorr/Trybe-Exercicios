INSERT INTO Pixar.Movies (title, director, year, length_minutes)
VALUES ('Monstros SA', 'Pete Docter', 2001, 92 ),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird',  2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.BoxOffice;

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 30000000, 250000000);

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (10, 7.4, 460000000, 510000000);

DELETE FROM Pixar.Movies WHERE id = 11;

SET SQL_SAFE_UPDATES = 0;