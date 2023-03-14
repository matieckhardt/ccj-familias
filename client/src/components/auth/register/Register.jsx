import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../context/store";
import { changeEmail, changeName, changePassword } from "./actions";
import { reducerFunction } from "./reducer";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { handleRegister } from "../../../services/authorization";
import { toast } from "react-hot-toast";
import { changeRegisteredIn } from "../../../redux/actions/globalActions";
import Nav from "../../Nav/Nav";
import style from "./Register.module.css";

function Register() {
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();
  const [hasErrorLogin, setHasErrorLogin] = useState(false);
  const [errorMessageLogin] = useState("");

  const [registerState, setRegisterState] = useReducer(reducerFunction, {
    name: "",
    email: "",
    password: "",
    avatar: "",
    image: "",
  });

  const { name, email, password } = registerState;

  const handleChangeEmail = (event) => {
    setRegisterState(changeEmail(event.target.value));
  };

  const handleChangePassword = (event) => {
    setRegisterState(changePassword(event.target.value));
  };

  const handleChangeName = (event) => {
    setRegisterState(changeName(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleRegister(name, email, password)
      .then((response) => {
        console.log(response);
        dispatch(changeRegisteredIn(true));
        toast.success("User created Succesfully");
        navigate("/login");
      })
      .catch((error) => {
        setHasErrorLogin(true);
        toast.error("email already registered");
      });
  };
  return (
    <>
      <Nav></Nav>
      <div className={style.containerRegister}>
        <div className={style.containerFormulario}>
          <div className={style.containerBotonAtras}>
            <a className={style.botonAtras} href="/">
              <BsFillArrowLeftCircleFill />
            </a>
          </div>
          <h1 className={style.tituloFormulario}>Alta de Familia</h1>
          <form className={style.formulario} onSubmit={handleSubmit}>
            <div className={style.containerImagen}></div>
            <FormControl sx={{ width: "50%" }}>
              <InputLabel>Nombre y Apellido</InputLabel>
              <Input
                name="userName"
                type="text"
                value={name}
                onChange={handleChangeName}
              />
              <FormHelperText>
                Ingrese el nombre y apellido del responsable declarado
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <InputLabel>Email del Responsable</InputLabel>
              <Input
                name="userMail"
                type="email"
                value={email}
                onChange={handleChangeEmail}
              />
              <FormHelperText>
                {" "}
                Ingrese UNICAMENTE el mail del responsable declarado en
                administracion.
              </FormHelperText>
            </FormControl>
            <FormControl sx={{ width: "50%" }}>
              <InputLabel>Contraseña</InputLabel>
              <Input
                name="userPassword"
                type="password"
                value={password}
                onChange={handleChangePassword}
              />
              <FormHelperText>Escriba una nueva contraseña</FormHelperText>
            </FormControl>
            <br />

            <FormControl
              sx={{
                marginTop: "10px",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Button
                type="submit"
                sx={{
                  padding: "10px 20px",
                }}
              >
                Registrar Responsable
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
            </FormControl>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
