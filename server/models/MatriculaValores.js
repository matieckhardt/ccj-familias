const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let MatriculaValoresSchema = new Schema({
  nivel: {
    type: String,
  },
  bonif: {
    type: String,
  },
  contado: {
    type: Number,
  },
  cuotas: {
    type: Number,
  },
  tipoFamilia: {
    type: Boolean,
  },
});

module.exports = mongoose.model("matriculavalores", MatriculaValoresSchema);
