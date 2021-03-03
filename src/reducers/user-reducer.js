import { SIGNUP_USER, LOGIN_USER } from '../actions/user-actions'

const initialState = {
    user: {},
}

const usersReducer = (state = initialState, action) => {
    console.log("from user reducer", action)
    switch (action.type) {
        case SIGNUP_USER:
            // console.log("inside user reducer", action.payload)
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_USER:
            return {
                user: action.payload
            }
        default: return state
    }
}

export default usersReducer