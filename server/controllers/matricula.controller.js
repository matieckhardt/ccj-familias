const matriculaCtrl = {};
const Aranceles = require("../models/Aranceles");
const TermConds = require("../models/Termconds");
const MatriculaValores = require("../models/MatriculaValores");

matriculaCtrl.aranceles = async (req, res) => {
  const data = await Aranceles.find();
  res.json(data);
};

matriculaCtrl.termConds = async (req, res) => {
  const data = await TermConds.find();
  res.json(data);
};

matriculaCtrl.valoresMatri = async (req, res) => {
  const data = await MatriculaValores.find();
  res.json(data);
};

module.exports = matriculaCtrl;
