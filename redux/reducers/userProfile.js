import { actionTypes } from '../actionTypes'

const initialState = {

}

// REDUCERS
export const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return Object.assign({}, state, { ...action.user })
        default: return state
    }
}
