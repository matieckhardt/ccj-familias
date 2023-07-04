const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let termcondsSchema = new Schema({
  orden: {
    type: Number,
  },
  termsCon: {
    type: String,
  },
});

module.exports = mongoose.model("termconds", termcondsSchema);
