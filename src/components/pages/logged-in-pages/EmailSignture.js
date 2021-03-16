import React from "react";
import { Helmet } from "react-helmet";
import FullPageLayout from '../../layouts/page-layouts/FullPageLayout'
import EmailSignatureDetailsForm from '../../forms/EmailSignatureDetailsForm'
import EmailSignatureLoggedIn from '../../forms/EmailSignatureLoggedIn'
import MediaQuery from "react-responsive";

import { Col, Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import { visitorUser } from '../../../actions/user-actions'

//! templates
import TemplateOne from '../../layouts/email-signature-layouts/TemplateOne'

// const EmailSignature = (props) => {
class EmailSignature extends React.Component {

    
    // switch (tab) {
        //     // case "Details":
        //     //     return ()
        //     default:
        //         return (
            //             <h1>hello tab switch</h1>
            //         )
            // }
            
        render() {
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
                    <MediaQuery minWidth={1026}>
                        <div style={{ "padding": "2%", "textAlign": "center"}}>
                            {/* <h3>Choose a Layout:</h3> <p>Slider with layout options</p> */}
                            <Row>
                                <Col sm={4}>
                                    -- Add buttons for switching --
                                <br />
                                <button><img src="https://img.icons8.com/ios-glyphs/30/000000/text.png" alt="Details Form"/></button>
                                    <div style={{ "height": "50%" }}>
                                        <div style={{"textAlign":"left", "overflowX":"scroll", "position":"fixed", "width":"30%", "height":"60%", "marginBottom": "0px", "paddingBottom":"5%"}}>
                                        { this.props.user.currentUser ?
                                        <EmailSignatureLoggedIn />
                                        :
                                        <EmailSignatureDetailsForm />} {/* Use for non-logged-in user*/}
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={8}>
                                    <h4>Preview</h4>
                                    <div style={{"padding":"10%","backgroundColor":"#4C4C4C", "marginTop":"5%"}}>
                                        <div style={{"backgroundColor":"#FBFBFB", "padding":"5px"}}>
                                            {/* selected layout of signature */}
                                            <TemplateOne />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </MediaQuery>
                </FullPageLayout>
            </React.Fragment>
        )
    }
}


const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    visitorUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailSignature)