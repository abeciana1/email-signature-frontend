import React, { Component } from 'react';
import { Form, Col } from 'react-bootstrap'

class SignupForm extends Component {

    state = {
        first_name: '',
        last_name: '',
        job_title: '',
        email: '',
        password: ''
    }

    render() {
        return (
            <Form style={{"padding":"10px", "borderRadius":"15px", "backgroundColor":"#4C4C4C"}}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label style={{"color":"#FFCD04"}}>First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" name="first_name" value={this.state.first_name} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label style={{"color":"#FFCD04"}}>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} />
                    </Form.Group>
                </Form.Row>
                <Form.Group>
                    <Form.Label style={{"color":"#FFCD04"}}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" name="email" value={this.state.email} />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{"color":"#FFCD04"}}>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" value={this.state.password} />
                </Form.Group>
                <input type="submit" value="Signup" className="read-more-btn-light-solid" style={{"fontWeight": "500"}} />
            </Form>
        );
    }
}

export default SignupForm