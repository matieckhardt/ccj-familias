import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import SideBar from "./components/SideBar/SideBar";
import Alumnos from "./components/Alumnos/Alumnos";
import Talleres from "./components/Talleres/Talleres";
import Ajedrez from "./components/Ajedrez/Ajedrez";
import Cupos from "./components/Cupos/Cupos";
import CodeGPT from "./components/CodeGPT/CodeGPT";

import { Route, useLocation, Link } from "react-router-dom";

function Wrapper() {
  const location = useLocation();

  return (
    <div className="App">
      <div>
        <SideBar />

        {location.pathname === "/Mis%20Datos" ? (
          <Dashboard></Dashboard>
        ) : location.pathname === "/Mis%20Alumnos" ? (
          <Alumnos></Alumnos>
        ) : location.pathname === "/Ajedrez" ? (
          <Ajedrez></Ajedrez>
        ) : location.pathname === "/Cupos" ? (
          <Cupos></Cupos>
        ) : location.pathname === "/CodeGPT" ? (
          <CodeGPT></CodeGPT>
        ) : (
          <Talleres></Talleres>
        )}
      </div>
    </div>
  );
}

export default Wrapper;
