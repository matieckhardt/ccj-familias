const tallerCtrl = {};
const Talleres = require("../models/Talleres");
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

  console.log(tallerList);
  res.json(tallerList);
};

tallerCtrl.listTaller = async (req, res) => {
  const tallerList = await Talleres.find();

  console.log(tallerList);
  res.json(tallerList);
};

tallerCtrl.registrados = async (req, res) => {
  console.log(req.params);
  const registrados = await Alumnos.find(req.params);

  console.log("registrados", registrados);
  res.json(registrados);
};

tallerCtrl.registradosAll = async (req, res) => {
  console.log(req.params);
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

  console.log("registrados", registrados);
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
