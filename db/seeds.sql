INSERT INTO departments (department_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');
       
INSERT INTO employee_roles (title, salary, department_id)
VALUES ('Sales Lead', 100000 , 1),
       ('Salesperson', 80000 , 1),
       ("Lead Engineer", 150000 , 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000 , 3),
       ("Accountant", 125000 , 3),
       ("Legal Team Aid", 250000 , 4),
       ("Lawyer", 190000 , 4);
       
INSERT INTO employee_list (first_name, last_name, role_id, manager_id)
VALUES ('Tabby', 'Smith', 1, NULL),
       ('Jackson', 'Montoya', 2, 1),
       ('Robby', 'Ramirez', 3, 1),
       ('Yolanda', 'Peterson', 4, 1),
       ('Wren', 'Oliver', 5, 1),
       ('Sean', 'McQueen', 6, 1),
       ('Howie', 'Mendoza', 7, 1),
       ('Amy', 'Wallace', 8, 1);
       
