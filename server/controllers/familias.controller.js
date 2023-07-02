const familyCtrl = {};
const FamilyModel = require("../models/Sql/Familias");

familyCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

familyCtrl.listFamilies = async (req, res) => {
  try {
    const families = await FamilyModel.findAll();
    res.json(families);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las familias", error });
  }
};

familyCtrl.getFamilyByDNI = async (req, res) => {
  const { dni } = req.params;

  try {
    const family = await FamilyModel.findOne({ where: { DNI_P: dni } });
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
  const { DNI_P } = req.body;

  try {
    let family = await FamilyModel.findOne({ where: { DNI_P } });

    if (!family) {
      // Si no existe la familia, se crea un nuevo registro
      family = await FamilyModel.create(req.body);
      return res
        .status(201)
        .json({ message: "Familia creada exitosamente", family });
    }

    // Actualizar las propiedades existentes en el registro
    await FamilyModel.update(req.body, { where: { DNI_P } });

    res.json({ message: "Familia actualizada exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear o actualizar la familia", error });
  }
};

module.exports = familyCtrl;
