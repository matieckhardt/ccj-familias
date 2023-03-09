const matriCtrl = {};
const Alumnos = require("../models/Matriculados");

matriCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

matriCtrl.listAlumnos = async (req, res) => {
  const userList = await Alumnos.find(req.params);
  console.log(userList);

  res.json(userList);
};

matriCtrl.createAlumno = async (req, res, next) => {
  try {
    const userData = req.body;
    const user = await Alumnos.create(userData);
    return res
      .status(201)
      .json({ message: "User created Succesfully", body: userData });
  } catch (error) {
    return console.log(error);
  }
};

module.exports = matriCtrl;
