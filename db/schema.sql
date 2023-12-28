DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE departments (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    role_title VARCHAR(30) NOT NULL,
    role_salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id),
    REFERENCES departments(id)
);

CREATE TABLE employees (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id),
    REFERENCES roles(id),
    ON DELETE SET NULL
)