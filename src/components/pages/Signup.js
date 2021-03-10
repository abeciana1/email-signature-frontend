import React from 'react'
import DefaultLayout from "../layouts/DefaultLayout.js";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'


import SignupForm from '../forms/SignupForm'

const Signup = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
            </Helmet>
            <DefaultLayout>
                <h1>Signup</h1>
                <div style={{"paddingBottom":"10px"}}>
                    Already a user? Login <Link to="/login" style={{"textDecoration": "none"}}>here</Link>
                </div>
                <SignupForm />
            </DefaultLayout>
        </React.Fragment>
    )
}

export default Signup