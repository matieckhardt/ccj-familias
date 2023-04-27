import { Box, Typography, Paper, MenuItem, Button } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/store";
import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  TableHead,
  Container,
  TextField,
  Grid,
} from "@mui/material";
import Nav from "../Nav/Nav";
import CuposCurso from "./curso.json";

import { changeCurso, changeTaller } from "./actions";
function RegisterStudent() {
  const [cupos, setCupo] = React.useState([]);

  const cuposData = async function (res, req) {
    setCupo(CuposCurso);
  };

  const curso = Array.from(new Set(cupos.map((item) => item.curso)));
  const taller = Array.from(new Set(cupos.map((item) => item.name)));

  const [User, setUser] = React.useState([]);
  const [clase, setClase] = React.useState([]);

  const [cursoSel, setCursoSel] = React.useState([]);
  const [tallerSel, setTallerSel] = React.useState([]);
  const [registrados, setRegistrados] = React.useState([]);

  React.useEffect(() => {
    getUserData();
    cuposData();
  }, []);

  const getUserData = async function (res, req) {
    const token = JSON.stringify(localStorage.token);
    const response = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/auth/user/profile?token=" +
        token
    );
    const objeto = await response.json();
    setUser(objeto);
  };

  const getClaseData = async function (res, req) {
    const response = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/talleres/registrados/" +
        cursoSel.payload +
        "/" +
        tallerSel.payload
    );
    const objeto = await response.json();

    const filteredData = CuposCurso.filter(
      (obj) => obj.curso === cursoSel.payload && obj.name === tallerSel.payload
    );
    const cupoValue = filteredData.map((obj) => obj.cupo)[0];
    setRegistrados(cupoValue);
    console.log("getClaseData", objeto);
    setClase(objeto);
  };

  const handleChangeCurso = (event) => {
    console.log("curso", event.target.value);
    setCursoSel(changeCurso(event.target.value));
    console.log("cursoSel", cursoSel.payload);
  };

  const handleChangeTaller = (event) => {
    console.log("taller", event.target.value);
    setTallerSel(changeTaller(event.target.value));
    console.log("tallerSel", tallerSel.payload);
  };
  return (
    <>
      <Nav></Nav>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              height: "30vh",
            },
          }}
        >
          <Paper elevation={3}>
            <Box
              component="form"
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
                  marginBottom: "20px",
                  color: "#1876D1",
                  fontWeight: 800,
                }}
              >
                {" "}
                Alumnos Inscriptos en Instrumentos{" "}
              </Typography>
              <Box
                component="form"
                onSubmit={""}
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "30ch" },
                  "& button": { m: 1, height: "7ch" },
                  textAlign: "center",
                }}
                noValidate
              >
                <TextField
                  select
                  label="Curso"
                  name={""}
                  value={cursoSel.payload}
                  onChange={handleChangeCurso}
                >
                  {curso.map((e) => (
                    <MenuItem value={e}> {e}</MenuItem>
                  ))}
                </TextField>
                <TextField
                  select
                  label="Taller"
                  name={""}
                  value={tallerSel.payload}
                  onChange={handleChangeTaller}
                >
                  <MenuItem value="all">Todos</MenuItem>
                  {taller.map((e) => (
                    <MenuItem value={e}> {e}</MenuItem>
                  ))}
                </TextField>
                <Button variant="outlined" onClick={getClaseData}>
                  Filtrar
                </Button>
              </Box>
            </Box>
          </Paper>
          <Grid wrap="nowrap">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
            >
              <Container sx={{ color: "#1876D1" }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    marginTop: "10px",
                    color: "#1876D1",
                    fontWeight: 800,
                  }}
                >
                  Registrados
                </Typography>
                <Paper elevation={3}>
                  <TableContainer sx={{ textAlign: "center" }}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombre</TableCell>
                          <TableCell align="left">Curso</TableCell>
                          <TableCell align="left">Taller</TableCell>
                          <TableCell align="left">Instrumento</TableCell>
                          <TableCell align="left">
                            Fecha de inscripcion
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {clase
                          .sort(
                            (a, b) =>
                              new Date(a.createdAt) - new Date(b.createdAt)
                          )
                          .slice(0, registrados)
                          .map((e) => (
                            <TableRow
                              key={e._id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                key={e.nombre}
                              >
                                {e.nombre}
                              </TableCell>

                              <TableCell key={Math.random()} align="left">
                                {e.curso}
                              </TableCell>
                              <TableCell key={Math.random()} align="left">
                                {e.taller}
                              </TableCell>
                              <TableCell key={Math.random()} align="left">
                                {e.instrumento}
                              </TableCell>
                              <TableCell key={Math.random()} align="left">
                                {e.createdAt}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Container>
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
            >
              <Container sx={{ marginTop: "auto", color: "#1876D1" }}>
                <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    marginTop: "60px",
                    color: "#1876D1",
                    fontWeight: 800,
                  }}
                >
                  Lista de Espera
                </Typography>
                <Paper elevation={3}>
                  <TableContainer sx={{ marginTop: "5%", textAlign: "center" }}>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Nombre</TableCell>
                          <TableCell align="left">Curso</TableCell>
                          <TableCell align="left">Taller</TableCell>
                          <TableCell align="left">Instrumento</TableCell>
                          <TableCell align="left">
                            Fecha de inscripcion
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {clase
                          .sort(
                            (a, b) =>
                              new Date(a.createdAt) - new Date(b.createdAt)
                          )
                          .slice(registrados)
                          .map((e) => (
                            <TableRow
                              key={e._id}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                key={e.nombre}
                              >
                                {e.nombre}
                              </TableCell>

                              <TableCell key={Math.random()} align="left">
                                {e.curso}
                              </TableCell>
                              <TableCell key={Math.random()} align="left">
                                {e.taller}
                              </TableCell>
                              <TableCell key={Math.random()} align="left">
                                {e.instrumento}
                              </TableCell>
                              <TableCell key={Math.random()} align="left">
                                {e.createdAt}
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Container>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default RegisterStudent;
