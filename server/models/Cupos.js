const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: [true, "El taller es obligatoria"],
  },
  curso: {
    type: String,
    required: [true, "el curso es obligatoria"],
  },
  cupo: {
    type: Number,
    required: [true, "el cupo es obligatorio"],
  },
});

module.exports = mongoose.model("Cupos", userSchema);
