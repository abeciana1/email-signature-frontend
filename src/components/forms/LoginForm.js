import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { connect } from "react-redux";
import { loginUser } from '../../actions/user-actions'

class LoginForm extends Component {

    state = {
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
        this.props.loginUser(this.state)
        this.props.history.push("/")
    }

    render() {
        return (
            <Form onSubmit={this.submitHandler} style={{"padding":"10px", "borderRadius":"15px", "backgroundColor":"#4C4C4C"}}>
                <Form.Group>
                    <Form.Label style={{"color":"#FFCD04"}}>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter Email" value={this.state.email} onChange={this.changeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{"color":"#FFCD04"}}>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.changeHandler}/>
                </Form.Group>
                <input type="submit" value="Login" className="read-more-btn-light-solid" style={{"fontWeight":"500"}} />
            </Form>
        )
    }
}

const mapDispatchToProps = {
    loginUser
}

export default compose(withRouter, connect(null, mapDispatchToProps))(LoginForm)