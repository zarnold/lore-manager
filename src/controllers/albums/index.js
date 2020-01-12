
var express = require('express');
var router = express.Router;

const {create} = require('./create');
const {list} = require('./list');
const {get} = require('./get');
const {update} = require('./update');
const {remove} = require('./remove');


module.exports = (models, {config}) => {
    const api = router();

    api.post('/:title', create(models, {config}));    
    api.get('/', list(models, {config}));
    api.get('/:_id', get(models, {config}));
    api.patch('/:_id', update(models, {config}));
    api.delete('/:_id', remove(models, {config}));
    
    return api;
}