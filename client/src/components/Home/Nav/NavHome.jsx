import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Logo from "./logo-01.png";

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-gart fixed-top py-0"
        id="navbar"
      >
        <a className="navbar-brand" href="/">
          <img className="img-brand" src={Logo} alt="logo Gartenstadt Schule" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav mr-auto d-none" id="menuMobile">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                NUESTRO COLEGIO
              </a>
              <div
                className="dropdown-menu text-center"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/nuestrocolegio#director">
                  Nuestro director
                </a>
                <a className="dropdown-item" href="/nuestrocolegio#staff">
                  Staff
                </a>
                <a className="dropdown-item" href="/nuestrocolegio#historia">
                  Historia
                </a>
                <a className="dropdown-item" href="/nuestrocolegio#calendario">
                  Calendario escolar
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                DEPARTAMENTOS
              </a>
              <div
                className="dropdown-menu text-center"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="/deutsch">
                  Departamento de Alemán
                </a>
                <a className="dropdown-item" href="/english">
                  Departamento de Inglés
                </a>
                <a className="dropdown-item" href="/musica">
                  Departamento de Música
                </a>
                <a className="dropdown-item disabled" href="/informatica">
                  Departamento de Informática
                </a>
                <a className="dropdown-item" href="/educacionfisica">
                  Departamento de Educación Física
                </a>

                <a className="dropdown-item" href="/secundaria">
                  Dirección Nivel Secundaria
                </a>
                <a className="dropdown-item" href="/primaria">
                  Dirección Nivel Primaria
                </a>
                <a className="dropdown-item" href="/inicial">
                  Dirección Nivel Inicial
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                EL GARTENSTADT
              </a>
              <div
                className="dropdown-menu text-center"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item disabled" href="/vidaescolar">
                  Vida Escolar
                </a>
                <a className="dropdown-item" href="/orientacion">
                  Equipo de Orientación Escolar
                </a>
                <a className="dropdown-item disabled" href="/intercambios">
                  Schüleraustausch
                </a>
                <a className="dropdown-item disabled" href="/veronica">
                  Schullandheim Verónica
                </a>
                <a
                  className="dropdown-item disabled"
                  href="/serviciocomunitario"
                >
                  Community Service
                </a>
                <a className="dropdown-item disabled" href="/mejorpromedio">
                  Ehrentafel
                </a>
                <a className="dropdown-item disabled" href="/aulas-digitales">
                  Aulas Digitales: Educational Technology
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                EVENTOS
              </a>
              <div
                className="dropdown-menu text-center"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item disabled" href="/concerts">
                  English Concerts
                </a>
                <a className="dropdown-item disabled" href="/expresarte">
                  Expresarte
                </a>
                <a className="dropdown-item disabled" href="/expresarte">
                  Familienfest
                </a>
                <a className="dropdown-item disabled" href="/expoalemania">
                  Expoalemania
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ADMINISTRACIÓN
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ADMISIONES
              </a>
            </li>
          </ul>
          <div id="navbarGart">
            <div>
              <div className="btn-group dropdown h-100">
                <button
                  type="button"
                  className="dropdown-toggle btn btn-block"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  NUESTRO COLEGIO
                </button>
                <div className="dropdown-menu bg-transparente pt-4 mt-n1">
                  <a
                    className="dropdown-item text-white"
                    href="/nuestrocolegio#director"
                  >
                    Nuestro director
                  </a>
                  <a
                    className="dropdown-item text-white"
                    href="/nuestrocolegio#staff"
                  >
                    Staff
                  </a>
                  <a
                    className="dropdown-item text-white"
                    href="/nuestrocolegio#historia"
                  >
                    Historia
                  </a>
                  <a
                    className="dropdown-item text-white"
                    href="/nuestrocolegio#calendario"
                  >
                    Calendario escolar
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="btn-group dropdown h-100">
                <button
                  type="button"
                  className="dropdown-toggle btn btn-block"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  DEPARTAMENTOS
                </button>
                <div className="dropdown-menu bg-transparente pt-4 mt-n1">
                  <a className="dropdown-item text-white" href="/deutsch">
                    Departamento de Alemán
                  </a>
                  <a className="dropdown-item text-white" href="/english">
                    Departamento de Inglés
                  </a>
                  <a className="dropdown-item text-white" href="/musica">
                    Departamento de Música
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/informatica"
                  >
                    Departamento de Informática
                  </a>
                  <a
                    className="dropdown-item text-white"
                    href="/educacionfisica"
                  >
                    Departamento de Educación Física
                  </a>

                  <a className="dropdown-item text-white" href="/secundaria">
                    Dirección Nivel Secundaria
                  </a>
                  <a className="dropdown-item text-white" href="/primaria">
                    Dirección Nivel Primaria
                  </a>
                  <a className="dropdown-item text-white" href="/inicial">
                    Dirección Nivel Inicial
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="btn-group dropdown h-100">
                <button
                  type="button"
                  className="dropdown-toggle btn btn-block"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  EL GARTENSTADT
                </button>
                <div className="dropdown-menu bg-transparente pt-4 mt-n1">
                  <a
                    className="dropdown-item text-white disabled"
                    href="/vidaescolar"
                  >
                    Vida Escolar
                  </a>
                  <a className="dropdown-item text-white" href="/orientacion">
                    Equipo de Orientación Escolar
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/intercambios"
                  >
                    Schüleraustausch
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/veronica"
                  >
                    Schullandheim Verónica
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/serviciocomunitario"
                  >
                    Community Service
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/mejorpromedio"
                  >
                    Ehrentafel
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/aulas-digitales"
                  >
                    Aulas Digitales: Educational Technology
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="btn-group dropdown h-100">
                <button
                  type="button"
                  className="dropdown-toggle btn btn-block"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  EVENTOS
                </button>
                <div className="dropdown-menu bg-transparente pt-4 mt-n1">
                  <a
                    className="dropdown-item text-white disabled"
                    href="/concerts"
                  >
                    English Concerts
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/expresarte"
                  >
                    Expresarte
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/expresarte"
                  >
                    Familienfest
                  </a>
                  <a
                    className="dropdown-item text-white disabled"
                    href="/expoalemania"
                  >
                    Expoalemania
                  </a>
                </div>
              </div>
            </div>
            <div>
              <a href="/Administracion" className="btn btn-block">
                ADMINISTRACIÓN
              </a>
            </div>
            <div>
              <a href="/Admisiones" className="btn btn-block">
                ADMISIÓN
              </a>
            </div>
          </div>
          <ul className="navbar-nav ml-auto border-right">
            <li className="nav-item pr-3">
              <a className="nav-link" href="/login">
                Login
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/Index">
                Colegio Ciudad Jardin
              </a>
            </li>
          </ul>
          <img className="img-lang" src="/img/iconos/iconos-13.png" alt="" />
        </div>
      </nav>
    </>
  );
};

export default NavigationBar;
