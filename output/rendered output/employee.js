const inquirer = require('inquirer')

  // //////Questions to ask the user////

  inquirer.prompt([{
  
  type: "input",
  name: "name",
  message: "What is your name?"
},
{
    type: "input",
    id: "idNumber",
    message: "id number?"
},
{
    type: "input",
    email: "emailProvided",
    message: "Enter your eamil",
},
{
    type: "input",
    office: "officeProvided",
    message: "What is your office number?",
}
])
.then(function(answers){
    name = answers.name;
    idNumber = answers.idNumber;
    emailProvided = answers.emailProvided;
   officeProvided = answers.officeProvided;
})


class Employee {
    constructor(name, id, title,) {
        this.name = name;
        this.id = id;
        this.title = title;
 getName(function(){
    return `Hi ${this.name}`
})


////set the id /////
 getId(function() {
     const id = 100;
     const employee2 = new Employee("Alice", id);
     expect(employee2.id) = (id);
 });

 ///set the email//// 
 getEmail  (function() {
     const email = "";
     const employee3 = new Employee('Alice', 1 , email);
     (employee3.email) = email 
 });

 getName( function() { 
    

 })
        
    }
}

//  Name for the Employee////
const employee1 = new Employee("Alice");
console.log(employee1);

  

   
  

