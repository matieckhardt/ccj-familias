import { Button, IconButton, TextField } from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  FormControl,
  MenuItem,
  Typography,
  Paper,
  Box,
  ListSubheader,
} from "@mui/material";
import { useContext, useReducer, useState } from "react";
import { AppContext } from "../../context/store";
import { changeName, changeCurso, changeCupo, changeDivision } from "./actions";
import { reducerFunction } from "./reducer";
import { handleRegister } from "../../services/cupoCreate";
import { handleDelete } from "../../services/cupoDelete";
import { toast } from "react-hot-toast";
import { changeRegisteredIn } from "../../redux/actions/globalActions";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/material";

function RegisterCupo() {
  const { dispatch } = useContext(AppContext);
  const [hasErrorLogin, setHasErrorLogin] = useState(false);
  const [errorMessageLogin] = useState("");

  const [registerState, setRegisterState] = useReducer(reducerFunction, {
    name: "",
    curso: "",
    division: "",
    cupo: "",
  });

  const { name, curso, cupo, division } = registerState;
  const [cupos, setCupo] = React.useState([]);
  const [cursoName, setCurso] = React.useState([]);

  const handleChangeCurso = (event) => {
    console.log("curso,", event.target.value);
    setRegisterState(changeCurso(event.target.value));
  };

  const handleChangeName = (event) => {
    console.log("name,", event.target.value);

    setRegisterState(changeName(event.target.value));
  };
  const handleChangeCupo = (event) => {
    console.log("cupo", event.target.value);

    setRegisterState(changeCupo(event.target.value));
  };
  const handleChangeDivision = (event) => {
    return setRegisterState(changeDivision(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleRegister(name, curso, cupo, division)
      .then((response) => {
        console.log(response);
        dispatch(changeRegisteredIn(true));
        toast.success("Cupo created Succesfully");
        cuposData();
      })
      .catch((error) => {
        setHasErrorLogin(true);
        toast.error("hubo un error");
      });
  };
  const DeleteCupo = (id) => {
    console.log("id", id);
    handleDelete(id)
      .then((response) => {
        console.log(response);
        dispatch(changeRegisteredIn(true));
        toast.success("Cupo deleted Succesfully");
        cuposData();
      })
      .catch((error) => {
        setHasErrorLogin(true);
        toast.error("hubo un error");
      });
  };

  React.useEffect(() => {
    cuposData();
  }, []);

  const cuposData = async function (res, req) {
    const response = await fetch("http://localhost:80/api/v1/cupos/list");
    const objeto = await response.json();
    setCupo(objeto);
  };

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            marginLeft: "18%",
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: "100%",
              minHeight: "80vh",
              height: "auto",
            },
          }}
        >
          <Paper elevation={3}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: "50px",
                  marginBottom: "60px",
                  color: "#1876D1",
                  fontWeight: 800,
                }}
              >
                Crear Taller
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "20ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <Container sx={{ textAlign: "center" }}>
                  <TextField
                    name="name"
                    type="text"
                    label="Nombre del Taller"
                    value={name}
                    onChange={handleChangeName}
                  />

                  <TextField
                    select
                    label="Seleccione el Curso"
                    onChange={handleChangeCurso}
                    defaultValue={cursoName}
                  >
                    <ListSubheader>Primer Ciclo A </ListSubheader>
                    <MenuItem name="curso" value="1AP">
                      1ro
                    </MenuItem>
                    <MenuItem name="curso" value="2AP">
                      2do
                    </MenuItem>
                    <MenuItem name="curso" value="3AP">
                      3ro
                    </MenuItem>
                    <ListSubheader>Primer Ciclo B </ListSubheader>
                    <MenuItem name="curso" value="1BP">
                      1ro
                    </MenuItem>
                    <MenuItem name="curso" value="2BP">
                      2do
                    </MenuItem>
                    <MenuItem name="curso" value="3BP">
                      3ro
                    </MenuItem>
                    <ListSubheader>Segundo Ciclo A </ListSubheader>

                    <MenuItem name="curso" value="4AP">
                      4to
                    </MenuItem>
                    <MenuItem name="curso" value="5AP">
                      5to
                    </MenuItem>
                    <MenuItem name="curso" value="6AP">
                      6to
                    </MenuItem>
                    <ListSubheader>Segundo Ciclo B </ListSubheader>
                    <MenuItem name="curso" value="4BP">
                      4to
                    </MenuItem>
                    <MenuItem name="curso" value="5BP">
                      5to
                    </MenuItem>
                    <MenuItem name="curso" value="6BP">
                      6to
                    </MenuItem>
                    <ListSubheader>Secundaria A</ListSubheader>
                    <MenuItem name="curso" value="1AS">
                      1ro
                    </MenuItem>
                    <MenuItem name="curso" value="2AS">
                      2do
                    </MenuItem>
                    <MenuItem name="curso" value="3AS">
                      3ro
                    </MenuItem>

                    <MenuItem name="curso" value="4AS">
                      4to
                    </MenuItem>
                    <MenuItem name="curso" value="5AS">
                      5to
                    </MenuItem>
                    <MenuItem name="curso" value="6AS">
                      6to
                    </MenuItem>

                    <ListSubheader>Secundaria B </ListSubheader>
                    <MenuItem name="curso" value="1BS">
                      1ro
                    </MenuItem>
                    <MenuItem name="curso" value="2BS">
                      2do
                    </MenuItem>
                    <MenuItem name="curso" value="3BS">
                      3ro
                    </MenuItem>

                    <MenuItem name="curso" value="4BS">
                      4to
                    </MenuItem>
                    <MenuItem name="curso" value="5BS">
                      5to
                    </MenuItem>
                    <MenuItem name="curso" value="6BS">
                      6to
                    </MenuItem>
                  </TextField>

                  <TextField
                    label="Capacidad Maxima"
                    name="cupo"
                    type="number"
                    onChange={handleChangeCupo}
                  />

                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      marginTop: "9px",
                      marginLeft: "10px",
                      padding: "15px 20px",
                    }}
                  >
                    Register
                  </Button>
                  {hasErrorLogin && (
                    <Typography
                      variant="contained"
                      color="red"
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      {errorMessageLogin}
                    </Typography>
                  )}
                  {hasErrorLogin && (
                    <Typography
                      variant="contained"
                      color="red"
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      {errorMessageLogin}
                    </Typography>
                  )}
                </Container>
              </Box>
            </Box>
            <Container sx={{ marginTop: "50px" }}>
              <TableContainer>
                <Table
                  sx={{
                    maxWidth: 750,
                    marginLeft: "20%",
                    marginBottom: "50px",
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Taller</TableCell>
                      <TableCell>Curso</TableCell>
                      <TableCell align="left">Cupo</TableCell>
                      <TableCell align="left">Acciones</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cupos.map((cupos) => (
                      <TableRow
                        key={cupos.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {cupos.name}
                        </TableCell>
                        <TableCell align="left">{cupos.curso}</TableCell>
                        <TableCell align="left">{cupos.cupo}</TableCell>
                        <TableCell align="left">
                          <IconButton
                            onClick={() => DeleteCupo(cupos._id)}
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
          </Paper>
        </Box>
      </Container>
    </>
  );
}

export default RegisterCupo;
