const util = require('util');
const exec = require('child_process');

var spawn = require('child_process').spawn;
console.log("Launching mongo")
spawn('node', ['dev/run-mongo.js'], {
    stdio: 'ignore',
    detached: true
}).unref();