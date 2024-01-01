const inquirer = require('inquirer');
const mysql = require('mysql2');
const questions = require('./library/questions');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'company_db'
    },
    console.log(`Connected to the company_db database.`)
);