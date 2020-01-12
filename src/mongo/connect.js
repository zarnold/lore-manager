//Import the mongoose module
var mongoose = require('mongoose');

var {Album} = require('../models/albums/model')


async function connectAndLoad() {
    var mongoDB = 'mongodb://lore-app:lore-app-password@127.0.0.1/lore-app-db';
    var db = await mongoose.connect(mongoDB, { useNewUrlParser: true });

    console.log(`### DATABASE : ${mongoose.STATES[mongoose.connection.readyState]}`);


}

connectAndLoad();
