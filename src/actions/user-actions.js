export const SIGNUP_USER = "SIGNUP_USER"
export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT_USER = "LOGOUT_USER"
export const CHECK_USER_LOGGED_IN = "CHECK_USER_LOGGED_IN"

const BASE_URL = "http://localhost:3000/api/v1"

export const signupUser = (userData) => {
    //! fetches live here

    return {
        type: SIGNUP_USER,
        payload: userData
    }
}

export const loginUser = (userData) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
            user: {
                email: userData.email,
                password: userData.password
            }
        })
    }
    return (dispatch) => {
        fetch(BASE_URL + "/login", options)
        .then(response => response.json())
        .then(data => {
                console.log(data.user)
                localStorage.setItem("isLoggedIn", true)
                dispatch({
                    type: LOGIN_USER,
                    payload: data.user
                })
        })
    }
}

export const logOutUser = () => {
    localStorage.clear()
    return (dispatch) => {
        dispatch({
            type: LOGOUT_USER,
            payload: {}
        })
    }
}

export const checkUser = () => {
    // console.log("checking user")
    const options = {
        method: 'GET',
        credentials: 'include'
    }
    return (dispatch) => {
        fetch(BASE_URL + "/session-renew", options)
        .then(response => response.json())
        .then(data => {
            
    
            dispatch({
                type: CHECK_USER_LOGGED_IN,
                payload: data.user
                })
        })
    }

}