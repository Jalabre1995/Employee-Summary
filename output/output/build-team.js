const inquierer = rewuire("inquirer");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Employee = require("./employee");

function start() {
    return inquierer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What s your managers ID?"
        },
        {
            type: "input",
            name: "email",
            message: "What s your manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What s your manager's office number?"
        }
    ])
}

function startTeam(){
    inquierer.prompt([
        {
            
            type: "list",
            name: "role",
            message: "What type of team meber would you like to add?",
            choices: ["Engineer", "Intern", "Employee", "I don't want to add any more members"]
        }
    ]).then(function(answers){
        if(answers.role === "Engineer") {
            return inquierer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Enggineer's name?" 
                },
                {
                    type: "input",
                   name: "id",
                  message: "What is the engineer's ID number?"
                },
                {
                    type: "input",
                  name: "email",
                 message: "What is your engineer's email?"
                },
                {
                    type: "input",
                    name: "gitHub",
                  message: "What is youe engineer's gitHub?"
                }
            ]).then(function(answers){
                let engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
                return engineer.getHTML();
                startTeam();
            })

        }
        if (answers.role === "Intern") {
            return inquierer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the Intern's name?"  
                },
                {
                    type: "input",
                    name: "name",
                    message: "What is the Intern's ID?"
                },
                {
                    type: "input",
                    name: "name",
                    message: "What is the Intern's email?"
                },
                {
                    type: "input",
                    name: "name",
                    message: "What is the Intern's school?" 
                }
            ]).then(function(answers){
                let intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                return intern.getHTML();
                startTeam();
            })
        }
        return printHTML(team);

    });
}
function printHTML(team) {
    fs.writeFile("team.html", team, (err) => {
        if (err) {
            throw err;
        };
        console.log("Team made!");

    });
    open("team.html")
}

///Start the Sequence//////