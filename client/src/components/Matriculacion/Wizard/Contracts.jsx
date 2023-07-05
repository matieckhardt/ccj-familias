import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Contracts = ({ datosCargados }) => {
  return (
    <Box p={10}>
      <div>
        <h1>Contracts</h1>
        <Button
          variant="contained"
          component={Link}
          to={"/Contract/" + datosCargados._id}
          target="_blank"
        >
          Abrir Contrato
        </Button>
      </div>
    </Box>
  );
};

export default Contracts;
