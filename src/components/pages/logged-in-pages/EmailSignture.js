import React from 'react';
import { Helmet } from "react-helmet";

const EmailSignature = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
                <meta name="title" content="jobase | Email Signature Creator" />
                <meta name="description" content="Create a professional and visually compelling email signature. Make your emails standout among the rest!"/>
            </Helmet>
            <h1>Email Signature Creator</h1>
            <h3>Create a professional and visually compelling email signature. Make your emails standout among the rest!</h3>
        </React.Fragment>
    )
}

export default EmailSignature