const mhgCtrl = {};
const Mhg = require("../models/mhgDatos");

mhgCtrl.listData = async (req, res) => {
  const dataList = await Mhg.find();
  res.json(dataList);
};

mhgCtrl.findData = async (req, res) => {
  const data = await Mhg.find(req.params);
  console.log(data);

  res.json(data);
};

module.exports = mhgCtrl;
