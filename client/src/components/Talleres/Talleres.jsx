import {
  Button,
  Box,
  Container,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useContext, useReducer, useState } from "react";
import { AppContext } from "../../context/store";
import {
  changeNombre,
  changeCurso,
  changeTaller,
  changeInstrumento,
} from "./actions";
import { reducerFunction } from "./reducer";
import { handleRegister } from "../../services/alumnoCreate";
import { toast } from "react-hot-toast";
import { changeRegisteredIn } from "../../redux/actions/globalActions";
import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";

function RegisterTaller() {
  const { dispatch } = useContext(AppContext);
  const [hasErrorLogin, setHasErrorLogin] = useState(false);
  const [errorMessageLogin] = useState("");

  const [registerState, setRegisterState] = useReducer(reducerFunction, {
    nombre: "",
    curso: "",
    taller: "",
    instrumento: "",
  });

  const { nombre, curso, taller, instrumento } = registerState;

  const [user, setUser] = React.useState([]);
  const [datosMhg, setDatos] = React.useState([]);
  const [talleres, setTaller] = React.useState([]);
  const [id, setId] = React.useState("");
  const [alumno, setAlumno] = React.useState([]);

  const [alumnosReg, setRegistrados] = React.useState("");

  const [tallerAnotados, setTallerAnotadosState] = React.useState("");
  const [cursoSelected, setCursoSelected] = React.useState("");
  const [hayLugar, setCupoDisp] = React.useState("");

  React.useEffect(() => {
    getUserData();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.innerText);
    setId(event.target.innerText);
  };

  const getNames = (event) => {
    if (!event) return;
    else {
      console.log(event.target);
      setRegisterState(changeNombre(event.target.name));
      setRegisterState(changeTaller(event.target.value));
      getTalleres(event.target.value);
      registrados(event.target.value);
      setCursoSelected(event.target.value);
    }
  };

  const handleChangeTaller = (event) => {
    setRegisterState(changeCurso(event.target.innerText));
    const tallerAnotados = alumnosReg.filter(
      (e) => e.taller === event.target.innerText
    );
    setTallerAnotadosState(tallerAnotados.length);
    disponibles(cursoSelected);
    console.log(event.target.innerText);
  };

  const handleChangeInstrumento = (event) => {
    return setRegisterState(changeInstrumento(event.target.value));
  };

  const getUserData = async function (res, req) {
    const token = JSON.stringify(localStorage.token);
    const response = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/auth/user/profile?token=" +
        token
    );
    const objeto = await response.json();
    setUser(objeto);

    const data = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/Familias/" +
        objeto.userMail
    );
    const datosMhg = await data.json();
    console.log(datosMhg);
    setDatos(datosMhg);

    const alumnos = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/Legajos/" +
        datosMhg[0].CODFAM
    );
    const caca = await alumnos.json();
    const alumnosData = caca.map(({ NOMBRE, APELLIDO, DNI, MATRICULA }) => ({
      NOMBRE,
      APELLIDO,
      DNI,
      MATRICULA,
    }));

    const cursos = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/alumnosCursos"
    );
    const cursoData = await cursos.json();

    let mapped = cursoData.reduce((a, c) => ((a[c.DNI] = c), a), {});
    let result = alumnosData.map((o) => Object.assign(o, mapped[o.DNI]));
    setAlumno(result);
  };

  const getTalleres = async function (curso, event) {
    console.log("get talleres", curso);
    if (!curso) return;
    else {
      const response = await fetch(
        "https://familias.colegiociudadjardin.edu.ar/api/v1/cupos/find/" + curso
      );

      const objeto = await response.json();
      setTaller(objeto);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleRegister(nombre, curso, taller, instrumento)
      .then((response) => {
        dispatch(changeRegisteredIn(true));
        toast.success("Alumno inscripto correctamente");
      })
      .catch((error) => {
        setHasErrorLogin(true);
        toast.error("Alumno ya esta inscripto");
      });
  };

  const registrados = async function (e) {
    const response = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/talleres/registrados/" +
        e
    );
    const objeto = await response.json();
    console.log("registrados", objeto);
    setRegistrados(objeto);
  };

  const disponibles = async function (e) {
    const response = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/cupos/find/" + e
    );
    const objeto = await response.json();
    const cupoDisp = objeto[0].cupo;
    console.log("disponible", cupoDisp);
    console.log("anotados", tallerAnotados);
    if (cupoDisp > tallerAnotados) {
      setCupoDisp("Quedan vacantes disponibles");
    } else setCupoDisp("El cupo se completó, se inscribirá en lista de espera");
  };

  return (
    <MuiThemeProvider>
      <Container maxWidth="xl">
        <Box
          sx={{
            marginLeft: "18%",
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              minHeight: "80vh",
              height: "auto",
            },
          }}
        >
          <Paper elevation={3}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: "50px",
                  marginBottom: "60px",
                  color: "#1876D1",
                  fontWeight: 800,
                }}
              >
                Inscripcion a Talleres
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  padding: 5,
                  textAlign: "center",
                  color: "Black",
                  fontWeight: 500,
                }}
              >
                Los talleres disponen de un cupo maximo para optimizar el
                rendimiento de las clases. <br /> A medida que estos cupos se
                completan se generan listas de espera, <br /> hasta alcanzar la
                cantidad minima requerida para habilitar un nuevo grupo.
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "20ch" },
                }}
                noValidate
              >
                <TextField
                  select
                  label="Alumno"
                  name={id}
                  value={registerState.alumno}
                  onChange={getNames}
                >
                  {alumno.map((e) => {
                    return (
                      <MenuItem
                        name={e.DNI}
                        key={e.DNI}
                        value={e.CURSO}
                        onFocus={handleChange}
                      >
                        {e.NOMBRE}, {e.APELLIDO}{" "}
                      </MenuItem>
                    );
                  })}
                </TextField>

                <TextField
                  select
                  onMouseMove={handleChangeTaller}
                  label="Seleccione el taller"
                >
                  {talleres.map((taller) => {
                    return (
                      <MenuItem
                        name="taller"
                        key={taller._id}
                        value={taller.name}
                      >
                        {taller.name}
                      </MenuItem>
                    );
                  })}
                </TextField>
                <TextField
                  select
                  onChange={handleChangeInstrumento}
                  label="Posee instrumento?"
                >
                  <MenuItem name="Si" value="Si">
                    {" "}
                    Si
                  </MenuItem>
                  <MenuItem name="No" value="No">
                    No
                  </MenuItem>
                </TextField>
                <Box>
                  <h4>{hayLugar}</h4>
                </Box>

                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    marginTop: "9px",
                    marginLeft: "10px",
                    padding: "15px 20px",
                  }}
                >
                  Register
                </Button>
                {hasErrorLogin && (
                  <Typography
                    variant="contained"
                    color="red"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    {errorMessageLogin}
                  </Typography>
                )}
                {hasErrorLogin && (
                  <Typography
                    variant="contained"
                    color="red"
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    {errorMessageLogin}
                  </Typography>
                )}
              </Box>
            </Box>
          </Paper>
        </Box>
      </Container>
    </MuiThemeProvider>
  );
}

export default RegisterTaller;
