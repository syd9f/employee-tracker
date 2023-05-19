# employee-tracker
Module 12: SQL

## Description

This is a project intended for business owners to view and manage the departments, roles, and employees in their company. 

## Table of Contents

1. [Description](#Description) 
2. [Installation](#Installation) 
3. [Usage](#usage) 
4. [Questions](#questions)

## Installation

Requires node.js and Inquirer version 8.2.4

## Usage

[Video Walkthrough]('https://drive.google.com/file/d/1dpWkIEire7X-cOyw7ZCvGYcbPh_l8lhu/view')

This application is used in the command line. When opening the terminal, first run `npm i` to make sure the required packages are installed before moving forward. 

After ensuring the required packages are installed, open the MySQL shell and type `source db/schema.sql` to run the database. Then, type `source db/seeds.sql` to seed the database.

Now, close out of the MySql shell (by entering `exit`), and run `node index.js` to start the application.

The user will then see the main menu, allowing them to choose from the following options:
* View All Departments
* View All Roles
* View All Employees
* Add a Department
* Add a Role
* Update an Employee

Selecting to view the departments, roles, or employees will display the data for the selected table, as well as returning the main menu again.

Selecting to add a department, role, or employee will prompt the user to fill in the required information before adding that department, role, or employee to the respective table.

If the user chooses to update an employee role, they will be prompted to enter the employee id and the new role id for that employee. That employee's role is now changed, and when viewing the employee list again, that information is now updated.

## Questions
Contact for Questions: 
 [Github](https://github.com/syd9f) 
Email: sydniefarrell@gmail.com