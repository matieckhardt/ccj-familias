import { Box, Typography, Paper } from "@mui/material";
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
} from "@mui/material";

function RegisterStudent() {
  const { dispatch } = useContext(AppContext);
  const [alumno, setAlumno] = React.useState([]);
  const [datosMhg, setDatos] = React.useState([]);
  const [User, setUser] = React.useState([]);

  React.useEffect(() => {
    getUserData();
  }, []);

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
              height: "80vh",
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
                  color: "#1876D1",
                  fontWeight: 800,
                }}
              >
                Alumnos
              </Typography>
              <Container sx={{ marginTop: "50px", color: "#1876D1" }}>
                <TableContainer
                  sx={{ marginTop: "100px", textAlign: "center" }}
                >
                  <Table sx={{}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell align="left">Apellido</TableCell>
                        <TableCell align="left">Curso</TableCell>
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
                          <TableCell component="th" scope="row" key={e.NOMBRE}>
                            {e.NOMBRE}
                          </TableCell>
                          <TableCell key={e._id} align="left">
                            {e.APELLIDO}
                          </TableCell>
                          <TableCell key={e._id} align="left">
                            {e.CURSO}
                          </TableCell>
                          <TableCell key={e._id} align="left">
                            {e.DNI}
                          </TableCell>
                          <TableCell key={e._id} align="left">
                            {e.MATRICULA}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default RegisterStudent;
