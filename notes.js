const yarg = require('yargs')
const fs = require('fs')
const chalk = require('chalk');


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

        //another way to improve speed
        // const dup = allNote.find((note)=>{
        //     return note.title === title
        // })

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
    removeNotes: (title) => {
        const existingnotes=getNotes();

        const notesRE=existingnotes.filter((note)=>{
            return note.title!==title
        })

        if(notesRE.length<existingnotes.length){
            saveNotes(notesRE)
            console.log(chalk.green.inverse('Note removed'))
        }else{
            console.log(chalk.red.inverse('No notes available'))
        }
    },
    listNotes:()=>{
        const existingnotes=getNotes();
        console.log(chalk.inverse('Your Notes'))

        existingnotes.forEach(element => {
            console.log('Title : ', element.title, ', Body : ',element.body);
        });
    },
    readNote:(title)=>{

        const existingnotes=getNotes();

        const note=existingnotes.find((note)=>{
            return note.title === title;
        })

        if(note){
            console.log(chalk.inverse('Title : ',note.title));
            console.log(chalk.inverse('Body : ',note.body));
        }
        else{
            console.log(chalk.red.inverse('No note found'))
        }

    }
}