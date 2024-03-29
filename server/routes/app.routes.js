const { Router } = require("express");
const router = Router();
const abmCtrl = require("../controllers/abm.controller");
const authCtrl = require("../controllers/auth.controller");
const alumnosCtrl = require("../controllers/alumnos.controller");
const alumnosCursosCtrl = require("../controllers/alumnosCursos.controller");
const ajedrezCtrl = require("../controllers/ajedrez.controller");
const familyCtrl = require("../controllers/familias.controller"); // Importar el controlador de la familia

const cuposCtrl = require("../controllers/cupos.controller");
//const mhgCtrl = require("../controllers/mhg.controller");
const tallerCtrl = require("../controllers/taller.controller");
const sqlCtrl = require("../controllers/sql.controller");
const matriculaCtrl = require("../controllers/matricula.controller");

const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/auth/users", abmCtrl.listUsers);
router.post("/auth/register", abmCtrl.createUser);
router.get("/auth/user/avatars", abmCtrl.usedAvatars);
router.get("/auth/user/:profile", abmCtrl.loguedUser);

router.get("/alumnos/list/:email", alumnosCtrl.listAlumnos);
router.post("/alumnos/register", alumnosCtrl.createAlumno);

//router.get("/data/list/", mhgCtrl.listData);
//router.get("/data/find/:mailPadre", mhgCtrl.findData);

router.get("/cupos/list", cuposCtrl.listCupos);
router.get("/cupos/ListTalleres", cuposCtrl.listTalleres);
router.get("/cupos/find/:curso", cuposCtrl.findCurso);
router.post("/cupos/register", cuposCtrl.createCupo);
router.post("/cupos/delete/:id", cuposCtrl.deleteCupo);
router.post("/taller/register", tallerCtrl.createTaller);
router.get("/talleres/registrados/:curso", tallerCtrl.registrados);
router.get("/talleres/registrados/:curso/:taller", tallerCtrl.registradosAll);
router.get(
  "/talleres/registrados/ajedrez/:curso",
  tallerCtrl.registradosAjedrez
);

router.get("/instrumentos/registrados/:nombre", alumnosCtrl.tallerInscripto);
router.get("/instrumentos/registrados", alumnosCtrl.tallerInscripto);

//rutas AJEDREZ
router.get("/ajedrez/registrados/:nombre", ajedrezCtrl.ajedrezInscripto);
router.get("/ajedrez/registrados", ajedrezCtrl.ajedrezAll);
router.post("/ajedrez/register", ajedrezCtrl.createAlumno);

router.get("/Familias", sqlCtrl.getAll);
router.get("/Familias/:mail", sqlCtrl.getFamilia);
router.get("/Legajos", sqlCtrl.getLegajosAll);
router.get("/Legajos/:CODFAM", sqlCtrl.getLegajos);

router.get("/alumnosCursos", alumnosCursosCtrl.list);
router.get("/alumnosCursos/:DNI", alumnosCursosCtrl.listCursos);

router.get("/aranceles", matriculaCtrl.aranceles);
router.get("/termconds", matriculaCtrl.termConds);
router.get("/valoresMatri", matriculaCtrl.valoresMatri);

router.post("/auth/login", authCtrl.handleLogin);

// Rutas para el modelo de familia
router.get("/families", familyCtrl.listFamilies);
router.get("/families/:dni", familyCtrl.getFamilyByDNI);
router.get("/legajos/:id", familyCtrl.getFamilyById);
router.post("/families/createOrUpdate", familyCtrl.createOrUpdateFamily);
router.post("/families/dniUpload", familyCtrl.uploadImage);

module.exports = router;
