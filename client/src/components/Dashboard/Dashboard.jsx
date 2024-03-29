import React from "react";
import { TextField, Box } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import { Container, Paper, Typography } from "@mui/material";

const Dashboard = () => {
  const [user, setUser] = React.useState([]);
  const [alumno, setAlumno] = React.useState([]);
  const [datosMhg, setDatos] = React.useState([]);

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
    setDatos(datosMhg[0] || "Vacio");
  };
  if (datosMhg === "Vacio") {
    return (
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
          <Box>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                marginBottom: "30px",
                color: "#1876D1",
                fontWeight: 800,
              }}
            >
              "Usted se registro con un mail distinto al del Responsable
              Declarado. <br />
              Porfavor registrese correctamente
            </Typography>
          </Box>
        </Box>
      </Container>
    );
  } else
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
            <Box>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginBottom: "30px",
                  color: "#1876D1",
                  fontWeight: 800,
                }}
              >
                Bienvenido, {user.userName}
              </Typography>
              <span>
                Estimados, les solicitamos revisar sus datos registrados y si
                existe algun faltante o inconsistencia, enviar un mail
                comunicandolo a administracion@colegiociudadjardin.edu.ar.
                Muchas Gracias
              </span>
            </Box>
            <Container maxWidth="xl">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                {" "}
                <Paper elevation={3}>
                  {" "}
                  <br />
                  <h3>Datos del Progenitor I</h3>
                  <TextField
                    id="outlined-controlled"
                    value={datosMhg.OCUPAD}
                    helperText="Ocupacion "
                    key="Ocupacion Padre"
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Dni "
                    key="Dni "
                    value={datosMhg.DNI_P}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Mail "
                    key="Mail  "
                    value={datosMhg.MAILPADREP}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Direccion "
                    key="Direccion "
                    value={datosMhg.VIVE_DOMP}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Numero "
                    key="Numero "
                    value={datosMhg.NRO}
                  ></TextField>
                </Paper>
              </Box>{" "}
              <br />
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Paper elevation={3}>
                  {" "}
                  <br />
                  <h3>Datos del Progenitor II</h3>
                  <TextField
                    id="outlined-controlled"
                    helperText="Nombre y apellido "
                    key="Nombre y apellido "
                    value={datosMhg.MADRE}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Ocupacion "
                    key="Ocupacion Madre"
                    value={datosMhg.OCUMAD}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Mail "
                    key="Mail  "
                    value={datosMhg.MAILMADREP}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Direccion "
                    key="Direccion "
                    value={datosMhg.VIVE_DOMM}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Numero "
                    key="Numero "
                    value={datosMhg.NRO_M}
                  ></TextField>
                </Paper>
              </Box>{" "}
              <br />
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "30ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Paper elevation={3}>
                  {" "}
                  <br />
                  <h3>Datos del Responsable</h3>
                  <TextField
                    id="outlined-controlled"
                    helperText="Responsable"
                    key="Responsable"
                    value={datosMhg.RESPONS}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Telefono Responsable"
                    key="Telefono Responsable"
                    value={datosMhg.TELEFONOR}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Mail "
                    key="Mail Responsable"
                    value={datosMhg.AFIP_MAIL_FAM}
                  ></TextField>
                  <TextField
                    id="outlined-controlled"
                    helperText="Dni Responsable"
                    key="Dni Responsable"
                    value={datosMhg.AFIP_NRODOC}
                  ></TextField>
                </Paper>
              </Box>
            </Container>
          </Box>
        </Container>
      </>
    );
};
export default Dashboard;
