import React from 'react'

import { Form } from 'react-bootstrap'
import { connect } from "react-redux";

import { emailSignatureUser } from '../../actions/user-actions'

class EmailSignatureLoggedIn extends React.Component {

    
    state = {
        profile_image: this.props.user.currentUser.profile_image,
        first_name : this.props.user.currentUser.first_name,
        last_name : this.props.user.currentUser.last_name,
        job_title : this.props.user.currentUser.job_title,
        department : this.props.user.currentUser.department,
        company_name : this.props.user.currentUser.company_name,
        office_phone : this.props.user.currentUser.office_phone,
        mobile_phone : this.props.user.currentUser.mobile_phone,
        website_url : this.props.user.currentUser.website_url,
        email : this.props.user.currentUser.email,
        address_1 : this.props.user.currentUser.address_1,
        address_2 : this.props.user.currentUser.address_2,
        address_3 : this.props.user.currentUser.address_3,
        address_4 : this.props.user.currentUser.address_4,
        linkedin : this.props.user.currentUser.linkedin,
        twitter : this.props.user.currentUser.twitter,
        github : this.props.user.currentUser.github,
        bonus_field: this.props.user.currentUser.bonus_field
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => this.props.emailSignatureUser(this.state))
    }

    render() {
        return (
            <React.Fragment>
                <h4>Enter Your Signature Details</h4>
                (Fields will reset on reload)
                <Form>
                    <Form.Group>
                        <Form.Label style={{ "color": "#FFCD04" }}>Profile Image</Form.Label>
                        <Form.Control type="text" placeholder="Profile Image" name="profile_image" value={this.state.profile_image} onChange={this.changeHandler} style={{"width":"75%"}} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{"color":"#FFCD04"}}>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{"color":"#FFCD04"}}>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{ "color": "#FFCD04" }}>Job Title</Form.Label>
                        <Form.Control type="text" placeholder="Job Title" name="job_title" value={this.state.job_title} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{"color":"#FFCD04"}}>Department</Form.Label>
                        <Form.Control type="text" placeholder="Department" name="department" value={this.state.department} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{"textAlign":"left"}}>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Company Name" name="company_name" value={this.state.company_name} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Office Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Office Phone Number" name="office_phone" value={this.state.office_phone} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Mobile Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Mobile Phone Number" name="mobile_phone" value={this.state.mobile_phone} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Website (Portfolio or Company)</Form.Label>
                        <Form.Control type="text" placeholder="Website URL" name="website_url" value={this.state.website_url} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{"color":"#FFCD04"}}>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address Line 1</Form.Label>
                        <Form.Control type="text" placeholder="Address Line 1" name="address_1" value={this.state.address_1} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address Line 2</Form.Label>
                        <Form.Control type="text" placeholder="Address Line 2" name="address_2" value={this.state.address_2} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address Line 3</Form.Label>
                        <Form.Control type="text" placeholder="Address Line 3" name="address_3" value={this.state.address_3} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address Line 4</Form.Label>
                        <Form.Control type="text" placeholder="Address Line 4" name="address_4" value={this.state.address_4} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>LinkedIn</Form.Label>
                        <Form.Control type="text" placeholder="LinkedIn" name="linkedin" value={this.state.linkedin} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Twitter</Form.Label>
                        <Form.Control type="text" placeholder="Twitter" name="twitter" value={this.state.twitter} onChange={this.changeHandler} style={{"width":"75%"}}/> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>GitHub</Form.Label>
                        <Form.Control type="text" placeholder="GitHub" name="github" value={this.state.github} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Bonus Field</Form.Label>
                        <Form.Control type="text" placeholder="Bonus Field" name="bonus_field" value={this.state.bonus_field} onChange={this.changeHandler} style={{"width":"75%"}}/>
                    </Form.Group>
                    {/* Add update information here -- !!! can reuse this form in user settings page */}
                </Form>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    emailSignatureUser
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailSignatureLoggedIn)