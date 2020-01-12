//Import the mongoose module
var mongoose = require('mongoose');

async function connect() {


    var mongoDB = 'mongodb://lore-app:lore-app-password@127.0.0.1/lore-app-db';
    var db = await mongoose.connect(mongoDB, { useNewUrlParser: true });


}

module.exports = {connect};

