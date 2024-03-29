const tallerCtrl = {};
const Ajedrez = require("../models/Ajedrez");
const Alumnos = require("../models/Alumnos");

tallerCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

tallerCtrl.listTalleres = async (req, res) => {
  const tallerList = await Talleres.aggregate([
    {
      $group: {
        _id: "$name",
      },
    },
  ]);

  res.json(tallerList);
};

tallerCtrl.listTaller = async (req, res) => {
  const tallerList = await Talleres.find();

  res.json(tallerList);
};

tallerCtrl.registrados = async (req, res) => {
  console.log(req.params);
  const registrados = await Alumnos.find(req.params);

  res.json(registrados);
};

tallerCtrl.registradosAll = async (req, res) => {
  console.log(req.params.curso);
  console.log(req.params.taller);

  const registrados = await Alumnos.aggregate([
    {
      $match: {
        curso: req.params.curso,
      },
    },
    {
      $match: {
        taller: req.params.taller,
      },
    },
  ]);

  res.json(registrados);
};

tallerCtrl.registradosAjedrez = async (req, res) => {
  const registrados = await Ajedrez.aggregate([
    {
      $match: {
        curso: req.params.curso,
      },
    },
    {
      $match: {
        taller: "Ajedrez",
      },
    },
  ]);
  res.json(registrados);
};

tallerCtrl.createTaller = async (req, res, next) => {
  try {
    const userData = req.body;
    console.log(userData);
    const user = await Talleres.create(userData);
    return res
      .status(201)
      .json({ message: "taller created Succesfully", body: userData });
  } catch (error) {
    return console.log(error);
  }
};

module.exports = tallerCtrl;
