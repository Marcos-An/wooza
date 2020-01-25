const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true
  },
  Cargo: {
    type: String,
    required: true,
    trim: true
  },
  Projeto: {
    type: String,
    required: true,
    trim: true
  },
  Entrega: {
    type: String,
    required: true,
    trim: true
  },
  Image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('users', schema);
