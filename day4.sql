INSERT INTO sakila.actor (first_name, last_name)
VALUES ('Keanu', 'Reeves'), ('Carrie', 'Anne'),('Laurence', 'Fishburn');
SELECT * FROM sakila.actor ORDER BY last_update DESC;

INSERT INTO sakila.film (title, language_id)
VALUES ('Matrix 4', 1);
SELECT * FROM sakila.film ORDER BY last_update DESC;

INSERT INTO sakila.film_actor (actor_id, film_id)
VALUES (201, 1002);
SELECT * From sakila.film_actor ORDER BY actor_id DESC;

INSERT INTO sakila.inventory (film_id, store_id)
VALUES (201, 1);
SELECT * FROM sakila.inventory ORDER BY inventory_id DESC;

INSERT INTO sakila.customer (store_id, first_name, last_name, email, address_id, active )
VALUES (1, 'cassio', 'junior', 'cassiospcjunior@gmail.com', 14, 1);
SELECT * FROM sakila.customer ORDER BY customer_id DESC;


INSERT INTO sakila.rental (customer_id, inventory_id, staff_id)
VALUES (600, 4582, 1);
SELECT * FROM sakila.rental ORDER BY rental_id DESC;

UPDATE sakila.rental 
SET return_date = '2022-04-26 19:55:00'
WHERE customer_id = 600;
SELECT * FROM sakila.rental ORDER BY rental_id DESC;

UPDATE sakila.customer
SET active = 0
WHERE customer_id = 600;
SELECT * FROM sakila.customer ORDER BY customer_id DESC;

