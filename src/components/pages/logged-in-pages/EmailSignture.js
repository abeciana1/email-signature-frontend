import React from 'react';
import { Helmet } from "react-helmet";
import FullPageLayout from '../../layouts/page-layouts/FullPageLayout'

import MediaQuery from "react-responsive";

const EmailSignature = (props) => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
                <meta name="title" content="jobase | Email Signature Creator" />
                <meta name="description" content="Create a professional and visually compelling email signature. Make your emails standout among the rest!"/>
            </Helmet>
            <FullPageLayout>
                <h1>Email Signature Creator</h1>
                <h3>Create a professional and visually compelling email signature. Make your emails standout among the rest!</h3>
                <MediaQuery maxWidth={1025}>
                    <h2 style={{"textAlign": "center", "paddingTop":"10%", "width":"75%"}}>
                        Please visit the Desktop version of this application to use the Email Signature Creator
                    </h2>
                </MediaQuery>
            </FullPageLayout>
        </React.Fragment>
    )
}

export default EmailSignature