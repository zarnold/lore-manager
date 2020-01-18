const mongoose = require('mongoose');
const { schema } = require('./schema');


// HOOKS
schema.pre('save', function() {
  // Do some hings before savign a new album
  console.log('Trying to save a new author')
});



const Authors = mongoose.model('Authors', schema);
module.exports = { Authors };