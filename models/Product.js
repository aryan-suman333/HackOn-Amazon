const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productname: String,
  seller: String,
  image: String,
  rating: {
    type: Number,
    default: 0
  },
  category: String,
  price: Number
});

module.exports = mongoose.model('product', productSchema);