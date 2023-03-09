const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let matriculadosSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatoria"],
  },
  curso: {
    type: String,
    required: [true, "el curso es obligatoria"],
  },
  apellido: {
    type: String,
    required: [true, "el taller es obligatoria"],
  },
  idCurso: {
    type: String,
    required: [true, "el instrumento es obligatorio"],
  },
  dni: {
    type: String,
    required: [true, "el instrumento es obligatorio"],
  },
  legajo: {
    type: String,
    required: [true, "el instrumento es obligatorio"],
  },
});

module.exports = mongoose.model("Matriculados", matriculadosSchema);
