const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let arancelesSchema = new Schema({
  kinder1: {
    type: Number,
  },
  kinder2: {
    type: Number,
  },
  kinder3: {
    type: Number,
  },
  primario1: {
    type: Number,
  },
  primario2: {
    type: Number,
  },
  secundario: {
    type: Number,
  },
  formaPago: {
    type: String,
  },
});

module.exports = mongoose.model("aranceles", arancelesSchema);
