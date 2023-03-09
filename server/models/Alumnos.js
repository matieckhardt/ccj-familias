const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let alumnosSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatoria"],
      unique: true,
    },
    curso: {
      type: String,
      required: [true, "el curso es obligatoria"],
    },
    taller: {
      type: String,
      required: [true, "el taller es obligatoria"],
    },
    instrumento: {
      type: String,
      required: [true, "el instrumento es obligatorio"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("instrumentos", alumnosSchema);
