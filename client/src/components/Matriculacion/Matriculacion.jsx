import React from "react";
import { TextField, Box, Input } from "@mui/material";
import SideBar from "../SideBar/SideBar";
import { Container, Paper, Typography, Button } from "@mui/material";
import Wizard from "./Wizard";

const Matriculacion = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            marginLeft: "13%",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <Paper elevation={20}>
            <Box sx={{ padding: 5 }}>
              <Wizard />
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default Matriculacion;
