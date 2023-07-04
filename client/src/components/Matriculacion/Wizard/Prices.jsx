import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

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

function PricesStep() {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Typography>Valores Matricula </Typography>
        <Box p={15}>
          <Table>
            <TableHead>
              <TableRow className={classes.tableHeader}>
                <TableCell className={classes.tableHeaderCell} rowSpan={2}>
                  Matriculacion 2014
                </TableCell>
                <TableCell className={classes.tableHeaderCell} colSpan={3}>
                  Familias de la escuela
                </TableCell>
                <TableCell className={classes.tableHeaderCell} colSpan={2}>
                  Familias Nuevas
                </TableCell>
              </TableRow>
              <TableRow className={classes.tableHeader}>
                <TableCell className={classes.tableHeaderCell}>
                  1 pago bonificado, <br />
                  antes del 30/7/2023
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  6 cuotas, <br />
                  julio a diciembre 2023
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Bonificaciones
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  1 pago, <br />
                  al realizar la inscripción
                </TableCell>
                <TableCell className={classes.tableHeaderCell}>
                  Bonificaciones
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Nivel inicial</TableCell>
                <TableCell>$26.500</TableCell>
                <TableCell>$ 6183 cada una</TableCell>
                <TableCell>$26.500</TableCell>
                <TableCell>
                  A partir del 2o. hermano (alumno o ingresante) se bonifica el
                  20%
                </TableCell>
                <TableCell>10 % de descuento a hijos de exalumnos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nivel Primario</TableCell>
                <TableCell>$47.000</TableCell>
                <TableCell>$ 10967 cada una</TableCell>
                <TableCell>$47.000</TableCell>
                <TableCell>
                  A partir del 2o. hermano (alumno o ingresante) se bonifica el
                  20%
                </TableCell>
                <TableCell>10 % de descuento a hijos de exalumnos</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Nivel Secundario</TableCell>
                <TableCell>$49.000</TableCell>
                <TableCell>$ 11433 cada una</TableCell>
                <TableCell>$49.000</TableCell>
                <TableCell>
                  A partir del 2o. hermano (alumno o ingresante) se bonifica el
                  20%
                </TableCell>
                <TableCell>10 % de descuento a hijos de exalumnos</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </>
  );
}

export default PricesStep;
