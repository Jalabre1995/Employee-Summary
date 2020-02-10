const Employee = require("./employee");

////Sub class for the engineer/////

 inquirer.prompt([{

     type: "input",
     name: "githubUsername",
     message: "What is you gitHub Username?"
 }])
 .then(function(answers) {
    github = answers.gitHub;
 })


class Engineer extends Employee() {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub
    }

    ///get the getGitHub///
    getGitHub() {
        return `Your GitHub is ${this.gitHub}`;
    }

    getRole() {
        return "Engineer";
    }
}