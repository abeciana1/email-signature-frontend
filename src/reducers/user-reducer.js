import {
    SIGNUP_USER,
    LOGIN_USER,
    CHECK_USER_LOGGED_IN,
    LOGOUT_USER,
    VISITOR_USER,
    EMAIL_SIGNTURE,
} from "../actions/user-actions";

const initialState = {
    currentUser: null,
    visitorUser: {profile_image: "",
        first_name : "",
        last_name : "",
        job_title : "",
        department : "",
        company_name : "",
        office_phone : "",
        mobile_phone : "",
        website_url : "",
        email : "",
        address_1 : "",
        address_2 : "",
        address_3 : "",
        address_4 : "",
        linkedin : "",
        twitter : "",
        github : "",
        bonus_field: ""}
}

const usersReducer = (state = initialState, action) => {
    // console.log(action.payload)
    // console.log(action.type)
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
                // currentUser: action.payload
                visitorUser: action.payload
            }
        case EMAIL_SIGNTURE:
            return {
                // ...state,
                currentUser: action.payload
            }
        default: return state
    }
}

export default usersReducer