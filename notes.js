const yarg = require('yargs')
const fs = require('fs')


const getNotes = () => {
    try{
        const notesData = fs.readFileSync('notes.json')
        const notesJSON = notesData.toString();
        return JSON.parse(notesJSON);

    }catch(e){
        return []
    }
}

const saveNotes = (notes)=>{
    const dataJSON=JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}


module.exports = {

    addNotes: (title, body, author) => {
        const allNotes = getNotes()

        const duplicate = allNotes.filter((note)=>{
            return note.title === title
        })

        if(duplicate.length ===0){
            allNotes.push({
                title:title,
                body:body,
                author:author
            })
        saveNotes(allNotes)
        console.log('adding new notes');
        }
        else{
            console.log('note title already taken')
        }
       
        console.log(allNotes);
    },
    removeNotes: () => {

    }
}