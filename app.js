const fs=require('fs');


// fs.writeFileSync('notes.txt','The first file');

// fs.appendFileSync('notes.txt',' Appending extra content');


var outp=fs.readFileSync('notes.txt');

console.log(outp);