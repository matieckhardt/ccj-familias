const { Router } = require("express");
const router = Router();
const abmCtrl = require("../controllers/abm.controller");
const authCtrl = require("../controllers/auth.controller");
const alumnosCtrl = require("../controllers/alumnos.controller");
const alumnosCursosCtrl = require("../controllers/alumnosCursos.controller");

const cuposCtrl = require("../controllers/cupos.controller");
//const mhgCtrl = require("../controllers/mhg.controller");
const tallerCtrl = require("../controllers/taller.controller");
const sqlCtrl = require("../controllers/sql.controller");
const matriCtrl = require("../controllers/matriculados.controller");

const { authMiddleware } = require("../middlewares/authMiddleware");

router.get("/auth/users", abmCtrl.listUsers);
router.post("/auth/register", abmCtrl.createUser);
router.get("/auth/user/avatars", abmCtrl.usedAvatars);
router.get("/auth/user/:profile", abmCtrl.loguedUser);

router.get("/alumnos/list/:email", alumnosCtrl.listAlumnos);
router.post("/alumnos/register", alumnosCtrl.createAlumno);

router.post("/matriculados/register", matriCtrl.createAlumno);

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

router.get("/instrumentos/registrados/:nombre", alumnosCtrl.tallerInscripto);
router.get("/ajedrez/registrados/:nombre", alumnosCtrl.ajedrezInscripto);

router.get("/Familias", sqlCtrl.getAll);
router.get("/Familias/:mail", sqlCtrl.getFamilia);
router.get("/Legajos", sqlCtrl.getLegajosAll);
router.get("/Legajos/:CODFAM", sqlCtrl.getLegajos);

router.get("/alumnosCursos", alumnosCursosCtrl.list);
router.get("/alumnosCursos/:DNI", alumnosCursosCtrl.listCursos);

router.post("/auth/login", authCtrl.handleLogin);

module.exports = router;
