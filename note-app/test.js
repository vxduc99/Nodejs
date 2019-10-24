const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return 'Anh yeu em Sen a <3'
}

const addNote = function(title, body){
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })


    //ES6
    //const duplicateNotes = notes.filter((note)=> note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)

    if(duplicateNote === undefined)// c1 :if ( duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
       
        saveNotes(notes)
        console.log('New note added!');
    }
    else{
        console.log('Note title taken');
    }
}



const removeNote = (title) => {
    const notes = loadNotes();
    const dataArray = notes.filter((note) => note.title !== title)

    if(notes.lenght > dataArray.lenght){
        saveNotes(dataArray);
        console.log(chalk.green('Note remove'))
    }
    else{
        console.log(chalk.bgRed('Note a found'));
    }


}

const listNotes = ()=>{
    const notes = loadNotes()

    console.log(chalk.green.inverse('Your Note'))

    notes.forEach( (note) => {
        console.log(note.title, note.body)
    });
}

    debugger
const readNotes = (title)=>{
    const notes = loadNotes()
    const duplicateNote = notes.find( (note) => note.title === title)
    if(duplicateNote)
    {
        console.log(chalk.green.inverse(duplicateNote.title))
        console.log(duplicateNote.body)
    }
    else{
        console.log(chalk.red("Can't find element"))
    }
}

const saveNotes = (notes) => {
    const dataJSON =  JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON);

}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);

        
    }catch(err){
        return []
    }

}





// module.exports khai báo để có thể qua file khác đọc đc
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}
