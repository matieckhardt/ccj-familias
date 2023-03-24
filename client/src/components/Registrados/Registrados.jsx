import { Box, Typography, Paper } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../context/store";
import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableBody,
  TableRow,
  TableHead,
  Container,
} from "@mui/material";

function RegisterStudent() {
  const { dispatch } = useContext(AppContext);
  const [User, setUser] = React.useState([]);

  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async function (res, req) {
    const token = JSON.stringify(localStorage.token);
    const response = await fetch(
      "https://familias.colegiociudadjardin.edu.ar/api/v1/auth/user/profile?token=" +
        token
    );
    const objeto = await response.json();
    setUser(objeto);
  };
  return <Typography> Alumnos Registrados en instrumentos</Typography>;
}

export default RegisterStudent;
