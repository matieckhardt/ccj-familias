const mongoose = require("mongoose");

// Define el esquema para los datos de los hijos
const ChildSchema = new mongoose.Schema({
  NOMBRE: String,
  APELLIDO: String,
  MATRIUCULA: String,
  CURSO: String,
  DNI: Number,
  FECHA_NAC: Date,
  LEYENL2: String,
  LEYENL3: String,
  TURNO: String,
  CODFAM: Number,
  PLANCUO: String,
});

// Define el esquema para los datos del padre y la madre
const FamilySchema = new mongoose.Schema({
  CODFAM: String,
  CODPOS: String,
  CTA_BAN: String,
  CODPOS_P: String,
  CODPOS_TP: String,
  CODPOS_M: String,
  CODPOS_TM: String,
  LEYENF1: String,
  LEYENF2: String,
  LEYENF3: String,
  VIVE_DOMP: String,
  VIVE_TELP: String,
  TRABAJOP: String,
  TRAB_DOMP: String,
  TRAB_TELP: String,
  VIVE_DOMM: String,
  VIVE_TELM: String,
  TRABAJOM: String,
  TRAB_DOMM: String,
  TRAB_TELM: String,
  DIRECCION: String,
  SISMED: String,
  LUGNAC_P: String,
  LOCALIDAD_P: String,
  LOCALIDAD_TP: String,
  LUGNAC_M: String,
  LOCALIDAD_M: String,
  LOCALIDAD_TM: String,
  APE_ALUMNO: String,
  PADRE: String,
  APE_MAT_P: String,
  MADRE: String,
  APE_MAT_M: String,
  APECATAL: String,
  RESPONS: String,
  LOCALIDAD: String,
  BARRIO: String,
  TELEFONO: String,
  TELEFONOR: String,
  AFIP_CALLE: String,
  SUC_BAN: String,
  PISO_P: String,
  DEPTO_P: String,
  PISO_TP: String,
  DEPTO_TP: String,
  PISO_M: String,
  DEPTO_M: String,
  PISO_TM: String,
  DEPTO_TM: String,
  PISO: String,
  DEPTO: String,
  AFIP_PISO: String,
  AFIP_DEPTO: String,
  NRO_CTA: String,
  OCUPAD: String,
  OCUMAD: String,
  NACIONAL: String,
  NACIONALM: String,
  CELULAR_P: String,
  CELULAR_M: String,
  PAR_BAN: String,
  BANELCO: String,
  PASAPORTE_P: String,
  CONTRASENIA_P: String,
  PASAPORTE_M: String,
  CONTRASENIA_M: String,
  CUIT: String,
  MAILPADREP: String,
  MAILMADREP: String,
  MAILEMPREP: String,
  MAILEMPREM: String,
  AFIP_NOMBRE: String,
  AFIP_MAIL_FAM: String,
  MAIL_WEB_SEC: String,
  RESP_WEB_SEC: String,
  VIVE_P: String,
  VIVE_M: String,
  PAGARECA: String,
  CARTA: String,
  BLOQ_COB: String,
  TCA_BAN: String,
  TIPO_DNI_P: Number,
  TIPO_DNI_M: Number,
  CATEGORIA: Number,
  USA_MAILPADREP: Number,
  USA_MAILMADREP: Number,
  USA_MAILEMPREP: Number,
  USA_MAILEMPREM: Number,
  TIPO_CTA: Number,
  TIPO_DOC_RESP: Number,
  RESP_AFIP: Number,
  MAIL_PREDEF: Number,
  AFIP_TIPODOC: Number,
  EMITE_MAIL: Number,
  DEBITO_AUT: Number,
  TIPODOC_WEB_SEC: Number,
  ESTAVIVO_P: Number,
  ESTAVIVO_M: Number,
  RESP_PADRE: Number,
  RESP_MADRE: Number,
  NRO_P: { type: Number, unsigned: true },
  NRO_TP: { type: Number, unsigned: true },
  NRO_M: { type: Number, unsigned: true },
  NRO_TM: { type: Number, unsigned: true },
  NRO: { type: Number, unsigned: true },
  AFIP_NRO: { type: Number, unsigned: true },
  AFIP_LOCALIDAD: { type: Number, unsigned: true },
  DNI_P: { type: Number },
  DNI_M: { type: Number },
  TOTAL_ANU: { type: Number },
  FECHA_NP: { type: Date },
  FECHA_NM: { type: Date },
  FECHA_REC: { type: Date },
  NRO_DOC_RESP: { type: Number },
  AFIP_NRODOC: { type: Number },
  NRODOC_WEB_SEC: { type: Number },
  hijos: [ChildSchema], // Array de datos de los hijos
});

// Define el modelo basado en el esquema
const FamilytModel = mongoose.model("familias", FamilySchema);

module.exports = FamilytModel;
