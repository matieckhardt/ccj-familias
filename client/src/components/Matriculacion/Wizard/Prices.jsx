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
import ArancelesTable from "../Aranceles";

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
const SERVERURI = "https://familias.colegiociudadjardin.edu.ar/api/v1/";

function PricesStep() {
  const [aranceles, setAranceles] = React.useState([]);

  React.useEffect(() => {
    const aranceles = fetch(SERVERURI + "aranceles")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAranceles(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const classes = useStyles();

  return (
    <>
      <ArancelesTable aranceles={aranceles} />{" "}
    </>
  );
}

export default PricesStep;
