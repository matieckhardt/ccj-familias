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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MatriculaValores from "../Contrato/MatriculaValores";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: "#1976D2",
    color: "#00000",
    fontWeight: 800,
  },
  tableHeaderCell: {
    color: "white",
    fontWeight: 800,
  },
}));

const SERVERURI = "https://familias.colegiociudadjardin.edu.ar/api/v1/";

function PricesStep(data) {
  const [valores, setMatricula] = React.useState([]);
  const [formaPago, setFormaPago] = React.useState("");
  React.useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await fetch(SERVERURI + "valoresMatri");
        const data = await response.json();
        setMatricula(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrices();
  }, []);

  const classes = useStyles();

  const handleChangeFP = (event) => {
    const selectedValue = event.target.value;
    console.log("handleChange Sel val", selectedValue);
    setFormaPago(selectedValue);
    handleSaveFP(data, selectedValue);
  };

  const handleSaveFP = async (data, selectedValue) => {
    console.log("selected val", selectedValue);
    console.log("DNI", data.data[0].DNI_P);
    try {
      const postData = {
        DNI_P: data.data[0].DNI_P,
        LEYENF1: selectedValue,
      };

      await axios.post(
        "https://familias.colegiociudadjardin.edu.ar/api/v1/families/createOrUpdate",
        postData
      );

      console.log("Data saved successfully");
      // Perform additional actions after saving data
    } catch (error) {
      console.error(error);
    }
  };
  const familiasExistentes = data.data[0].LEYENF3;
  console.log("familias Existentes", familiasExistentes);
  return (
    <Box p={10}>
      <Box>
        <MatriculaValores prices={valores} />
      </Box>
      <Box pt={5}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Forma de Pago</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formaPago}
            label="Forma de Pago"
            onChange={handleChangeFP}
          >
            {!familiasExistentes ? (
              [
                <MenuItem key="1" value="Matricula: Un Pago">
                  1 Pago Bonificado
                </MenuItem>,
                <MenuItem key="2" value="Matricula: Cuotas">
                  6 Cuotas
                </MenuItem>,
              ]
            ) : (
              <MenuItem value="Matricula: Un Pago">1 Pago Bonificado</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
}

export default PricesStep;
