import React from 'react';
import { Helmet } from "react-helmet";
import RemotiveSearch from './RemotiveSearch'

import FullPageLayout from '../../../../layouts/page-layouts/FullPageLayout';

const Remotive = () => {
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
                <meta name="title" content="jobase | Job Boards - Remotive" />
                <meta name="description" content="Find the best remote job, working as a developer, customer support rep, product or sales professional" />
                <title>jobase | Job Boards - Remotive</title>
            </Helmet>
            <FullPageLayout>
                <h1>Remotive</h1>
                <RemotiveSearch />
            </FullPageLayout>
        </React.Fragment>
    )
}

export default Remotive