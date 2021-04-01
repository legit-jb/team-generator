// Team Generator
// JB
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const roleCard = require("./src/buildHtml.js")
const engineerArray = [];
const internArray = [];
const teamArray = [];

managerPrompt = () => {
    return inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Manager, enter your name:"
    },
    {
        type: "text",
        name: "id",
        message: "ID:"
    },
    {
        type: "text",
        name: "email",
        message: "email:"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "office number:"
    },
    {
        type: "confirm",
        name: "confirm",
        message: "Another team member?",
        default: true
    }
    ])
        .then(({ name, id, email, officeNumber, confirm }) => {
            // new Manager object
            const manager = new Manager(name, id, email, officeNumber);

            // create HTML card
            teamArray[0] = manager;
            if (confirm) {
                buildTeam();
            } else {
                build();
            }
        })
    // end of .then 
}
// end of managerPrompt function

buildTeam = () => {

    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "role:",
            choices: ["engineer", "intern"]
        },
        {
            type: "text",
            name: "name",
            message: "name:"
        },
        {
            type: "text",
            name: "id",
            message: "ID:"
        },
        {
            type: "text",
            name: "email",
            message: "email:"
        },
        ])
        .then(({ name, id, email, role }) => {
            switch (role) {
                case "engineer":
                    return inquirer.prompt([{
                        type: "text",
                        name: "github",
                        message: "Github username:"
                    },
                    {
                        type: "confirm",
                        name: "confirm",
                        message: "Another team member?",
                        default: false
                    }])
                        .then(({ github, confirm }) => {
                            // new Engineer object
                            const engineer = new Engineer(name, id, email, github);
                            
                            engineerArray.push(engineer);
                            if (confirm) {
                                buildTeam();
                            } else {
                                build();
                            }
                        })
                    break;
                // end case engineer

                case "intern":
                    return inquirer
                        .prompt([{
                            type: "text",
                            name: "school",
                            message: "school:"
                        },
                        {
                            type: "confirm",
                            name: "confirm",
                            message: "Another team member?",
                            default: false
                        }])
                        .then(({ school, confirm }) => {
                            // create a new Intern object
                            const intern = new Intern(name, id, email, school);

                            // build HTML card
                            internArray.push(intern);
                            if (confirm) {
                                buildTeam();
                            } else {
                                build();
                            }
                        })
                    break;
                // end case intern

                default:
                    build();
                    break;
                // end default
            }
            // end of switch
        })
    // end of .then
};
// end of buildTeam function


build = () => {
    teamArray[1] = engineerArray;
    teamArray[2] = internArray;
    roleCard(teamArray);
}

init = () => {
    managerPrompt();
}

init();


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