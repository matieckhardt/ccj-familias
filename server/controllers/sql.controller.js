const sqlCtrl = {};

const Familias = require("../models/Sql/Familias");
const Legajos = require("../models/Sql/Legajos");

sqlCtrl.getAll = async (req, res) => {
  try {
    const padres = await Familias.findAll();
    res.json(padres);
  } catch (error) {
    return console.log(error);
  }
};

sqlCtrl.getFamilia = async (req, res) => {
  try {
    const padres = await Familias.findAll({
      where: { AFIP_MAIL_FAM: req.params.mail },
    });
    console.log(req.params.mail);
    res.json(padres);
  } catch (error) {
    return console.log(error);
  }
};

sqlCtrl.getLegajosAll = async (req, res) => {
  try {
    const padres = await Legajos.findAll({ raw: true });
    const filterEgresados = padres.filter((e) => e.FECHA_EGR1 === null);
    console.log("donde pija estas", filterEgresados);
    res.json(filterEgresados);
  } catch (error) {
    return console.log(error);
  }
};

sqlCtrl.getLegajos = async (req, res) => {
  try {
    console.log("el params del orto", req.params.CODFAM);
    const padres = await Legajos.findAll({
      where: { CODFAM: req.params.CODFAM },
      raw: true,
    });
    console.log(padres);
    res.json(padres);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = sqlCtrl;
