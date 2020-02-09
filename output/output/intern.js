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
    
})