import { Box, Typography, Paper } from "@mui/material";

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
import Nav from "../Nav/Nav";

function AjedrezReg() {
  const [registrados, setRegistrados] = React.useState([]);

  React.useEffect(() => {
    ajedrezData();
  }, []);
  const ajedrezData = async function (res, req) {
    const response = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/ajedrez/registrados"
    );
    const alumnos = await response.json();
    setRegistrados(alumnos);
  };

  return (
    <>
      <Nav></Nav>
      <Container maxWidth="xl">
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
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {registrados.map((e) => (
                        <TableRow
                          key={e._id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row" key={e.nombre}>
                            {e.nombre}
                          </TableCell>

                          <TableCell key={Math.random()} align="left">
                            {e.curso}
                          </TableCell>
                          <TableCell key={Math.random()} align="left">
                            {e.taller}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Container>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default AjedrezReg;
