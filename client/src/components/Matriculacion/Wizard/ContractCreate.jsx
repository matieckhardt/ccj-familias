import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
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
import axios from "axios";
import ArancelesTable from "../Aranceles";
import MatriculaValores from "../MatriculaValores";

const SERVERURI = "https://familias.colegiociudadjardin.edu.ar/api/v1/";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 16,
    padding: "1cm",
    borderWidth: 400,
  },
  title: {
    fontSize: 16,
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
              <Box m={1} p={5}>
                <Typography variant="body1" align="right">
                  GARTENSTADT SCHULE – COLEGIO CIUDAD JARDIN
                </Typography>
                <Typography variant="body1" align="right">
                  COOPERATIVA ESCOLAR Y CULTURAL EL PALOMAR LTDA. – CUIT
                  30-53487825-3
                </Typography>
                <Typography variant="body1" align="right">
                  Matienzo 2799 – Ciudad jardín Lomas del Palomar (1684) –
                  Buenos Aires
                </Typography>
              </Box>
              <Box
                m={10}
                mt={0}
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
              <Box m={10} mb={3}>
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
                  {termConds.map((item) => (
                    <>
                      <ListItemText key={item.orden}>
                        <strong> {item.orden}. </strong> {item.termsCon}
                      </ListItemText>
                      <br />
                    </>
                  ))}
                </List>
              </Box>
            </Paper>
            <Box p={10}>
              <ArancelesTable aranceles={aranceles} />
              <MatriculaValores prices={valores} />
            </Box>
          </Box>
        </Page>
      </Box>
    </Document>
  );
}

export default ContractCreate;
