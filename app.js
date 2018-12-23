console.log('Staring app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
console.log('Yargs', argv);
var command = argv._[0];
console.log('Command: ', command);

if(command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    console.log('note:',note);
    if (!note) {
        console.log('Note title already in use.')
    } else {
        console.log('Note added.')
        console.log('---');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
    console.log(message);
} else if(command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('Command not recognized.');
}