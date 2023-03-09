import {
  CHANGE_NOMBRE,
  CHANGE_TALLER,
  CHANGE_CURSO,
  CHANGE_INSTRUMENTO,
} from "./constant";

export const changeNombre = (nombre) => {
  return {
    type: CHANGE_NOMBRE,
    payload: nombre,
  };
};

export const changeTaller = (taller) => {
  return {
    type: CHANGE_TALLER,
    payload: taller,
  };
};
export const changeCurso = (curso) => {
  return {
    type: CHANGE_CURSO,
    payload: curso,
  };
};

export const changeInstrumento = (instrumento) => {
  return {
    type: CHANGE_INSTRUMENTO,
    payload: instrumento,
  };
};
