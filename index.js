const Employee = require ('./lib Employee');
const Engineer = require ('./lib Engineer');
const Intern = require ('./lib Intern');
const Manager = require ('.lib Manager');
const fs = require ('fs');
const { type } = require('os');

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
        {
            type: 'input',
            name: 'email',
            message: 'What is the employee email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the employee officeNumber?'

        },
    ])
    .then (answers => {
        var {name, id, email, officeNumber} = answers;
        var employee = Employee (name, id, email, officeNumber);
    })

    inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager officeNumber?'

        },
    ])
    .then (answers => {
        var {name, id, email, officeNumber} = answers;
        var manager = Manager (name, id, email, officeNumber);

        teamMember.push(manager);
    })
    function createTeam (){
        inquirer
            .prompt([{
                type: 'list',
                name: 'command',
                message: 'Would you like to add more team members',
                choices: ['Add an Engineer', 'Add an Intern',"Make team"]
            },   
            ])
            .then(answers => {
                statement = answers.comman;

                switch(statement){
                    case 'Add an Engineer':
                        getEngineer();
                        break;

                        case 'Add an Intern':
                            getIntern();
                            break;

                        case 'Make team':
                                buildTeam();
                                break;

                }
            })
    }

    function getEngineer(){

        inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineers name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineers id?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the engineers github username?'

        },
    ])
    .then (answers => {
        var {name, id, email, github} = answers;
        var engineers = Engineer (name, id, email, github);
        teamMember.push(engineers);
    })

    }

    function getIntern(){

        inquirer
    .prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns id?'

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school name?'

        },
    ])
    .then (answers => {
        var {name, id, email, github} = answers;
        var intern = Intern (name, id, email, github);
        teamMember.push(engineers);
    })

    }

    function buildTeam(){
        fswriteFileSync(outputPath, mainGenarate (teamMember), "utf-8");

    }
    mainLib()
    
        function engineer(data){
            return `
            
            `
        }

        function intern(data){
            return `
            
            `
        }
        function employee(data){
            return `
            
            `
        }

        function manager(data){
            return `
            
            `
        }

        class Employee {
            constructor(name, id, email){
                this.name = name;
                this.id = id;
                this.email = email;
            }
            getname(){
                return this.name;
            }
            getid(){
                return this.id;
            }
            getemail(){
                return this.email;
            }
            getRole(){
                return 'Employee'
            }
        }
        modele.exports = Employee

    const employee = require('./lib/employee');

    class Engineer extends Employee{
        constructor(name, id, email, github){
            super(name, id, email)
            this.github = github;
        }
        getGithub(){
            return this.github;
        }
        getRole(){
            return 'Engineer';
        }
    }
    module.exports = Engineer;

    const employee = require ('./lib/Employee');

    class Intern extends Employee{
        constructor(name, id, email, school){
            super(name, id, email)
            this.school = school;

        }
        getSchool(){
            return this.school;
        
        }
        getRole(){
            return 'Intern';
        }
        
    }
    module.exports = Intern;

    const employee = require('./Employee');

    class Manager extends Employee{
        constructor(name, id, email, officeNumber){
            super(name, id, email)
            this.officeNumber = officeNumber;
        }
        getOfficenumber(){
            return this.officeNumber;
        }
        getRole(){
            return 'Manager';   
        }
    }
    module.exports = Manager;



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

