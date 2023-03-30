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
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/store";
import { changeNombre, changeCurso, changeTaller } from "./actions";
import { reducerFunction } from "./reducer";
import { handleRegister } from "../../services/ajedrezCreate";
import { toast } from "react-hot-toast";
import { changeRegisteredIn } from "../../redux/actions/globalActions";
import React from "react";

function RegisterAjedrez() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [hasErrorLogin, setHasErrorLogin] = useState(false);
  const [errorMessageLogin] = useState("");

  const [registerState, setRegisterState] = useReducer(reducerFunction, {
    nombre: "",
    curso: "",
    taller: "",
  });

  const { nombre, curso, taller } = registerState;

  const [user, setUser] = React.useState([]);
  const [datosMhg, setDatos] = React.useState([]);
  const [talleres, setTaller] = React.useState([]);
  const [id, setId] = React.useState("");
  const [alumno, setAlumno] = React.useState([]);

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
      setRegisterState(changeCurso(event.target.value));
      getTalleres(event.target.value);
    }
  };

  const handleChangeTaller = (event) => {
    setRegisterState(changeTaller(event.target.value));
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
      console.log("ajedrez", objeto);
      const Ajedrez = objeto.filter((e) => e.name === "Ajedrez");

      setTaller(Ajedrez);
    }
    setRegisterState(changeTaller(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleRegister(nombre, curso, taller)
      .then((response) => {
        dispatch(changeRegisteredIn(true));
        toast.success("Taller created Succesfully");
      })
      .catch((error) => {
        setHasErrorLogin(true);
        toast.error("hubo un error");
      });
  };
  return (
    <>
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
                Inscripcion al taller de Ajedrez 2023
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
                El taller de Ajedrez solamente esta disponible desde 2do grado
                hasta 6 año de secundaria. <br />
                El taller de ajedrez para nivel secundario se realiza los lunes
                de 13:10 a 14 hs y está a cargo del Prof. Pablo García. Se
                solicita compromiso en la asistencia hasta fin de año.
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
                        {e.NOMBRE}, {e.APELLIDO}
                      </MenuItem>
                    );
                  })}
                </TextField>
                <TextField
                  select
                  onChange={handleChangeTaller}
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
    </>
  );
}

export default RegisterAjedrez;
