const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection(
  {
    host: 'localhost',

    user: 'root',
  //   ADD MYSQL PASSWORD HERE
    password: 'password',
    database: 'employees_db',
  },
  console.log(`Connected to the employees_db database.`)
);
function mainMenu() {
inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'options',
      choices: ['View all Departments','View all Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role']
    },

  ])
  .then((response) => {

    if (response.options == 'View all Departments') {
        viewDepartments();
    } else if(response.options == 'View all Roles') {
        viewRoles();
    } else if(response.options == 'View all Employees'){
        viewEmployees();
  } else if(response.options == 'Add a Department'){
        addDepartment();
    } else if(response.options == 'Add a Role'){
        addRole();
    } else if(response.options == 'Add an Employee'){
        addEmployee();
    } else if(response.options == 'Update an Employee Role'){
        updateEmployee();
    }

  })
}
  function viewDepartments() {
    db.query('SELECT * from departments', function (err, results) {
      console.table(results);
      mainMenu();
    });
  }

  function viewRoles() {
    db.query('SELECT * from employee_roles', function (err, results) {
      console.table(results);
      mainMenu();
    });
  }

  function viewEmployees() {
    db.query('SELECT * from employee_list', function (err, results) {
      console.table(results);
      mainMenu();
    });
  }

  function addDepartment() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'department_name',
        message: 'What is the department name?'
      }
    ]) 
    .then((response) => {
      db.query("INSERT INTO departments SET ?", response, function (err, results) {
        console.log('Department added!');
        mainMenu();
      })
    })
  }

  function addRole() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of the role?'
      },
      {
        type: 'input',
        name: 'salary',
        message: 'Enter the salary for this position:'
      },
      {
        type: 'input',
        name: 'department_id',
        message: 'Enter the department id for this role:'
      }
    ])
    .then((response) => {
      db.query("INSERT INTO employee_roles SET ?", response, function (err, results) {
        console.log('Role added!');
        mainMenu();
      })
    })
  }

  function addEmployee() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the new employee?'
      },
      {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the new employee?'
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'What is the id for the employees role?',
      },
      {
        type: 'input',
        name: 'manager_id',
        message: 'What is the id of the manager this employee reports to?',
      }
    ])
    .then((response) => {
      db.query("INSERT INTO employee_list SET ?", response, function (err, results) {
        console.log('Employee added!');
        mainMenu();
      })
    })
  }

  function updateEmployee() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'id',
        message: 'Enter the employee id for the employee you would like to update:'
      },
      {
        type: 'input',
        name: 'role_id',
        message: 'Enter a new role id for the employee:'
      }
    ])
    .then((response) => {
      const { id, role_id } = response;

      db.query("UPDATE employee_list SET role_id =? WHERE id =?", [role_id, id], function (err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log('Employee updated!');
        }
        mainMenu();
      })
    })
  }
  mainMenu();