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

function MatriculaValores({ prices }) {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
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
              {prices.map((price, index) => (
                <TableRow key={index}>
                  <TableCell>{price.nivel}</TableCell>
                  <TableCell>${price.contado}</TableCell>
                  <TableCell>${price.cuotas} cada una</TableCell>
                  <TableCell>${price.contado}</TableCell>
                  <TableCell>{price.bonif}</TableCell>
                  <TableCell>10% de descuento a hijos de exalumnos</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </TableContainer>
    </>
  );
}

export default MatriculaValores;
