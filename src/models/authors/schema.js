const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  name: {
    type: String,
    required: [true],
  },
  first_name:{
    type: String,
    required: [false]
  },
  pseudo: {
    type: String,
    required: [false]
  },
  nationality: {
    type: String
  },
  birthdate:{
    type: Date
  }

});

module.exports = { schema };