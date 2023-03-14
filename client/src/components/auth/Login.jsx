import {
  Button,
  CardContent,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { handleLogin } from "../../services/authorization";
import { AppContext } from "../../context/store";
import { changeLoggedIn } from "../../redux/actions/globalActions";
import style from "./Login.module.css";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Nav from "../Nav/Nav";
import SideBar from "../SideBar/SideBar";

function Login() {
  const { isLoggedIn, dispatch } = useContext(AppContext);

  const [hasErrorLogin, setHasErrorLogin] = useState(false);
  const [errorMessageLogin] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    handleLogin(email, password)
      .then((response) => {
        dispatch(changeLoggedIn(true));
        toast.success("Logged successfully");
      })
      .catch((error) => {
        console.log(error);
        setHasErrorLogin(true);
        toast.error("Wrong Credentials");
      });
  };

  return (
    <>
      <Nav></Nav>
      {isLoggedIn && <Navigate to="/Mis%20Datos" replace={true} />}
      <div className={style.containerRegister}>
        <div className={style.containerFormulario}>
          <div className={style.containerBotonAtras}>
            <a className={style.botonAtras} href="/">
              <BsFillArrowLeftCircleFill />
            </a>
          </div>
          <h1 className={style.tituloFormulario}>Acceso Familias</h1>
          <form className={style.formulario} onSubmit={handleSubmit}>
            <div className={style.containerImagen}></div>
            <CardContent
              sx={{
                minHeight: 400,
                minWidth: 400,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "50px",
              }}
            >
              <FormControl>
                <InputLabel>Email</InputLabel>
                <Input
                  name="userMail"
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                />
                <FormHelperText>Ingrese el mail del Responsable</FormHelperText>
              </FormControl>

              <FormControl>
                <InputLabel>Contraseña</InputLabel>
                <Input
                  name="userPassword"
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  autoComplete="off"
                />
                <FormHelperText>Por favor ingrese su contraseña</FormHelperText>
              </FormControl>
              <Box
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
                  Iniciar Sesión
                </Button>
              </Box>
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
            </CardContent>
            <h4>
              {" "}
              Si es la primera vez que ingresa y no se encuentra registrado,
              <br></br> cree su cuenta<br></br>
              <a href="/register">AQUI</a>
            </h4>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
