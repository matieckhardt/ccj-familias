import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Contracts = ({ datosCargados }) => {
  return (
    <Box p={10}>
      <div>
        <h2>
          Porfavor, descargue el contrato y revise que toda la informacion fue
          cargada correctamente
        </h2>
        <p>
          Debera imprimir el contrato junto a los reglamentos para presentarlos
          firmados en administracion, Muchas Gracias
        </p>
        <br></br>
        <Button
          variant="contained"
          component={Link}
          to={"/Contract/" + datosCargados.DNI_P}
          target="_blank"
        >
          Abrir Contrato
        </Button>
      </div>
    </Box>
  );
};

export default Contracts;
