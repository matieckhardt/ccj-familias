import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: "#1976D2", // Custom color for the table header
    color: "white", // Custom text color for the table header
    fontWeight: 800,
  },
  tableHeaderCell: {
    color: "white", // Custom text color for the table header
    fontWeight: 800,
  },
}));

const ArancelesTable = ({ aranceles }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow className={classes.tableHeader}>
            <TableCell className={classes.tableHeaderCell} rowSpan={2}>
              ARANCELES
            </TableCell>
            <TableCell className={classes.tableHeaderCell} colSpan={3}>
              NIVEL INICIAL
            </TableCell>
            <TableCell className={classes.tableHeaderCell} colSpan={2}>
              Nivel Primario
            </TableCell>
            <TableCell className={classes.tableHeaderCell} rowSpan={2}>
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
          {aranceles.map((arancel, index) => (
            <TableRow key={index}>
              <TableCell>
                {arancel.formaPago === "Nominal"
                  ? "Valor Nominal"
                  : "Valor con pronto pago"}
              </TableCell>
              <TableCell>${arancel.kinder1}</TableCell>
              <TableCell>${arancel.kinder2}</TableCell>
              <TableCell>${arancel.kinder3}</TableCell>
              <TableCell>${arancel.primario1}</TableCell>
              <TableCell>${arancel.primario2}</TableCell>
              <TableCell>${arancel.secundario}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ArancelesTable;
