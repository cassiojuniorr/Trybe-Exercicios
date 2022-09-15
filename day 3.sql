USE sakila;

SELECT title FROM sakila.film 
WHERE title LIKE '%si%'
AND rental_rate >= 2.99 AND rating != 'R' AND rating != 'pg-13';

SELECT * FROM sakila.film
WHERE (rating = 'g' OR rating = 'pg')
AND rental_duration BETWEEN 3 AND 5 
AND title != 'agent truman';

SELECT * FROM sakila.payment
WHERE rental_id IN (13, 14, 15, 17)
AND DATE(payment_date) BETWEEN '2005-05-25' AND '2005-05-28'
ORDER BY rental_id;

SELECT * FROM sakila.payment
WHERE customer_id IN (55, 57, 60) 
AND amount = 5.99
AND MONTH(payment_date) = 07 AND DAY(payment_date) = 31;

SELECT * FROM sakila.film
WHERE title LIKE '%egg%'
AND (rating != 'pg' OR rating != 'g');

SELECT * FROM sakila.film
WHERE title LIKE '%dd%' AND title LIKE '%y%'
AND length BETWEEN 80 AND 120;