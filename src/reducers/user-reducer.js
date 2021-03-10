import { SIGNUP_USER, LOGIN_USER, CHECK_USER_LOGGED_IN, LOGOUT_USER } from '../actions/user-actions'

const initialState = {
    currentUser: {},
}

const usersReducer = (state = initialState, action) => {
    // console.log("from user reducer", action)
    console.log(action)
    switch (action.type) {
        case SIGNUP_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case LOGIN_USER:
            return {
                currentUser: action.payload
            }
        case CHECK_USER_LOGGED_IN:
            return {
                currentUser: action.payload
            }
        case LOGOUT_USER:
            return {
                currentUser: action.payload
            }
        default: return state
    }
}

export default usersReducer