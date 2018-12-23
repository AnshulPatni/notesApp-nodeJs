const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
// console.log('Yargs', argv);
var command = argv._[0];
// console.log('Command: ', command);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    console.log('note:',note);
    if (!note) {
        console.log('Note title already in use.')
    } else {
        console.log('Note added.')
        notes.logNote(note);
    }

} else if(command === 'list') {
    
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));

} else if(command === 'remove') {

    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
    console.log(message);

} else if(command === 'read') {

    var note = notes.getNote(argv.title);
    console.log('note:',note);
    if (note) {
        console.log('Note found.')
        notes.logNote(note);
    } else {
        console.log('Note not found.')
    }

} else {
    console.log('Command not recognized.');
}