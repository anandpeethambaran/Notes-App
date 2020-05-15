const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');


const notes=require('./notes');

//notes app using command line argument

//using yargs we are creating different options as commands



//creating add command
yargs.command({
    command:'add',
    describe:'Add a new Note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'note body',
            demandOption:true,
            type:'string'
        },
        author:{
            describe:'Autor Name',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
       notes.addNotes(argv.title,argv.body,argv.author);
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.removeNotes(argv.title);
    }
})


yargs.command({
    command:'list',
    describe:'list all notes',
    handler:(argv)=>{
        notes.listNotes();
    }
})

yargs.command({
    command:'read',
    describe:'read a note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readNote(argv.title);
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



