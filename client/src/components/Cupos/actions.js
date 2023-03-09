/* 
    El objeto que devuelve cada accion sera la comunicacion directa
    hacia la funcion reductora que lo trabajara para cambiar el estado

    El estandar es devolver un objeto con la siguiente estructura
    {
        type: "El tipo de accion a ejecutar",
        payload: "La informacion a procesar de este tipo de accion"
    }
*/

import {
  CHANGE_NAME,
  CHANGE_CURSO,
  CHANGE_CUPO,
  CHANGE_DIVISION,
} from "./constant";

export const changeName = (name) => {
  // return {
  //     quieroHacerEsto: "Cambiar nombre",
  //     actualizaEsto: name
  // };

  return {
    type: CHANGE_NAME,
    payload: name,
  };
};

export const changeCurso = (curso) => {
  return {
    type: CHANGE_CURSO,
    payload: curso,
  };
};

export const changeCupo = (cupo) => {
  return {
    type: CHANGE_CUPO,
    payload: cupo,
  };
};
export const changeDivision = (division) => {
  return {
    type: CHANGE_DIVISION,
    payload: division,
  };
};
