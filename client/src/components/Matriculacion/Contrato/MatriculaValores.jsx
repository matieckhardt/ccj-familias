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
    backgroundColor: "#1976D2",
    color: "#00000",
    fontWeight: 800,
  },
  tableHeaderCell: {
    color: "black",
    fontWeight: 800,
  },
}));

function MatriculaValores({ prices }) {
  const classes = useStyles();

  if (!prices) {
    // Data is not available, render a loading state or an error message
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Box>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell
                className={classes.tableHeaderCell}
                sx={{ minWidth: 5 }}
                colSpan={1}
              >
                Tipo de Familia
              </TableCell>
              <TableCell className={classes.tableHeaderCell} colSpan={1}>
                Nivel
              </TableCell>
              <TableCell
                className={classes.tableHeaderCell}
                sx={{ minWidth: 170 }}
                colSpan={1}
              >
                Un pago bonificado,
                <br />
                <Typography variant="caption">antes del 30/7/2023</Typography>
              </TableCell>
              <TableCell
                className={classes.tableHeaderCell}
                sx={{ minWidth: 170 }}
                colSpan={1}
              >
                6 Cuotas,
                <br />
                <Typography variant="caption">
                  Julio a Diciembre 2023
                </Typography>
              </TableCell>
              <TableCell
                className={classes.tableHeaderCell}
                size="small"
                colSpan={1}
              >
                Bonificaciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prices.map((price, index) => (
              <TableRow key={index}>
                {price.tipoFamilia ? (
                  <TableCell className={classes.tableHeaderCell} colSpan={1}>
                    Nueva
                  </TableCell>
                ) : (
                  <TableCell className={classes.tableHeaderCell} colSpan={1}>
                    Existente
                  </TableCell>
                )}
                <TableCell>{price.nivel}</TableCell>
                <TableCell>${price.contado}</TableCell>
                <TableCell>${price.cuotas} cada una</TableCell>
                <TableCell>{price.bonif}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </TableContainer>
  );
}

export default MatriculaValores;
