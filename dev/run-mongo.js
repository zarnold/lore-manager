require('dotenv').config()
const util = require('util');
const {exec} = require('child_process');


console.log("Execute")
exec('mongod --dbpath G:\\IA\\Data\\db', (err, stdout, stderr) => {
    if (err) {
        console.log(err)
        return;
    }
});


