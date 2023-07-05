const familyCtrl = {};
const FamilyModelSQL = require("../models/Sql/Familias");
const FamilyModel = require("../models/Familias");
familyCtrl.index = (req, res) => {
  res.render("users", { active: { users: true } });
};

// Mongoose querys

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
    const family = await FamilyModel.findOne({ DNI_P: dni });
    if (family) {
      res.json(family);
    } else {
      res.status(404).json({ message: "Familia no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la familia", error });
  }
};

familyCtrl.getFamilyById = async (req, res) => {
  const { id } = req.params;

  try {
    const family = await FamilyModel.findOne({
      _id: mongoose.Types.ObjectId(id),
    });
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
    let family = await FamilyModel.findOne({ DNI_P });

    if (!family) {
      // Si no existe la familia, se crea un nuevo registro
      console.log("no existe la familia, creando registro");
      family = await FamilyModel.create(req.body);
      return res
        .status(201)
        .json({ message: "Familia creada exitosamente", family });
    }

    // Actualizar las propiedades existentes en el registro
    await FamilyModel.updateOne({ DNI_P }, req.body);
    console.log("existe la familia, actualizando registro");

    res.json({ message: "Familia actualizada exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear o actualizar la familia", error });
  }
};

// SQL PART

familyCtrl.listFamiliesSQL = async (req, res) => {
  try {
    const families = await FamilyModelSQL.findAll();
    res.json(families);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las familias", error });
  }
};

familyCtrl.getFamilyByDNISQL = async (req, res) => {
  const { dni } = req.params;

  try {
    const family = await FamilyModelSQL.findOne({ where: { DNI_P: dni } });
    if (family) {
      res.json(family);
    } else {
      res.status(404).json({ message: "Familia no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la familia", error });
  }
};

familyCtrl.createOrUpdateFamilySQL = async (req, res) => {
  const { DNI_P } = req.body;

  try {
    let family = await FamilyModelSQL.findOne({ where: { DNI_P } });

    if (!family) {
      // Si no existe la familia, se crea un nuevo registro
      family = await FamilyModelSQL.create(req.body);
      return res
        .status(201)
        .json({ message: "Familia creada exitosamente", family });
    }

    // Actualizar las propiedades existentes en el registro
    await FamilyModelSQL.update(req.body, { where: { DNI_P } });

    res.json({ message: "Familia actualizada exitosamente" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al crear o actualizar la familia", error });
  }
};

module.exports = familyCtrl;
