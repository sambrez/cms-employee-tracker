-- view all departments
SELECT * FROM departments

-- view all roles
SELECT * FROM roles

-- view all employees
SELECT * FROM employees

-- add new department
INSERT INTO departments (department_name)
VALUES (data)

-- add new role
INSERT INTO roles (role_title, role_salary, department_id)
VALUES (data.new_role, data.salary, data.department_id)

-- add new employee
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES (data.first_name, data.last_name, data.role_id, data.manager_id)

-- update employee
UPDATE employees
SET role_id = data.updated_role
WHERE employee_id = data.employee_id