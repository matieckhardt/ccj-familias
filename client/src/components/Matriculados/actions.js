import {
  CHANGE_NOMBRE,
  CHANGE_APELLIDO,
  CHANGE_IDCURSO,
  CHANGE_CURSO,
  CHANGE_DNI,
  CHANGE_LEGAJO,
} from "./constant";

export const changeNombre = (nombre) => {
  return {
    type: CHANGE_NOMBRE,
    payload: nombre,
  };
};

export const changeApellido = (apellido) => {
  return {
    type: CHANGE_APELLIDO,
    payload: apellido,
  };
};

export const changeCurso = (curso) => {
  return {
    type: CHANGE_CURSO,
    payload: curso,
  };
};

export const changeidCurso = (idCurso) => {
  return {
    type: CHANGE_IDCURSO,
    payload: idCurso,
  };
};
export const changeLegajo = (legajo) => {
  return {
    type: CHANGE_LEGAJO,
    payload: legajo,
  };
};
export const changeDni = (dni) => {
  return {
    type: CHANGE_DNI,
    payload: dni,
  };
};
