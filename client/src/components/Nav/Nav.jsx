import style from "./Nav.module.css"
import logo from "./img/logo.png"
import {useNavigate} from "react-router-dom"


export default function Nav(){
    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
      };
      const navigateLogin = () => {
        navigate('/login');
      };

    const logOut = () => {

        localStorage.clear();
            navigateHome();
            window.location.reload();

      }

    return(
        <div className={style.containerNav}>
            <div className={style.fotoNav}>
                <a href="/"><img  alt="logo" className={style.foto} src={logo}></img></a>
            <div className={style.botonesNav}>
             <ul className={style.ulNav}>
                <li className={style.liNav}>
                    <a className={style.aNav} href="/">Home</a>
                </li>
                <li className={style.liNav}>
                    <a className={style.aNav} href="/Login">Login</a>
                </li>
                <li className={style.liNav}>
                    <a className={style.aNav} href="/Register">Register</a>
                </li>
             </ul>
            </div>
            </div>

{localStorage.getItem("token")?
                <button className={style.boton} onClick={logOut}>Log Out</button>
:<button className={style.boton} onClick={navigateLogin}>Log In</button>}

        </div>
    )
} 