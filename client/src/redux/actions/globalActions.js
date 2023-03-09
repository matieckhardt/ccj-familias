import { CHANGE_LOGGED_IN } from "../constants/globalConstants"
import { CHANGE_REGISTERED_IN } from "../constants/globalConstants"



export const changeLoggedIn = (isLoggedIn) =>{
    return {
        type: CHANGE_LOGGED_IN,
        payload: isLoggedIn,
    };
}
export const changeRegisteredIn = (isLoggedIn) =>{
    return {
        type: CHANGE_REGISTERED_IN,
        payload: isLoggedIn,
    };
}