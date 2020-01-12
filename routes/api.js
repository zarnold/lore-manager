var express = require('express');
var router = express.Router();

var usersRouter = require('./users');
var albumsRouter = require('./albums');




const LIST_OF_RESSOURCES = [
    {
        name : "users",
        router: usersRouter,
    },
    {
        name : "albums",
        router: usersRouter,
    }
]

// Load ressources
LIST_OF_RESSOURCES.forEach( ressource =>router.use(`/${ressource.name}`, ressource.router));


// and a generique one for info aPi
router.get('/', function (req, res, next) {

    const version = 1.0;
    const status = `ok`;
    const message= `Lore manager api`; 
    const listOfRessources = LIST_OF_RESSOURCES.map( el => `/${el.name}`)

    res.json({
        version,
        status,
        message,
        listOfRessources,
    })
});

module.exports = router;
