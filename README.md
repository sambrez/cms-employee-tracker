# cms-employee-tracker

## Description
This repository contains an application for managing a company's employee database. It is built with Javascript, is executed via the command-line with Node.js and utilizes npm packages Inquirer and MySQL. When initialized the user is prompted with a series of options related to managing the database including viewing all departments, roles, or employees, adding a new department, role, or employee, as well as updating an employee. Based on the user's repsonses further prompts are provided and the necessary queries are sent to the database and the appropriate response is returned. 


The biggest problem I faced was requesting database values and using the result as list options in an inquirer prompt. This functionality is not a part of this application in its current state but that is not impacting overall functionality. I look forward to digging further into this particular issue in order to make improvements to the application in the near future. These improvements will make the application more user friendly. 

## Installation
Install the necessary npm packages for this app by running `npm install` in your terminal.

## Usage
https://drive.google.com/file/d/1WnXsbJJDmIg5Uj0OLf_zs0TaLKb8VUjG/view

## Credits
When creating this project I referenced w3Schools mySQL and SQL documentation and tutorials to ensure that I was using the correct syntax when coding database queries. This reference material can be found here: https://www.w3schools.com/mysql/mysql_sql.asp

I also utilized the following two links when researching a way in which to code a database query that took in an outside variable from the inquirer prompts. Specifically these resources introduced the use of "VALUE (?)" to me whih I utilized in this project when injecting inquirer prompt data into the database queries. 
https://stackoverflow.com/questions/49368756/nodejs-and-mysql-how-to-use-nodejs-variable-in-mysql-insert-statement
https://stackoverflow.com/questions/57185394/exception-when-running-large-insert-query-with-mysql2

## Links
https://github.com/sambrez/cms-employee-tracker