const question = [
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
    }
];

const newDepartment = [
    {
        type: 'input',
        name: 'new_department',
        message: 'What is the name of the new department?',
        validate: function(new_department) {
            if (new_department === '') {
                return 'Error: must provide department name.';
            } else {
                return true;
            }
        }
    },
];

const newRole = [
    {
        type: 'input',
        name: 'new_role',
        message: 'What is the name of the new role?',
        validate: function(new_role) {
            if (new_role === null) {
                return 'Error: must provide a role name.';
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
            if (salary === '') {
                return 'Error: must provide department name.';
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'department_id',
        message: 'What is the department ID for this new role?',
        validate: function(department_id) {
            if (department_id) {
                return true;
            } else {
                return 'Error: Please enter a department.';
            }
        }
    },
];

const newEmployee = [
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
        type: 'input',
        name: 'role_id',
        message: "Please enter the role ID",
        validate: function(role_id) {
            if (role_id) {
                return true;
            } else {
                return 'Error: Please enter a role ID.';
            } 
        }
    },
    {
        type: 'input',
        name: 'manager_id',
        message: "Please enter the reporting manager's ID?",
        validate: function(manager_id) {
            if (manager_id) {
                return true;
            } else {
                return 'Error: Please enter a role ID.';
            } 
        }
    },
];
    
const updateEmployee = [
    {
        type: 'input',
        name: 'employee_id',
        message: "What is the employee's ID?",
        validate: function(employee_id) {
            if (employee_id) {
                return true;
            } else {
                return 'Error: Please enter an employee ID.';
            }
        }
    },
    {
        type: 'input',
        name: 'updated_role',
        message: "What's the employee's new role ID?",
        validate: function(updated_role) {
            if (updated_role) {
                return true;
            } else {
                return 'Error: Please enter a role ID.';
            }
        }
    },
];
 
    
    
    
    
    
    


module.exports = [question, newDepartment, newRole, newEmployee, updateEmployee];
