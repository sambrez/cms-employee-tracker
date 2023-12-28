const questions = [
    {
        type: 'checkbox',
        name: 'init',
        message: 'What would you like to do?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add department',
            'Add role',
            'Add employee',
            'Update employee role'
        ],
        validate: function(init) {
            if (init.length > 1) {
                return 'Error: Too many selections.';
            } else if (init.length < 1) {
                return 'Error: Nothing selected';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'new_department',
        message: 'What is the name of the department?',
        validate: function(new_department) {
            if (new_department === null) {
                return 'Error: must provide department name.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'new_role',
        message: 'What is the name of the role?',
        validate: function(new_role) {
            if (new_role === null) {
                return 'Error: must provide department name.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of this role?',
        validate: function(salary) {
            if (salary === null) {
                return 'Error: must provide department name.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'department_id',
        message: 'Which department does this role belong to?',
        choices: function() {
            let arr = [];
            // for loop over departments
        },
        validate: function(department_id) {
            if (department_id.length > 1) {
                return 'Error: Please select a single department.';
            } else if (department_id.length < 1) {
                return 'Error: Please select a department.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'first_name',
        message: "What is the employee's first name?",
        validate: function(first_name) {
            if (first_name === null) {
                return 'Error: must provide a first name.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'last_name',
        message: "What is the employee's last name?",
        validate: function(last_name) {
            if (last_name === null) {
                return 'Error: must provide a last name.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'role_id',
        message: "What's the employee's role?",
        choices: function() {
            let arr = [];
            // for loop over role
        },
        validate: function(role_id) {
            if (role_id.length > 1) {
                return 'Error: Please select a single role.';
            } else if (role_id.length < 1) {
                return 'Error: Please select a role.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'manager',
        message: "Which manager does this employee report to?",
    },
    {
        type: 'input',
        name: 'employee_id',
        message: "Enter the employee id.",
        validate: function(employee_id) {
            for (let i = 0; i < db.employees.id; i++) {
                if (employee_id === db.employee_id[i]) {
                 return true;
                } else {
                    return 'Error: employee not found.'
                }
            }
        }
    },
    {
        type: 'checkbox',
        name: 'updated_role',
        message: "What's the employee's new role?",
        choices: function() {
            let arr = [];
            // for loop over roles
        },
        validate: function(updated_role) {
            if (updated_role.length > 1) {
                return 'Error: Please select a single role.';
            } else if (updated_role.length < 1) {
                return 'Error: Please select a role.';
            } else {
                return true;
            }
        }
    },
]