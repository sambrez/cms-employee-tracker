const inquirer = require('inquirer');
const mysql = require('mysql2');
const [question, newDepartment, newRole, newEmployee, updateEmployee] = require('./library/questions');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);



function main() {
    inquirer
        .prompt(question)
        .then(data => {
            if (data.init[0] === 'View all departments') {
                db.query('SELECT departments.id, departments.department_name FROM departments', (error, result) => {
                    if (error) {
                        return console.log(error);
                    } else {
                        console.log('Now viewing all departments');
                        console.table(result);
                        main();
                    }
                })
            } else if (data.init[0] === 'View all roles') {
                db.query('SELECT * FROM roles', (error, result) => {
                    if (error) {
                        return console.log(error);
                    } else {
                        console.log('Now viewing all roles');
                        console.table(result);
                        main();
                    }
                })
            } else if (data.init[0] === 'View all employees') {
                db.query('SELECT * FROM employees', (error, result) => {
                    if (error) {
                        return console.log(error);
                    } else {
                        console.log('Now viewing all employees');
                        console.table(result);
                        main();
                    }
                })
            } else if (data.init[0] === 'Add department') {
                inquirer
                    .prompt(newDepartment)
                    .then(data => {
                        db.query('INSERT INTO departments (department_name) VALUES (?)', [data.new_department], (error, result) => {
                            if (error) {
                                return console.log(error);
                            } else {
                                console.log('A new department has been added.');
                                main();
                            }
                        })
                    })
            } else if (data.init[0] === 'Add role') {
                db.query('SELECT (id) FROM departments', (error, result) => {
                    if (error) return error;
                    inquirer
                        .prompt(newRole, result)
                        .then(data => {
                            db.query('INSERT INTO roles (role_title, role_salary, department_id) VALUES (?, ?, ?)', [data.new_role, data.salary, data.department_id], (error, result) => {
                                if (error) {
                                    return console.log(error);
                                } else {
                                    console.log('A new role has been added.');
                                    main();
                                }
                            })
                        })
                })
            } else if (data.init[0] === 'Add employee') {
                inquirer
                    .prompt(newEmployee)
                    .then(data => {
                        db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)', [data.first_name, data.last_name, data.role_id, data.manager_id], (error, result) => {
                            if (error) {
                                return console.log(error);
                            } else {
                                console.log('A new employee has been added.');
                                main();
                            }
                        })
                    })
            } else if (data.init[0] === 'Update employee role') {
                    inquirer
                        .prompt(updateEmployee)
                        .then(data => {
                            db.query('UPDATE employees SET role_id = (?) WHERE id = (?)', [data.updated_role, data.employee_id], (error, result) => {
                                if (error) {
                                    return console.log(error);
                                } else {
                                    console.log('Employee has been updated.');
                                    main();
                                }
                            })
                        })
            }
        })
        .catch((error) => {
            if (error) {
                return console.log(error);
            }
        })
};

main();