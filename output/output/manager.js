const Employee = require("./employee")
//Questions for the Manager/// 

// inquirer.prompt([{

//     type: "input",
//     name:"officeProvided",
//     message: "What os your office number?"

// }])

// .then(function(answers){
//     officeProvided = answers.officeProvided;
// })



class Manager extends Employee() {
    constuctor (name, id, email, office) {
        super(name, id, email);
        this.officeNumber = office
    }

    ///getRole for the manager////
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return `this is your ${this.officeNumber}`
    }
}