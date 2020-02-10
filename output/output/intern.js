const Employee = require("./employee")
//Questions for the intern///

inquirer.prompt([{
    
    type: "input",
    name: "school",
    message:"What school do you attend?"
    
},
{
    type: "input",
    name: "github",
    message: "What is your gitHub Username"
}

])

.then(function(answers) {
    school = answers.school;
    github = answers.github;
})

///Class for the intern/////

class Intern extends Employee() {
    constructor(name, id,email,school) {
        super(name,id,email);
        this.school = school
    }
    ///get school////
getSchool() {
    return `Your school is ${this.school}`;
}

getRole() {
    return "Intern"
}


}


