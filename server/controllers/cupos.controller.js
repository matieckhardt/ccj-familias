const cuposCtrl = {};
const Cupos = require("../models/Cupos");

cuposCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

cuposCtrl.listTalleres = async (req, res) => {
  const cuposList = await Cupos.aggregate([
    {
      $group: {
        _id: "$name",
      },
    },
  ]);

  res.json(cuposList);
};

cuposCtrl.listCupos = async (req, res) => {
  const cuposList = await Cupos.find();

  res.json(cuposList);
};

cuposCtrl.findCurso = async (req, res) => {
  const cuposList = await Cupos.find(req.params);

  console.log(cuposList);
  res.json(cuposList);
};

cuposCtrl.createCupo = async (req, res, next) => {
  try {
    const userData = req.body;
    console.log(userData);
    const user = await Cupos.create(userData);
    return res
      .status(201)
      .json({ message: "Cupo created Succesfully", body: userData });
  } catch (error) {
    return console.log(error);
  }
};

cuposCtrl.deleteCupo = async (req, res, next) => {
  try {
    console.log(req.params);
    const cupo = await Cupos.deleteOne(req.params);
    return res
      .status(201)
      .json({ message: "Cupo deleted Succesfully", body: cupo });
  } catch (error) {
    return console.log(error);
  }
};

module.exports = cuposCtrl;
