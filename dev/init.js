require('dotenv').config();
const mongo = require('mongodb').MongoClient;

const url = `mongodb://${process.env.DB_MONGO_DOMAIN}:${process.env.DB_MONGO_PORT}`;


mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        console.error(err)
        return
    }
    const db = client.db('toto-app-db');
    db.createUser({
        user: "jojo-la-frite",
        pwd: "bad-password",
        roles: [{ role: "userAdmin", db: "toto-app-db" }]
    })

});

