const alumnosCursosCtrl = {};
const Cursos = require("../models/alumnosCursos");

alumnosCursosCtrl.list = async (req, res) => {
  const userList = await Cursos.find();
  res.json(userList);
};

alumnosCursosCtrl.listCursos = async (req, res) => {
  const userList = await Cursos.find({ DNI: req.params });

  res.json(userList);
};

module.exports = alumnosCursosCtrl;
