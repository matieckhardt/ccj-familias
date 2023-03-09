import {  CHANGE_LOGGED_IN } from "../constants/globalConstants";


export const globalReducer = (state, action) => {

    switch (action.type) {

        case CHANGE_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload
            }
        default:
            return state;
    }

}