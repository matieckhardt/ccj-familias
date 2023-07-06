const { DataTypes } = require("sequelize");

const sequelize = require("./connection");

const LegajosSchema = {
  CODFAM: {
    type: DataTypes.STRING(9),
    allowNull: false,
    primaryKey: true,
  },
  NOMBRE: {
    type: DataTypes.STRING,
  },
  APELLIDO: {
    type: DataTypes.STRING,
  },
  MATRICULA: {
    type: DataTypes.STRING,
  },
  CURSO: {
    type: DataTypes.STRING,
  },
  DNI: {
    type: DataTypes.STRING,
  },
  FECHA_EGR1: {
    type: DataTypes.DATE,
  },
  LEYENL2: {
    type: DataTypes.STRING,
  },
  LEYENL3: {
    type: DataTypes.STRING,
  },
  TURNO: {
    type: DataTypes.STRING,
  },
  PLANCUO: {
    type: DataTypes.STRING,
  },
};

console.log("Using model Legajos with mysql");

const Legajos = sequelize.define("Legajos", LegajosSchema, {
  tableName: "legajos",
});

module.exports = Legajos;
