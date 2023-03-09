import { CHANGE_AVATAR_AND_IMAGE, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD } from "./constant";

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
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case CHANGE_AVATAR_AND_IMAGE:
            return {
                ...state,
                avatar: action.payload.avatar,
                image: action.payload.image
            }
        default:
            return state;
    }
}