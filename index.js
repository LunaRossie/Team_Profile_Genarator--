const Employee = require ('./lib Employee');
const Engineer = require ('./lib Engineer');
const Intern = require ('./lib Intern');
const Manager = require ('.lib Manager');
const fs = require ('fs');

inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the employee name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the employee id?'

        },

    ])
        

const teamMember = newMember.genarateHTML();

fs.writeFile ('index.html', htmlPageContent, (err) => err 
? console.log (err) : console.log ('Successful created index.html!'));

fs.writeFile ('index.html', employeehtml, (err) => err 
? console.log (err) : console.log ('Successful created index.html!'));

fs.writeFile ('index.html', engineerhtml, (err) => err 
? console.log (err) : console.log ('Successful created index.html!'));

fs.writeFile ('index.html', internhtml, (err) => err 
? console.log (err) : console.log ('Successful created index.html!'));

fs.writeFile ('index.html', managerhtml, (err) => err 
? console.log (err) : console.log ('Successful created index.html!'));

