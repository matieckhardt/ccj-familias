const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  nombre: {
    type: Object,
    unique: true,
    required: [true, "El nombre es obligatorio"],
  },
  curso: {
    type: String,
    required: [true, "El curso es obligatoria"],
  },
  taller: {
    type: String,
    required: [true, "El nivel es obligatoria"],
  },
  instrumento: {
    type: String,
  },
});

module.exports = mongoose.model("Ajedrez", userSchema);
