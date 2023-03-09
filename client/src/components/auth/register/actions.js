
/* 
    El objeto que devuelve cada accion sera la comunicacion directa
    hacia la funcion reductora que lo trabajara para cambiar el estado

    El estandar es devolver un objeto con la siguiente estructura
    {
        type: "El tipo de accion a ejecutar",
        payload: "La informacion a procesar de este tipo de accion"
    }
*/

import { CHANGE_AVATAR_AND_IMAGE, CHANGE_EMAIL, CHANGE_NAME, CHANGE_PASSWORD } from "./constant";

export const changeName = (name)=>{

    // return {
    //     quieroHacerEsto: "Cambiar nombre",
    //     actualizaEsto: name
    // };

    return {
        type: CHANGE_NAME,
        payload: name,
    }
}

export const changeEmail = (email)=>{

    return {
        type: CHANGE_EMAIL,
        payload:email
    };

}

export const changePassword = (password)=>{
    
    return {
        type: CHANGE_PASSWORD,
        payload:password
    };
}

export const changeAvatarAndImage = (avatar,image)=>{

    return {
        type: CHANGE_AVATAR_AND_IMAGE,
        payload:{
            avatar,
            image
        }
    }

}

