import React from 'react';
import { Helmet } from "react-helmet";
import FullPageLayout from '../../layouts/page-layouts/FullPageLayout'

const JobBoardCentral = () => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
                <meta name="title" content="jobase | Email Signature Creator" />
                <meta name="description" content="Create a professional and visually compelling email signature. Make your emails standout among the rest!"/>
            </Helmet>
            <FullPageLayout>
                <h1>Job Boards</h1>
                
            </FullPageLayout>
        </React.Fragment>
    )
}

export default JobBoardCentral