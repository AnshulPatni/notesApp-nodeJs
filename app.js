console.log('Staring app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var res = notes.add(9, -2);
console.log(res);

// var user = os.userInfo();

// console.log(user);

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if(err) {
//         console.log('Unable to write to file');
//     }
// });