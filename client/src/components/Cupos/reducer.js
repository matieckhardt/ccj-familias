import {
  CHANGE_DIVISION,
  CHANGE_NIVEL,
  CHANGE_NAME,
  CHANGE_CURSO,
  CHANGE_CUPO,
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
    case CHANGE_NAME:
      // state.name = action.payload; // Ya no es una funcion pura
      // return state;
      return {
        ...state,
        name: action.payload,
      };
    case CHANGE_CUPO:
      // state.name = action.payload; // Ya no es una funcion pura
      // return state;
      return {
        ...state,
        cupo: action.payload,
      };
    case CHANGE_NIVEL:
      return {
        ...state,
        nivel: action.payload,
      };
    case CHANGE_CURSO:
      return {
        ...state,
        curso: action.payload,
      };
    case CHANGE_DIVISION:
      return {
        ...state,
        division: action.payload,
      };

    default:
      return state;
  }
};
