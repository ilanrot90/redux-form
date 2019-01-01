import { SIGN_OUT, SIGN_IN } from '../actionTypes';

export const signIn = (id) => {
    return {
        type: SIGN_IN,
        payload: id
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT,
    }
}
