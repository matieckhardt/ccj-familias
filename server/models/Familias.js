const mongoose = require("mongoose");

// Define el esquema para los datos de los hijos
const ChildSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  matricula: { type: String, required: true },
  curso: { type: String, required: true },
  dni: { type: Number, required: true },
  fechaEgreso: { type: Date, required: true },
});

// Define el esquema para los datos del padre y la madre
const FamilySchema = new mongoose.Schema({
  padre: { type: String, required: true },
  apellidoMaternoP: { type: String, required: true },
  ocupacionP: { type: String, required: true },
  nacionalidadP: { type: String, required: true },
  dniP: { type: Number, required: true },
  fechaNacimientoP: { type: Date, required: true },
  domicilioP: { type: String, required: true },
  telefonoP: { type: String, required: true },
  empresaTrabajoP: { type: String, required: true },
  domicilioLaboralP: { type: String, required: true },
  telefonoLaboralP: { type: String, required: true },
  correoElectronicoP: { type: String, required: true },
  madre: { type: String, required: true },
  apellidoMaternoM: { type: String, required: true },
  ocupacionM: { type: String, required: true },
  fechaNacimientoM: { type: Date, required: true },
  domicilioM: { type: String, required: true },
  telefonoM: { type: String, required: true },
  empresaTrabajoM: { type: String, required: true },
  domicilioLaboralM: { type: String, required: true },
  telefonoLaboralM: { type: String, required: true },
  correoElectronicoM: { type: String, required: true },
  hijos: [ChildSchema], // Array de datos de los hijos
});

// Define el modelo basado en el esquema
const FamilytModel = mongoose.model("Familias", FamilySchema);

module.exports = FamilytModel;
