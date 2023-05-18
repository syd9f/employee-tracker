const inquirer = require('inquirer');

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
        // Add code to view departments in a formatted table showing department names and department ids
    } else if(response.options == 'View all Roles') {
    //   add code to view the job title, role id, the department that role belongs to, and the salary for that role
    } else if(response.options == 'View all Employees'){
    //   add code to view a a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
    } else if(response.options == 'Add a Department'){
        //   add code that prompts user to enter the name of the department and that department is added to the database
    } else if(response.options == 'Add a Role'){
        //   add code that prompts user to enter the name, salary, and department for the role and that role is added to the database
    } else if(response.options == 'Add an Employee'){
        //   add code that prompts user to to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    } else if(response.options == 'Update an Employee Role'){
        //   add code that prompts user to select an employee to update and their new role (and this information is then updated in the database)
    }

  })
