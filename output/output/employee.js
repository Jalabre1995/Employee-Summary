const
const inquirer = require('inquirer')

    ////////Questions to ask the user////
  
//     inquirer.prompt([{
    
//      type: "input",
//      name: "name",
//      message: "What is your name?"
//    },
//    {
//        type: "input",
//        name: "role",
//        message: "what is your occupation ?"


//    },
//    {
//        type: "input",
//        name: "idNumber",
//        message: "What is your id number?"
//    },
//    {
//        type: "input",
//        name: "emailProvided",
//        message: "What is your email?",
//    },
//    {
//        type: "input",
//        name: "officeProvided",
//        message: "What is your office number?",
//    }
//    ])
//    .then(function(answers){
//        name = answers.name;
//        idNumber = answers.idNumber;
//        emailProvided = answers.emailProvided;
//       officeProvided = answers.officeProvided;
//       role = answers.role; 
//    })
  
  /////constructing the Employee class////
class Employee {
constructor(name, id, email) {
 if (!name) {
   throw new Error("You are missing the name.");
  }
  if (!id) {
   throw new Error("You are missing the Id. ");
   
 }
 if (!email) {
  throw new Error("You are missing the title.");
 }
 this.name = name;
 this.id = id;
 this.email = email
 this.role


}
///////getName function/////
getName() {
    return`Your Name is ${this.name}`; 
}

    
   ////set the id /////
   getId(id) {
       return `Your id number is ${this.id}`;
   }
    ///set the email//// 
    getEmail(){
        return`Your eamil is ${this.email}`;
    }

    ///set the Role///
    getRole() {
        return `Your role is ${this.role}`;
    }



    }

    module.exports = Employee;
 
          

  
    
  
     
    
  
  

