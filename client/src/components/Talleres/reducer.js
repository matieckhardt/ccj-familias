import {
  CHANGE_TALLER,
  CHANGE_NOMBRE,
  CHANGE_INSTRUMENTO,
  CHANGE_CURSO,
  CHANGE_DIVISION,
} from "./constant";

export const reducerFunction = (state, action) => {
  switch (action.type) {
    case CHANGE_NOMBRE:
      return {
        ...state,
        nombre: action.payload,
      };
    case CHANGE_TALLER:
      return {
        ...state,
        taller: action.payload,
      };
    case CHANGE_INSTRUMENTO:
      return {
        ...state,
        instrumento: action.payload,
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
