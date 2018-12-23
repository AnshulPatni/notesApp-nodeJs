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
    notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
    notes.getAll();
} else if(command === 'remove') {
    notes.removeNote(argv.title);
} else if(command === 'read') {
    notes.getNote(argv.title);
} else {
    console.log('Command not recognized.');
}