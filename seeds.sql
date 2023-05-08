INSERT INTO departments (id, department_name)
VALUES (1, Sales),
       (2, Engineering),
       (3, Finance),
       (4, Legal);
       
INSERT INTO employee_roles (id, title, salary, department_id)
VALUES (1, 'Sales Lead', 100000 , 1),
       (2, 'Salesperson', 80000 , 1),
       (3, "Lead Engineer", 150000 , 2),
       (4, "Software Engineer", 120000, 2),
       (5, "Account Manager", 160000 , 3),
       (6, "Accountant", 125000 , 3),
       (7, "Legal Team Aid", 250000 , 4),
       (8, "Lawyer", 190000 , 4);
       
INSERT INTO employee_list (id, first_name, last_name, employee_role)
VALUES (001, 'Tabby', 'Smith', 1),
       (002, 'Jackson', 'Montoya', 2),
       (003, 'Robby', 'Ramirez', 3),
       (004, 'Yolanda', 'Peterson', 4),
       (005, 'Wren', 'Oliver', 5),
       (006, 'Sean', 'McQueen', 6),
       (007, 'Howie', 'Mendoza', 7),
       (008, 'Amy', 'Wallace', 8);
       
