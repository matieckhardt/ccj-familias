import {
  CHANGE_NOMBRE,
  CHANGE_APELLIDO,
  CHANGE_IDCURSO,
  CHANGE_CURSO,
  CHANGE_DNI,
  CHANGE_LEGAJO,
} from "./constant";

/* 
    Las funcion reductora recibe dos parametros,

    1 - El estado actual, o el store actual que se encuentra
    2 - La action a realizar 

    Las funciones reductoras tienen que seguir las siguientes reglas:

    1 - Se debe devolver siempre algo o almenos el estado actual o store actual
    2 - Debe ser una funcion pura.
        - Una funcion pura es aquella que no cambia los valores de entrada
            function ejemplo(name){
                name = "otro nombre"; // Esto ya no es una funcion pura
            }

*/
export const reducerFunction = (state, action) => {
  // console.log(action);

  switch (action.type) {
    case CHANGE_NOMBRE:
      // state.name = action.payload; // Ya no es una funcion pura
      // return state;
      return {
        ...state,
        nombre: action.payload,
      };
    case CHANGE_IDCURSO:
      // state.name = action.payload; // Ya no es una funcion pura
      // return state;
      return {
        ...state,
        idCurso: action.payload,
      };
    case CHANGE_APELLIDO:
      return {
        ...state,
        apellido: action.payload,
      };
    case CHANGE_CURSO:
      return {
        ...state,
        curso: action.payload,
      };
    case CHANGE_DNI:
      return {
        ...state,
        dni: action.payload,
      };
    case CHANGE_LEGAJO:
      return {
        ...state,
        legajo: action.payload,
      };
    default:
      return state;
  }
};
