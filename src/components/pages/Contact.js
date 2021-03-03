import React from 'react';
import DefaultLayout from "../layouts/DefaultLayout.js";
import { Helmet } from "react-helmet";

const Contact = () => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
            </Helmet>
            <DefaultLayout>
                <h1>Contact</h1>
            </DefaultLayout>
        </React.Fragment>
    )
}

export default Contact