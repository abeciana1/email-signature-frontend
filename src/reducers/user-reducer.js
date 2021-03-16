import { SIGNUP_USER, LOGIN_USER, CHECK_USER_LOGGED_IN, LOGOUT_USER, VISITOR_USER } from '../actions/user-actions'

const initialState = {
    currentUser: null,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_USER:
            return {
                // ...state,
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
        case VISITOR_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default: return state
    }
}

export default usersReducer