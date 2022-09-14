USE Scientists;

SELECT * 
FROM Scientists.Projects 
LIMIT 3;

SELECT 10 + 15;
SELECT 10 * 2;

SELECT *
FROM Scientists.Scientists;

SELECT CONCAT('name: ',name,' hours:' ,hours) 
FROM Scientists.Projects;

SELECT * 
FROM Scientists.Scientists
ORDER BY name ASC;

SELECT *
FROM Scientists.Projects
ORDER BY name DESC;


SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído')
FROM Scientists.Projects;


SELECT * 
FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 3;

SELECT DISTINCT project
FROM Scientists.AssignedTo;


SELECT *
FROM Scientists.Projects
ORDER BY hours DESC
LIMIT 1;


SELECT *
FROM Scientists.Projects
ORDER BY hours ASC
LIMIT 1;

SELECT *
FROM Scientists.Projects
ORDER BY hours ASC
LIMIT 1 OFFSET 1;


SELECT *
FROM Scientists.Projects
ORDER BY hours ASC
LIMIT 5;


SELECT DISTINCT COUNT(name)
FROM Scientists.Scientists;