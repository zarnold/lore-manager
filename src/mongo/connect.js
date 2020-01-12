//Import the mongoose module
var mongoose = require('mongoose');

async function connect() {

    console.log(" Connecting to mongo db app");
    var mongoDB = 'mongodb://lore-app:lore-app-password@127.0.0.1/lore-app-db';
    var db = await mongoose.connect(mongoDB, { useNewUrlParser: true });

    console.log(`### DATABASE : ${mongoose.STATES[mongoose.connection.readyState]}`);


}

module.exports = {connect};

