const ajedrezCtrl = {};
const Ajedrez = require("../models/Ajedrez");
const Alumnos = require("../models/Alumnos");
const Cursos = require("../models/alumnosCursos");

ajedrezCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

ajedrezCtrl.listAlumnos = async (req, res) => {
  const alumnos = await Alumnos.find(req.params);

  console.log(alumnos);
  res.json(alumnos);
};

ajedrezCtrl.ajedrezInscripto = async (req, res) => {
  const registrados = await Ajedrez.find(req.params);
  res.json(registrados);
};
ajedrezCtrl.ajedrezAll = async (req, res) => {
  const registrados = await Ajedrez.find();
  res.json(registrados);
};

ajedrezCtrl.createAlumno = async (req, res, next) => {
  try {
    const userData = req.body;
    console.log(userData);
    const user = await Ajedrez.create(userData);
    return res
      .status(201)
      .json({ message: "Alumno inscripto correctamente", body: userData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "El alumno ya esta registrado", error });
  }
};

module.exports = ajedrezCtrl;
