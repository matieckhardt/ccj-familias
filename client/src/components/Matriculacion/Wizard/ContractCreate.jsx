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
import { makeStyles } from "@mui/styles";
import axios from "axios";

const SERVERURI = "http://127.0.0.1:80/api/v1/";

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: "#1976D2", // Custom color for the table header
    color: "#00000", // Custom text color for the table header
    fontWeight: 800,
  },
  tableHeaderCell: {
    color: "white", // Custom text color for the table header
    fontWeight: 800,
  },
}));

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
const aranceles = axios.get(SERVERURI + "aranceles");
const termConds = axios.get(SERVERURI + "termConds");

function ContractCreate() {
  const classes = useStyles();

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
                        <strong> {item.orden}. </strong> {item.termConds}
                      </ListItemText>
                      <br />
                    </>
                  ))}
                </List>
              </Box>
              <TableContainer component={Paper}>
                <Box p={15}>
                  <Table>
                    <TableHead>
                      <TableRow className={classes.tableHeader}>
                        <TableCell
                          className={classes.tableHeaderCell}
                          rowSpan={2}
                        >
                          ARANCELES
                        </TableCell>
                        <TableCell
                          className={classes.tableHeaderCell}
                          colSpan={3}
                        >
                          NIVEL INICIAL
                        </TableCell>
                        <TableCell
                          className={classes.tableHeaderCell}
                          colSpan={2}
                        >
                          Nivel Primario
                        </TableCell>
                        <TableCell
                          className={classes.tableHeaderCell}
                          rowSpan={2}
                        >
                          Nivel Secundario
                        </TableCell>
                      </TableRow>
                      <TableRow className={classes.tableHeader}>
                        <TableCell className={classes.tableHeaderCell}>
                          Jornada Simple
                          <br />
                          (Salas 1 a 4)
                        </TableCell>
                        <TableCell className={classes.tableHeaderCell}>
                          Jornada Completa <br />
                          (Salas 1 a 4)
                        </TableCell>
                        <TableCell className={classes.tableHeaderCell}>
                          Sala de 5 años
                        </TableCell>
                        <TableCell className={classes.tableHeaderCell}>
                          1º a 3º. año
                        </TableCell>
                        <TableCell className={classes.tableHeaderCell}>
                          4º a 6º año
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Valor Nominal</TableCell>
                        <TableCell>$55.291</TableCell>
                        <TableCell>$ 6183 cada una</TableCell>
                        <TableCell>$26.500</TableCell>
                        <TableCell>
                          A partir del 2o. hermano (alumno o ingresante) se
                          bonifica el 20%
                        </TableCell>
                        <TableCell>
                          10 % de descuento a hijos de exalumnos
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Valor con pronto pago</TableCell>
                        <TableCell>$47.000</TableCell>
                        <TableCell>$ 10967 cada una</TableCell>
                        <TableCell>$47.000</TableCell>
                        <TableCell>
                          A partir del 2o. hermano (alumno o ingresante) se
                          bonifica el 20%
                        </TableCell>
                        <TableCell>
                          10 % de descuento a hijos de exalumnos
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </TableContainer>
            </Paper>
          </Box>
        </Page>
      </Box>
    </Document>
  );
}

export default ContractCreate;
