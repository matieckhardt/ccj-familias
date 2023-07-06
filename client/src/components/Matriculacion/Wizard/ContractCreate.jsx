import React from "react";
import {
  Paper,
  Typography,
  List,
  ListItemText,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import ArancelesTable from "../Contrato/Aranceles";
import MatriculaValores from "../Contrato/MatriculaValores";
import DatosPadres from "../Contrato/DatosPadres";
import { useParams } from "react-router-dom";

const SERVERURI = "https://familias.colegiociudadjardin.edu.ar/api/v1/";

const fecha = new Date().toLocaleDateString("es-AR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

function TableFirmas({ data }) {
  if (!data) {
    // Data is not available, render a loading state or an error message
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Typography variant="caption">
        Me notifico, presto conformidad al presente contrato y me obligo a
        cumplir y hacer cumplir a mi/s hijo/s el Reglamento y sus anexos,
        asumiendo el compromiso de abonar mes a mes los aranceles antes
        descriptos para el ciclo lectivo 2024 - Fecha: {fecha}
        (Las familias nuevas deberán consignar las firmas de manera presencial
        al entregar la documentación en Administración)
      </Typography>
      <br />
      <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Firma</TableCell>
              <TableCell>Firma</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                {data.PADRE}, DNI: {data.DNI_P}
              </TableCell>
              <TableCell>
                {data.MADRE}, DNI: {data.DNI_M}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function ContractCreate(data) {
  const [user, setUser] = React.useState([]);
  const [familias, setFamilias] = React.useState({});
  const [termConds, setTermConds] = React.useState([]);
  const [aranceles, setAranceles] = React.useState([]);
  const [valores, setMatricula] = React.useState([]);
  const { dni } = useParams();

  const getUserData = async function (res, req) {
    const token = JSON.stringify(localStorage.token);
    const response = await fetch(
      SERVERURI + "/auth/user/profile?token=" + token
    );

    const objeto = await response.json();
    setUser(objeto);

    const dataSaved = await fetch(SERVERURI + "families/" + dni);
    const legajos = await dataSaved.json();
    setFamilias(legajos);
  };

  React.useEffect(() => {
    getUserData();

    fetch(SERVERURI + "termConds")
      .then((response) => response.json())
      .then((data) => {
        setTermConds(data);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(SERVERURI + "aranceles")
      .then((response) => response.json())
      .then((data) => {
        setAranceles(data);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(SERVERURI + "valoresMatri")
      .then((response) => response.json())
      .then((data) => {
        setMatricula(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Box bgcolor={"lightgray"}>
      <Box m={1} width={1024}>
        <Paper elevation={0}>
          <Box m={0} p={2} pb={3}>
            <Typography variant="body2" align="right">
              GARTENSTADT SCHULE – COLEGIO CIUDAD JARDIN
            </Typography>
            <Typography variant="body2" align="right">
              COOPERATIVA ESCOLAR Y CULTURAL EL PALOMAR LTDA. – CUIT
              30-53487825-3
            </Typography>
            <Typography variant="body2" align="right">
              Matienzo 2799 – Ciudad jardín Lomas del Palomar (1684) – Buenos
              Aires
            </Typography>
          </Box>
          <Box
            mt={5}
            ml={10}
            mr={10}
            mb={5}
            border={1}
            bgcolor={"lightgray"}
            pt={1}
          >
            <Typography variant="h6" align="center" gutterBottom>
              SOLICITUD DE RESERVA DE VACANTE – CONTRATO ANUAL DE ENSEÑANZA 2024
            </Typography>
          </Box>
          <Typography variant="subtitle1" align="right" pr={5}>
            Ciudad Jardín Lomas del Palomar, {fecha}
          </Typography>
          <Box m={10} mt={5} mb={3}>
            <Typography variant="subtitle1" align="left">
              Señores
            </Typography>
            <Typography variant="subtitle1" align="left">
              Consejo de Administración
            </Typography>
            <Typography variant="subtitle1" align="left">
              Cooperativa Escolar y Cultural El Palomar Ltda. GARTENSTADT SCHULE
            </Typography>
            <Typography variant="subtitle1" align="left">
              Presente
            </Typography>
            <Typography variant="body1" paragraph>
              De nuestra mayor consideración:
            </Typography>
            <Typography variant="body1" paragraph>
              En nuestro carácter de progenitores responsables de los alumnos:
            </Typography>
            {familias && familias.hijos && (
              <Box pl={10}>
                {familias.hijos.map((e, index) => (
                  <ul key={index}>
                    <li key={index}>
                      <strong>ALUMNO: </strong>
                      {e.APELLIDO}, {e.NOMBRE}, <strong>DNI: </strong>
                      {e.DNI}, <strong>CURSO: </strong>
                      {e.CURSO}
                    </li>
                  </ul>
                ))}
              </Box>
            )}
            <br />
            <Typography>
              solicitamos a Uds. se sirvan reservar vacante/s para el ciclo
              lectivo 2024 para el curso/sala/año <strong> </strong>
              del solicitamos a Uds. se sirvan reservar vacante/s para el ciclo
              lectivo 2024.
              <br /> En caso de ser admitido como alumno/a del mismo, tomo
              conocimiento y acepto el siguiente reglamento de reserva de
              vacante y las pautas administrativas que regirán el servicio
              educativo, en concordancia con lo dispuesto por el Art. 1º del
              decreto 2417/93 y la Res. 678/99 SCI y sus modificaciones:
            </Typography>
          </Box>
          <Box p={10} pt={1}>
            <List>
              {termConds.map((item, index) => (
                <>
                  <ListItemText key={item.orden}>
                    <strong> {item.orden}. </strong> {item.termsCon}
                  </ListItemText>

                  {index === 7 && (
                    <Box p={4}>
                      <TableFirmas data={familias}></TableFirmas>
                    </Box>
                  )}

                  {index === 14 && (
                    <Box p={4}>
                      <MatriculaValores prices={valores} />
                    </Box>
                  )}
                  {index === 16 && (
                    <Box p={4}>
                      <TableFirmas data={familias}></TableFirmas>
                      <br />
                    </Box>
                  )}
                  <br />
                  {index === 17 && (
                    <Box p={4}>
                      <ArancelesTable aranceles={aranceles} />
                    </Box>
                  )}
                  {index === 28 && (
                    <Box p={4}>
                      <TableFirmas data={familias}></TableFirmas>
                      <br />
                    </Box>
                  )}

                  {index === 31 && (
                    <Box p={4}>
                      <TableFirmas data={familias}></TableFirmas>
                    </Box>
                  )}
                </>
              ))}
            </List>
            <DatosPadres data={familias}></DatosPadres>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}

export default ContractCreate;
