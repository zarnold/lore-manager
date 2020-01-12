const express = require('express');
const {errorHandler} = require('../middleware');


// List your model

const {Albums} = require('../models/albums');

// List your controllers 

const albums = require('../controllers/albums');

// put allthe models in one Var

const models = {Albums};

const routersInit = config => {

    const router= express();

    // Register all your routes

    router.use('/albums', albums(models, {config}));
    
    router.use(errorHandler);
    return router;

}


module.exports = routersInit;