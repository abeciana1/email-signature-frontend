import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <Form style={{"padding":"10px", "borderRadius":"15px", "backgroundColor":"#4C4C4C"}}>
                <Form.Group>
                    <Form.Label style={{"color":"#FFCD04"}}>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={this.state.email} />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{"color":"#FFCD04"}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" value={this.state.password} />
                </Form.Group>
                <input type="submit" value="Login" className="read-more-btn-light-solid" style={{"fontWeight":"500"}} />
            </Form>
        )
    }
}
