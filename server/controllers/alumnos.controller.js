const alumnosCtrl = {};
const Alumnos = require("../models/Alumnos");
const Cursos = require("../models/alumnosCursos");

alumnosCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

alumnosCtrl.listAlumnos = async (req, res) => {
  const alumnos = await Alumnos.find(req.params);

  res.json(alumnos);
};

alumnosCtrl.tallerInscripto = async (req, res) => {
  const registrados = await Alumnos.find(req.params);
  res.json(registrados);
};
alumnosCtrl.instrumentosAll = async (req, res) => {
  const registrados = await Alumnos.find();
  res.json(registrados);
};

alumnosCtrl.createAlumno = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await Alumnos.create(userData);
    return res
      .status(201)
      .json({ message: "Alumno inscripto correctamente", body: userData });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "El alumno ya esta registrado", error });
  }
};

module.exports = alumnosCtrl;
