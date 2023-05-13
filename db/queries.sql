SELECT *
FROM employee_roles
JOIN department ON employee_roles.department_id = departments.id;

SELECT *
FROM employee_list
JOIN employee_roles ON employee_list.role_id = employee_roles.id;