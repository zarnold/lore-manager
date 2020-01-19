const express = require('express');
const {errorHandler} = require('../middleware');


// List your model

const {Albums} = require('../models/albums');
const {Authors} = require('../models/authors');

// List your controllers 

const albums = require('../controllers/albums');
const authors = require('../controllers/authors');

// put allthe models in one Var

const models = {Albums, Authors};

const routersInit = config => {

    const router= express();

    // Register all your routes

    router.use('/albums', albums(models, {config}));
    router.use('/authors', authors(models, {config}));
    
    router.use(errorHandler);
    return router;

}


module.exports = routersInit;