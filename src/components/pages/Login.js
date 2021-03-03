import React from 'react';
import Helmet from 'react-helmet'

import DefaultLayout from "../layouts/DefaultLayout.js";

import LoginForm from '../forms/LoginForm'

const Login = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
            </Helmet>
            <DefaultLayout>
                <h1>Login</h1>
                <LoginForm />
            </DefaultLayout>
        </React.Fragment>
    )
}

export default Login