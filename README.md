
This CLI application generates and saves an html file based on the user input.

When the application starts the user will be prompted to input the details of a team. The team can have only one manager and any combination of engineers and interns. First the user will enter manager's details, and then the details of all the team members.

After manager's details are input , the user can choose to populate details for new team member or exit the prompt. After the user exits the prompt, the html file will be generated in the /output folder.

The system will get the array of user answers, transform it into array of objects of respective classes (Manager, Engineer or Intern), and then generate an html based on such team array.

The modules that were used in this application were npm inquirer. The folders that you will see in this project is a lib, template, output, package-lock.json, and test. In the sub folder of the output folder, there is manager, employee, intern,engineer, and build-team.js files. In the template folder there is a manager, employee, intern, and engineer.html.

Challenges:
The challenges that I came across while doing this project is rendering all the html files together in my build-team.js. When you look into my employee,engineer, inter, and manager.js files, I commented out the inquirer.prompt for each position. Then I created a build-team.js and put all the quesitions in one inquirer.prompt. However, when I ran the code in node.js, it keeps saying that in the manager.js file in line 19, the object is not constructed. I am still figuring out what is casuing this syntax error. 


