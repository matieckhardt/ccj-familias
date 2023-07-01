const familyCtrl = {};
const FamilyModel = require("../models/Familias");

familyCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

familyCtrl.listFamilies = async (req, res) => {
  try {
    const families = await FamilyModel.find();
    res.json(families);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las familias", error });
  }
};

familyCtrl.getFamilyByDNI = async (req, res) => {
  const { dni } = req.params;

  try {
    const family = await FamilyModel.findOne({ dniP: dni });
    if (family) {
      res.json(family);
    } else {
      res.status(404).json({ message: "Familia no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la familia", error });
  }
};

familyCtrl.createOrUpdateFamily = async (req, res) => {
  const { dniP } = req.body;

  try {
    let family = await FamilyModel.findOne({ dniP });

    if (!family) {
      // Si no existe la familia, se crea un nuevo documento
      family = await FamilyModel.create(req.body);
      return res
        .status(201)
        .json({ message: "Familia creada exitosamente", family });
    }

    // Actualizar las propiedades existentes en el documento
    Object.assign(family, req.body);
    await family.save();

    res.json({ message: "Familia actualizada exitosamente", family });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear o actualizar la familia", error });
  }
};

module.exports = familyCtrl;
