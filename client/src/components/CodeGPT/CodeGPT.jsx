import React from "react";
import { useContext, useReducer, useState } from "react";
import {
  Button,
  Box,
  Container,
  MenuItem,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { AppContext } from "../../context/store";

const Main = () => {
  const { dispatch } = useContext(AppContext);
  const [hasErrorLogin, setHasErrorLogin] = useState(false);
  const [errorMessageLogin] = useState("");
  const [user, setUser] = React.useState([]);
  const [family, setFamily] = React.useState([]);
  const [alumno, setAlumno] = React.useState([]);

  React.useEffect(() => {
    getUserData();
  }, []);

  // Obtenemos el mail del token
  const getUserData = async function () {
    const token = JSON.stringify(localStorage.token);
    const response = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/auth/user/profile?token=" +
        token
    );
    const user = await response.json();
    const familyRes = await fetch(
      `https://familias.colegiociudadjardin.edu.ar/api/v1/Familias/${user.userMail}`
    );
    const familyData = await familyRes.json();
    console.log("familyData", familyData[0]);

    setFamily(familyData[0]);
  };

  // Obtenemos a partir del codigo (CODFAM) de familia  la data familiar

  const getStudentData = async () => {
    const response = await fetch(
      `https://familias.colegiociudadjardin.edu.ar/api/v1/Legajos/${family.CODFAM}`
    );
    const studentData = await response.json();

    console.log("studentData", studentData);

    setAlumno(studentData);
  };

  const getCourseData = async (DNI) => {
    const response = await fetch(
      `https://familias.colegiociudadjardin.edu.ar/api/v1/alumnosCursos`
    );
    const courseData = await response.json();
    return courseData.filter((course) => course.DNI === DNI);
  };

  const getAvailableWorkshops = async (studentData) => {
    const response = await fetch(
      `https://familias.colegiociudadjardin.edu.ar/api/v1/cupos/find/${studentData}`
    );
    const workshopsData = await response.json();
    return workshopsData;
  };

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
            minHeight: "80vh",
            height: "100%",
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
              Inscripcion a Taller de Insrtumento 2023
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
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
              onSubmit={""}
            >
              <TextField
                select
                label="Alumno"
                name={""}
                value={""}
                onFocus={getStudentData}
              >
                {alumno.map((e) => {
                  return (
                    <MenuItem
                      name={e.DNI}
                      key={e.DNI}
                      value={e.CURSO}
                      onFocus={""}
                    >
                      {e.NOMBRE}, {e.APELLIDO}
                    </MenuItem>
                  );
                })}
              </TextField>

              <TextField
                select
                onMouseMove={""}
                label="Seleccione el taller"
              ></TextField>
              <TextField select onChange={""} label="Posee instrumento?">
                <MenuItem name="Si" value="Si">
                  {" "}
                  Si
                </MenuItem>
                <MenuItem name="No" value="No">
                  No
                </MenuItem>
              </TextField>
              <Box>
                <h4>{""}</h4>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  padding: 5,
                  textAlign: "center",
                  color: "Black",
                  fontWeight: 800,
                  fontSize: 12,
                }}
              >
                Recordamos que la asistencia a clases es opcional mediando un
                compromiso de asistir durante todo el ciclo lectivo. <br></br>{" "}
                Declaro conocer y aceptar los valores de las actividades
                propuestas y las condiciones para su inscripción y permanencia
              </Typography>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  marginTop: "9px",
                  marginLeft: "10px",
                  padding: "15px 20px",
                }}
              >
                Inscribir
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
  );
};
export default Main;
