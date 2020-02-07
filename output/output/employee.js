const inquirer = require('inquirer')


class Employee {
    constructor(name, id, title,) {
        this.name = name;
        this.id = id;
        this.title = title;
        
/// Name for the Employee////
const name = "Alice";
const Employee = new Employee(name);
        
    }
}
    //////Questions to ask the user////

    inquirer.prompt([{

        type: "input",
        name: "idNumber",
        message: "id number?"
    },
    {
        type: "input",
        name: "emailProvided",
        message: "Enter your eamil",
    },
    {
        type: "input",
        name: "officeProvided",
        message: "What is your office number?",
    }
    ])
.then(function(answers){
    idNumber = answers.idNumber;
    emailProvided = answers.emailProvided;
    officeProvided = answers.officeProvided;
})

    
    ///instantute the object/////
    getName()
    

