import React from 'react';
import { Helmet } from "react-helmet";
import FullPageLayout from '../../layouts/page-layouts/FullPageLayout'

import {Col, Row} from 'react-bootstrap'

const JobBoardCentral = () => {
    
    return (
        <React.Fragment>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
                <meta name="title" content="jobase | Job Boards" />
                <meta name="description" content="Find your next job! Remote, in-office, or hybrid employment"/>
            </Helmet>
            <FullPageLayout>
                <h1>Job Boards</h1>
                <Row>
                    <Col sm>
                        <div style={{"border":"black solid 5px", "padding": "10px", "borderRadius": "20px", "textAlign": "center"}}>
                            <img src={process.env.PUBLIC_URL + "./images/remotive-dog.png"} alt="Remotive Graphic" style={{"height":"100px"}} />
                            <h3>Remotive</h3>
                            <h5>Find the best remote job, working as a developer, customer support rep, product or sales professional</h5>
                            {/* <h3 style={{"border":"black solid 5px", "padding": "10px", "display":"inline"}}>Remotive Job Board</h3> */}
                        </div>
                    </Col>
                    <Col sm>
                    </Col>
                    <Col sm>
                    </Col>
                </Row>
                <br />
                <br />
                <h2>More job boards coming soon!</h2>
            </FullPageLayout>
        </React.Fragment>
    )
}

export default JobBoardCentral