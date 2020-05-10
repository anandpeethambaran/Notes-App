const validator = require('validator');
const chalk = require('chalk');

const command = process.argv[2];


console.log(process.argv);

if (command === "add") {
    console.log("This is to add a new note");
}
else if(command === "remove"){
    console.log("This is to remove a new note");
}
else {
    console.log("Another option")
}



