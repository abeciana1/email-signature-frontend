import React from 'react';
import { connect } from 'react-redux'

import { Col, Row } from 'react-bootstrap'

const TemplateOne = (props) => {

    const PROFILE_IMAGE = props.user.currentUser.profile_image
    const FIRST_NAME = props.user.currentUser.first_name
    const LAST_NAME = props.user.currentUser.last_name
    const JOB_TITLE = props.user.currentUser.job_title
    const DEPARTMENT = props.user.currentUser.department
    const COMPANY_NAME = props.user.currentUser.company
    const OFFICE_PHONE = props.user.currentUser.office_phone
    const MOBILE_PHONE = props.user.currentUser.mobile_phone
    const WEBSITE_URL = props.user.currentUser.website_url
    const EMAIL = props.user.currentUser.email
    const ADDRESS_1 = props.user.currentUser.address_1
    const ADDRESS_2 = props.user.currentUser.address_2
    const ADDRESS_3 = props.user.currentUser.address_3
    const ADDRESS_4 = props.user.currentUser.address_4
    const LINKEDIN = props.user.currentUser.linkedin
    const TWITTER = props.user.currentUser.twitter
    const GITHUB = props.user.currentUser.github
    const BONUS_FIELD = props.user.currentUser.bonus_field


    console.log(props)
    return (
        <React.Fragment>
            {/* <div style={{"marginRight":"auto", "marginLeft":"auto"}}> */}
                <Row md={4}>
                    <Col></Col>
                    <Col xs={6}>
                        {PROFILE_IMAGE ?
                        <img src={PROFILE_IMAGE} alt={FIRST_NAME + " " + LAST_NAME} style={{ "width": "130px", "maxWidth": "128px" }} />
                        : null}
                        <div style={{"paddingTop":"10px"}}>
                        {LINKEDIN ? "hi" : null}
                        </div>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            {/* </div> */}
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state
}

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps, null)(TemplateOne)