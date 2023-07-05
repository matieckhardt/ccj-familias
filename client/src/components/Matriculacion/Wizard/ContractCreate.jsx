import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
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
const SERVERURI = "https://familias.colegiociudadjardin.edu.ar/api/v1/";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 12,
    padding: "1cm",
    borderWidth: 400,
  },
  title: {
    fontSize: 12,
    marginBottom: "0.5cm",
    fontWeight: "bold",
  },
  paragraph: {
    marginBottom: "0.3cm",
  },
});

const fecha = new Date().toLocaleDateString("es-AR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

const { DNI, Alumno, Sala, Jornada, Curso } = {};

function TableFirmas() {
  return (
    <TableContainer>
      <Typography variant="caption">
        Me notifico, presto conformidad al presente contrato y me obligo a
        cumplir y hacer cumplir a mi/s hijo/s el Reglamento y sus anexos,
        asumiendo el compromiso de abonar mes a mes los aranceles antes
        descriptos para el ciclo lectivo 2024 - Fecha: {Date}
        (Las familias nuevas deberán consignar las firmas de manera presencial
        al entregar la documentación en Administración)
      </Typography>

      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableRow>
          <TableCell>Firma</TableCell>
          <TableCell>Firma</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>datos padre</TableCell>
          <TableCell>datos madre</TableCell>
        </TableRow>
      </Table>
    </TableContainer>
  );
}

function ContractCreate() {
  const [termConds, setTermConds] = React.useState([]);
  const [aranceles, setAranceles] = React.useState([]);
  const [valores, setMatricula] = React.useState([]);

  React.useEffect(() => {
    const termConds = fetch(SERVERURI + "termConds")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTermConds(data);
      })
      .catch((error) => {
        console.error(error);
      });
    const aranceles = fetch(SERVERURI + "aranceles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAranceles(data);
      })
      .catch((error) => {
        console.error(error);
      });
    const valores = fetch(SERVERURI + "valoresMatri")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMatricula(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Document>
      <Box bgcolor={"lightgray"}>
        <Page size="A4" style={styles.page}>
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
                  Matienzo 2799 – Ciudad jardín Lomas del Palomar (1684) –
                  Buenos Aires
                </Typography>
              </Box>
              <Box
                mt={5}
                ml={10}
                mr={10}
                mb={5}
                border={1}
                borderColor={"black"}
                bgcolor={"lightgray"}
                pt={1}
              >
                <Typography variant="h6" align="center" gutterBottom>
                  SOLICITUD DE RESERVA DE VACANTE – CONTRATO ANUAL DE ENSEÑANZA
                  2024
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
                  Cooperativa Escolar y Cultural El Palomar Ltda. GARTENSTADT
                  SCHULE
                </Typography>
                <Typography variant="subtitle1" align="left">
                  Presente
                </Typography>
                <Typography variant="body1" paragraph>
                  De nuestra mayor consideración:
                </Typography>
                <Typography variant="body1" paragraph>
                  En nuestro carácter de progenitores responsables del alumno{" "}
                  {Alumno} DNI {DNI}, solicitamos a Uds. se sirvan reservar
                  vacante/s para el ciclo lectivo 2024 para el curso/sala/año{" "}
                  {Sala} {Jornada} {Curso} del solicitamos a Uds. se sirvan
                  reservar vacante/s para el ciclo lectivo 2024 para el Nivel :.
                  <br />
                  En caso de ser admitido como alumno/a del mismo, tomo
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
                          <TableFirmas></TableFirmas>
                        </Box>
                      )}

                      {index === 14 && (
                        <Box p={4}>
                          <MatriculaValores prices={valores} />
                        </Box>
                      )}
                      {index === 16 && (
                        <Box p={4}>
                          <TableFirmas></TableFirmas>
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
                          <TableFirmas></TableFirmas>
                          <br />
                        </Box>
                      )}

                      {index === 31 && (
                        <Box p={4}>
                          <TableFirmas></TableFirmas>
                        </Box>
                      )}
                    </>
                  ))}
                </List>
                <DatosPadres></DatosPadres>
              </Box>
            </Paper>
          </Box>
        </Page>
      </Box>
    </Document>
  );
}

export default ContractCreate;
