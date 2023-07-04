const matriculaCtrl = {};
const Aranceles = require("../models/Aranceles");
const TermConds = require("../models/TermConds");

matriculaCtrl.aranceles = async (req, res) => {
  const data = await Aranceles.find();
  res.json(data);
};

matriculaCtrl.termConds = async (req, res) => {
  const data = await TermConds.find();
  res.json(data);
};

module.exports = matriculaCtrl;
