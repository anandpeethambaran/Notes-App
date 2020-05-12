const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

//notes app using command line argument

//using yargs we are creating different options as commands



//creating add command
yargs.command({
    command:'add',
    describe:'Add a new Note',
    handler: ()=>{
        console.log('Adding a new note')
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:()=>{
        console.log('removing a note')
    }
})

yargs.parse();


// if (command === "add") {
//     console.log("This is to add a new note");
// }
// else if (command === "remove") {
//     console.log("This is to remove a new note");
// }
// else {
//     console.log("Another option")
// }



