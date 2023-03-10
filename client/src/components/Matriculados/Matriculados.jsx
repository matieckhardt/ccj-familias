import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  Box,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Paper,
} from "@mui/material";
import { useContext, useEffect, useReducer, useState } from "react";
import { AppContext } from "../../../context/store";
import {
  changeNombre,
  changeApellido,
  changeidCurso,
  changeCurso,
  changeDni,
  changeLegajo,
} from "./actions";
import { reducerFunction } from "./reducer";
import { handleRegister } from "../../../services/matriculadosCreate";
import { toast } from "react-hot-toast";
import { changeRegisteredIn } from "../../../redux/actions/globalActions";

import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  TableHead,
  Container,
} from "@mui/material";

function Matriculados() {
  const { dispatch } = useContext(AppContext);
  const [hasErrorLogin, setHasErrorLogin] = useState(false);
  const [errorMessageLogin] = useState("");

  const [user, setUser] = React.useState([]);
  const [alumno, setAlumno] = React.useState([]);
  const [datosMhg, setDatos] = React.useState([]);

  const [registerState, setRegisterState] = useReducer(reducerFunction, {
    nombre: "",
    apellido: "",
    idCurso: "",
    curso: "",
    dni: "",
    legajo: "",
  });

  React.useEffect(() => {
    getUserData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleRegister(nombre, apellido, idCurso, curso, dni, legajo)
      .then((response) => {
        dispatch(changeRegisteredIn(true));
        toast.success("Matricula created Succesfully");
      })
      .catch((error) => {
        setHasErrorLogin(true);
        toast.error("hubo un error");
      });
  };
  const { nombre, apellido, idCurso, curso, dni, legajo } = registerState;

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
      "https://familias.colegiociudadjardin.edu.ar/api/v1/Legajos"
    );
    const alumno = await alumnos.json();
    setAlumno(alumno);
  };

  const handleChangeNombre = (event) => {
    return setRegisterState(changeNombre(event.target.value));
  };
  const handleChangeApellido = (event) => {
    return setRegisterState(changeApellido(event.target.value));
  };
  const handleChangeidCurso = (event) => {
    return setRegisterState(changeidCurso(event.target.value));
  };
  const handleChangeCurso = (event) => {
    return setRegisterState(changeCurso(event.target.value));
  };
  const handleChangeDni = (event) => {
    return setRegisterState(changeDni(event.target.value));
  };
  const handleChangeLegajo = (event) => {
    return setRegisterState(changeLegajo(event.target.value));
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
              height: "100%",
            },
          }}
        >
          <Paper elevation={3}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: "50px",
                  color: "#1876D1",
                  fontWeight: 800,
                }}
              >
                Alumnos
              </Typography>
              <Container sx={{ marginTop: "50px", color: "#1876D1" }}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "20ch" },
                  }}
                  noValidate
                >
                  <TableContainer
                    sx={{ marginTop: "100px", textAlign: "center" }}
                  >
                    <Table sx={{}} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombre</TableCell>
                          <TableCell align="left">Apellido</TableCell>
                          <TableCell align="left">idCurso</TableCell>
                          <TableCell align="left">Curso/Division</TableCell>
                          <TableCell align="left">DNI</TableCell>
                          <TableCell align="left">Legajo</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {alumno.map((e) => (
                          <TableRow
                            key={e._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell
                              component="th"
                              scope="row"
                              key={e.NOMBRE}
                            >
                              <input
                                name="nombre"
                                onInput={handleChangeNombre}
                                defaultValue={e.NOMBRE}
                              ></input>
                            </TableCell>
                            <TableCell key={e._id} align="left">
                              <input
                                name="apellido"
                                onInput={handleChangeApellido}
                                defaultValue={e.APELLIDO}
                              ></input>
                            </TableCell>
                            <TableCell key={e._id} align="left">
                              <input
                                name="idCurso"
                                onInput={handleChangeidCurso}
                                defaultValue={e.CURSO}
                              ></input>
                            </TableCell>
                            <TableCell key={e._id} align="left">
                              <input
                                name="curso"
                                id="cursoInput"
                                onInput={handleChangeCurso}
                              ></input>
                            </TableCell>
                            <TableCell key={e._id} align="left">
                              <input
                                name="dni"
                                onInput={handleChangeDni}
                                defaultValue={e.DNI}
                              ></input>
                            </TableCell>
                            <TableCell key={e._id} align="left">
                              <input
                                name="legajo"
                                onInput={handleChangeLegajo}
                                defaultValue={e.MATRICULA}
                              ></input>
                            </TableCell>
                            <TableCell key={e._id} align="left">
                              <Button
                                variant="contained"
                                onClick={handleSubmit}
                              >
                                Guardar
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Container>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default Matriculados;
