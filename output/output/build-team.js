const inquirer = require("inquirer");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Employee = require("./employee");

const path = path.resolve(__dirname, "output", "team.html");
const teamMembers = [];

function start() {
////Asking questions for the Manager///////
function askManagerQuestions() {
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
            message: "What is your manager's office number?"
        }
    ]).then(function(answers) {
        const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
        teamMembers.push(manager);
        createTeam();
    })
}
/////// Creating the team base on the manager's answers//////
function createTeam(){
   return inquirer.prompt([
        {
            
            type: "list",
            name: "role",
            message: "What type of team member would you like to add?",
            choices: ["Engineer", "Intern", "Employee", "I don't want to add any more members"]
        }
    ]).then(function(answers){
        switch (answers.role) {
            case "Employee":
                addEmployee();
                break;
            case "Engineer":
            addEngineer();
            break;
            case"Intern":
             addIntern();
            break;
             default:
            buildTeam();
        }
        ///Add Employee////
        function addEmployee(){
            return   inquirer.prompt([{
    
                type: "input",
                name: "name",
                message: "What is your name?"
              },
              {
                  type: "input",
                  name: "role",
                  message: "what is your occupation ?"
           
           
              },
              {
                  type: "input",
                  name: "idNumber",
                  message: "What is your id number?"
              },
              {
                  type: "input",
                  name: "emailProvided",
                  message: "What is your email?",
              },
              {
                  type: "input",
                  name: "officeProvided",
                  message: "What is your office number?",
              }
              ])
              .then(function(answers){
                  const employee = new Employee(answers.name, answers.id,answers.email,answers.role);
                  teamMembers.push(employee);
                  createTeam(); 
              })
        }
        
        
        ///Add Enginner/////
function addEngineer(){
return inquirer.prompt([
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
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
                teamMembers.push(engineer);
                createTeam();
            })
        }
 ////// Add Intern ////////
  function addIntern(){
            return inquirer.prompt([
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
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                teamMembers.push(intern);
                createTeam();
            });
        }
        
    });
}
function buildteam() {
    fs.writeFile(outPath, render(teamMembers), "utf-8"); 
}

askManagerQuestions();
}

start();

///Start the Sequence//////