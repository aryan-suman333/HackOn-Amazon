const mongoose = require("mongoose");
const { Schema } = mongoose;

const sellerSchema = new Schema({
  username: String,
  passeord: String,
  certified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('seller', sellerSchema);