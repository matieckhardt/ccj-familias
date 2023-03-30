const ajedrezCtrl = {};
const Ajedrez = require("../models/Ajedrez");

alumnosCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

alumnosCtrl.listAlumnos = async (req, res) => {
  const alumnos = await Alumnos.find(req.params);

  console.log(alumnos);
  res.json(alumnos);
};

alumnosCtrl.tallerInscripto = async (req, res) => {
  console.log("alumno", req.params);
  const registrados = await Alumnos.find(req.params);

  console.log("Alumnos Inscriptos", registrados);
  res.json(registrados);
};

alumnosCtrl.ajedrezInscripto = async (req, res) => {
  console.log("alumno", req.params);
  const registrados = await Ajedrez.find(req.params);

  console.log("Alumnos Inscriptos", registrados);
  res.json(registrados);
};

alumnosCtrl.createAlumno = async (req, res, next) => {
  try {
    const userData = req.body;
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
