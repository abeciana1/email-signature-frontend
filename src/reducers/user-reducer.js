import { SIGNUP_USER, LOGIN_USER } from '../actions/user-actions'

const initialState = {
    currentUser: {},
}

const usersReducer = (state = initialState, action) => {
    // console.log("from user reducer", action)
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case LOGIN_USER:
            return {
                user: action.payload
            }
        default: return state
    }
}

export default usersReducer