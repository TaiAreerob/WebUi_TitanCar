import { actionTypes } from '../actionTypes'
// ACTIONS
export const setUser = user => dispatch => {
    return dispatch({
        type: actionTypes.SET_USER,
        user,
    })
}

export const removeUser = () => dispatch => {
    return dispatch({
        type: actionTypes.REMOVE_USER,
    })
}
