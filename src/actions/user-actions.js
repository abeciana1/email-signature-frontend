export const SIGNUP_USER = "SIGNUP_USER"

export const LOGIN_USER = "LOGIN_USER"

export const LOGOUT_USER = "LOGOUT_USER"

export const signupUser = (userData) => {
    console.log("from user action", userData)
    //! fetches live here
    return {
        type: SIGNUP_USER,
        payload: userData
    }
}

// export const signupUser = () => {
//     return (dispatch) => {
//         dispatch(signupUserAction)
//         console.log(dispatch)
//         console.log(signupUserAction.payload)
//     }
// }