const fs=require('fs');

const validator=require('validator');
const chalk=require('chalk');


const util=require('./util');


// fs.writeFileSync('notes.txt','The first file');

// fs.appendFileSync('notes.txt',' Appending extra content');


// var outp=fs.readFileSync('notes.txt');

const email="anand";
console.log(validator.isEmail(email));

console.log(chalk.bold.blue("Success"));

console.log(util.getnotes());