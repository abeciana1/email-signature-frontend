import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap'

import { connect } from "react-redux";
import { signupUser } from '../../actions/user-actions'

class SignupForm extends Component {

    state = {
        first_name: '',
        last_name: '',
        job_title: '',
        email: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.signupUser(this.state)
    }

    render() {
        console.log(this.props)
        // console.log(this.state)
        return (
            <Form onSubmit={this.submitHandler} style={{"padding":"10px", "borderRadius":"15px", "backgroundColor":"#4C4C4C"}}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label style={{"color":"#FFCD04"}}>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.changeHandler} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label style={{"color":"#FFCD04"}}>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.changeHandler} />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label style={{ "color": "#FFCD04" }}>Job Title</Form.Label>
                    <Form.Control type="text" placeholder="Job Title" name="job_title" value={this.state.job_title} onChange={this.changeHandler}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{"color":"#FFCD04"}}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" name="email" value={this.state.email} onChange={this.changeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{"color":"#FFCD04"}}>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.changeHandler} />
                </Form.Group>
                <input type="submit" value="Signup" className="read-more-btn-light-solid" style={{"fontWeight": "500"}} />
            </Form>
        );
    }
}

const mapDispatchToProps = {
    signupUser
}

export default connect(null, mapDispatchToProps)(SignupForm)