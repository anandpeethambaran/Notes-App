const yarg = require('yargs')
const fs = require('fs')


const getNotes = () => {
    try{
        const notesData = fs.readFileSync('notes.json')
        const notesJSON = notesData.toString();
        return JSON.stringify(notesJSON);

    }catch(e){
        return []
    }
  
}

module.exports = {

    addNotes: (title, body, author) => {
        const allNotes = getNotes()
        console.log(allNotes);
    },
    removeNotes: () => {

    }
}