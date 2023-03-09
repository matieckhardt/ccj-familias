const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let alumnosCursosSchema = new Schema({
  ALUMNO: {
    type: String,
  },
  CURSO: {
    type: String,
  },
  DNI: {
    type: Number,
  },
});

module.exports = mongoose.model("alumnosCursos", alumnosCursosSchema);
