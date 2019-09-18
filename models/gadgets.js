const { Schema, model } = require('mongoose');


const GadgetSchema = new Schema({
  name: String,
  release_date: Date,
  by_company: String,
  price: Number,
});

module.exports = model('Gadget', GadgetSchema);