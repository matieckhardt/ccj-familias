const { DataTypes } = require("sequelize");

const sequelize = require("./connection");

const RegistroPadresSchema = {
  // Model attributes are defined here

  CODFAM: {
    type: DataTypes.STRING(9),
    allowNull: false,
    primaryKey: true,
  },
  PADRE: {
    type: DataTypes.STRING,
  },
  APE_MAT_P: {
    type: DataTypes.STRING,
  },
  OCUPAD: {
    type: DataTypes.STRING,
  },
  NACIONAL: {
    type: DataTypes.STRING,
  },
  DNI_P: {
    type: DataTypes.NUMBER,
  },
  TIPO_DNI_P: {
    type: DataTypes.NUMBER,
  },
  FECHA_NP: {
    type: DataTypes.STRING,
  },
  VIVE_P: {
    type: DataTypes.STRING,
  },
  VIVE_DOMP: {
    type: DataTypes.STRING,
  },
  VIVE_TELP: {
    type: DataTypes.STRING,
  },
  TRABAJOP: {
    type: DataTypes.STRING,
  },
  TRAB_DOMP: {
    type: DataTypes.STRING,
  },
  TRAB_TELP: {
    type: DataTypes.STRING,
  },
  MADRE: {
    type: DataTypes.STRING,
  },
  APE_MAT_M: {
    type: DataTypes.STRING,
  },
  OCUMAD: {
    type: DataTypes.STRING,
  },
  FECHA_NM: {
    type: DataTypes.STRING,
  },
  VIVE_M: {
    type: DataTypes.STRING,
  },
  VIVE_DOMM: {
    type: DataTypes.STRING,
  },
  VIVE_TELM: {
    type: DataTypes.STRING,
  },
  TRABAJOM: {
    type: DataTypes.STRING,
  },
  TRAB_DOMM: {
    type: DataTypes.STRING,
  },
  TRAB_TELM: {
    type: DataTypes.STRING,
  },
  APECATAL: {
    type: DataTypes.STRING,
  },
  NACIONALM: {
    type: DataTypes.STRING,
  },
  DNI_M: {
    type: DataTypes.NUMBER,
  },
  TIPO_DNI_M: {
    type: DataTypes.NUMBER,
  },
  RESPONS: {
    type: DataTypes.STRING,
  },
  CUIT: {
    type: DataTypes.STRING,
  },
  CATEGORIA: {
    type: DataTypes.NUMBER,
  },
  DIRECCION: {
    type: DataTypes.STRING,
  },
  LOCALIDAD: {
    type: DataTypes.STRING,
  },
  BARRIO: {
    type: DataTypes.STRING,
  },
  CODPOS: {
    type: DataTypes.STRING,
  },
  TELEFONO: {
    type: DataTypes.STRING,
  },
  TELEFONOR: {
    type: DataTypes.STRING,
  },
  SISMED: {
    type: DataTypes.STRING,
  },
  PAGARECA: {
    type: DataTypes.STRING,
  },
  FECHA_REC: {
    type: DataTypes.STRING,
  },
  CARTA: {
    type: DataTypes.STRING,
  },
  BLOQ_COB: {
    type: DataTypes.STRING,
  },
  SUC_BAN: {
    type: DataTypes.STRING,
  },
  PAR_BAN: {
    type: DataTypes.STRING,
  },
  TCA_BAN: {
    type: DataTypes.STRING,
  },
  CTA_BAN: {
    type: DataTypes.STRING,
  },
  APE_ALUMNO: {
    type: DataTypes.STRING,
  },
  TOTAL_ANU: {
    type: DataTypes.STRING,
  },
  MAILPADREP: {
    type: DataTypes.STRING,
  },
  USA_MAILPADREP: {
    type: DataTypes.NUMBER,
  },
  MAILMADREP: {
    type: DataTypes.STRING,
  },
  USA_MAILMADREP: {
    type: DataTypes.NUMBER,
  },
  MAILEMPREP: {
    type: DataTypes.STRING,
  },
  USA_MAILEMPREP: {
    type: DataTypes.NUMBER,
  },
  MAILEMPREM: {
    type: DataTypes.STRING,
  },
  USA_MAILEMPREM: {
    type: DataTypes.NUMBER,
  },
  LEYENF1: {
    type: DataTypes.STRING,
  },
  LEYENF2: {
    type: DataTypes.STRING,
  },
  LEYENF3: {
    type: DataTypes.STRING,
  },
  NRO_CTA: {
    type: DataTypes.STRING,
  },
  TIPO_CTA: {
    type: DataTypes.STRING,
  },
  BANELCO: {
    type: DataTypes.STRING,
  },
  ESTAVIVO_P: {
    type: DataTypes.NUMBER,
  },
  PASAPORTE_P: {
    type: DataTypes.STRING,
  },
  LUGNAC_P: {
    type: DataTypes.STRING,
  },
  NRO_P: {
    type: DataTypes.NUMBER,
  },
  PISO_P: {
    type: DataTypes.STRING,
  },
  DEPTO_P: {
    type: DataTypes.STRING,
  },
  LOCALIDAD_P: {
    type: DataTypes.STRING,
  },
  CODPOS_P: {
    type: DataTypes.STRING,
  },
  CONTRASENIA_P: {
    type: DataTypes.STRING,
  },
  CELULAR_P: {
    type: DataTypes.STRING,
  },
  NRO_TP: {
    type: DataTypes.NUMBER,
  },
  PISO_TP: {
    type: DataTypes.STRING,
  },
  DEPTO_TP: {
    type: DataTypes.STRING,
  },
  LOCALIDAD_TP: {
    type: DataTypes.STRING,
  },
  CODPOS_TP: {
    type: DataTypes.STRING,
  },
  ESTAVIVO_M: {
    type: DataTypes.NUMBER,
  },
  PASAPORTE_M: {
    type: DataTypes.STRING,
  },
  LUGNAC_M: {
    type: DataTypes.STRING,
  },
  NRO_M: {
    type: DataTypes.NUMBER,
  },
  PISO_M: {
    type: DataTypes.STRING,
  },
  DEPTO_M: {
    type: DataTypes.STRING,
  },
  LOCALIDAD_M: {
    type: DataTypes.STRING,
  },
  CODPOS_M: {
    type: DataTypes.STRING,
  },
  CONTRASENIA_M: {
    type: DataTypes.STRING,
  },
  CELULAR_M: {
    type: DataTypes.STRING,
  },
  NRO_TM: {
    type: DataTypes.NUMBER,
  },
  PISO_TM: {
    type: DataTypes.STRING,
  },
  DEPTO_TM: {
    type: DataTypes.STRING,
  },
  LOCALIDAD_TM: {
    type: DataTypes.STRING,
  },
  CODPOS_TM: {
    type: DataTypes.STRING,
  },
  NRO: {
    type: DataTypes.NUMBER,
  },
  PISO: {
    type: DataTypes.STRING,
  },
  DEPTO: {
    type: DataTypes.STRING,
  },
  TIPO_DOC_RESP: {
    type: DataTypes.NUMBER,
  },
  NRO_DOC_RESP: {
    type: DataTypes.NUMBER,
  },
  RESP_AFIP: {
    type: DataTypes.NUMBER,
  },
  MAIL_PREDEF: {
    type: DataTypes.STRING,
  },
  RESP_PADRE: {
    type: DataTypes.NUMBER,
  },
  RESP_MADRE: {
    type: DataTypes.NUMBER,
  },
  AFIP_NOMBRE: {
    type: DataTypes.STRING,
  },
  AFIP_CALLE: {
    type: DataTypes.STRING,
  },
  AFIP_NRO: {
    type: DataTypes.NUMBER,
  },
  AFIP_PISO: {
    type: DataTypes.STRING,
  },
  AFIP_DEPTO: {
    type: DataTypes.STRING,
  },
  AFIP_LOCALIDAD: {
    type: DataTypes.NUMBER,
  },
  AFIP_TIPODOC: {
    type: DataTypes.NUMBER,
  },
  AFIP_NRODOC: {
    type: DataTypes.NUMBER,
  },
  AFIP_MAIL_FAM: {
    type: DataTypes.STRING,
  },
  EMITE_MAIL: {
    type: DataTypes.NUMBER,
  },
  DEBITO_AUT: {
    type: DataTypes.NUMBER,
  },
};

console.log("Using model padres with mysql");

const Familias = sequelize.define("Familias", RegistroPadresSchema, {
  tableName: "familia",
});

module.exports = Familias;
