const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./test.js')

//console.log(getNotes());
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
       notes.addNote(argv.title, argv.body)
    }
    
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Print list',
    handler(argv){
        notes.listNotes(argv)
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type : 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse();