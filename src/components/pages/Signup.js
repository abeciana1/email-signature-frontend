import React from 'react'
import DefaultLayout from "../layouts/DefaultLayout.js";
import { Helmet } from "react-helmet";

import SignupForm from '../forms/SignupForm'

const Signup = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
            </Helmet>
            <DefaultLayout>
                <h1>Signup</h1>
                <SignupForm />
            </DefaultLayout>
        </React.Fragment>
    )
}

export default Signup