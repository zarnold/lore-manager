const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const schema = new Schema({
  title: {
    type: String,
    required: [true],
  },
  description: {
    type: String,
    required: [false],
  },
  authorId: {
    type: ObjectId,
    ref: 'Author',
  },
  releaseDate: {
    type: Date,
  },
  pageCount: {
      type: Number,      
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    required: [true],
  },
  createdBy: {
    type: ObjectId,
  }
});

module.exports = { schema };