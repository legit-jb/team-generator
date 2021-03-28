const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/pageTemplate');
const writeFile = require('./src/generateSite')

Prompt =() => {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'role',
                message: "role:",
                choices: ['Manager', 'Engineer', 'Intern']
            },
            {
                type: 'text',
                name: 'employee',
                message: "name:"
            },
            {
                type: 'text',
                name: 'id',
                message: "ID:"
            },
            {
                type: 'text',
                name: 'email',
                message: "email:"
            }])
        .then(({ employee, id, email, role }) => {
            switch (role) {
                case "Manager":
                    return inquirer
                        .prompt([{
                            type: 'text',
                            name: 'office',
                            message: "office number:"
                        },
                        {
                            type: 'confirm',
                            name: 'anotherEntry',
                            message: "additional employee?",
                            default: false
                        }])
                        .then(({ office, anotherEntry }) => {
                            manager.push(new Manager(employee, id, email, office))
                            if (anotherEntry) {
                                return Prompt();
                            }
                        })
                    break;

                case "Engineer":
                    return inquirer
                        .prompt([{
                            type: "text",
                            name: "github",
                            message: "Github username:"
                        },
                        {
                            type: "confirm",
                            name: "anotherEntry",
                            message: "additional employee?",
                            default: false
                        }])
                        .then(({ github, anotherEntry }) => {
                            engineer.push(new Engineer(employee, id, email, github))
                            if (anotherEntry) {
                                return Prompt();
                            }
                        })
                    break;

                case "Intern":
                    return inquirer
                        .prompt([{
                            type: 'text',
                            name: 'school',
                            message: "school:"
                        },
                        {
                            type: 'confirm',
                            name: 'anotherEntry',
                            message: "additional employee?",
                            default: false
                        }])
                        .then(({ school, anotherEntry }) => {
                            intern.push(new Intern(employee, id, email, school))
                            if (anotherEntry) {
                                return Prompt();
                            }
                        })
            }
            // end of switch
        })
        // end of .then
};
// end of prompt function



Prompt()
    .then(teamData => {
        return generatePage(employeeArr)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })


// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated