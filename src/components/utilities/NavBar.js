import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

import { compose } from 'redux'
import { connect } from 'react-redux'

import { logOutUser } from '../../actions/user-actions'

const logOutUserHandler = (props) => {
    console.log(props)
    props.logOutUser()
    props.history.push("/")
}

const NavBar = (props) => {
    // console.log(props)
    return (
        <Navbar bg="" expand="lg">
            <Link to="/" style={{"textDecoration":"none"}}>
                <h2 className="brand-name">jobase</h2>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="/about" style={{ "textDecoration": "none", color: "#4C4C4C" }}>About</Nav.Link>
                    <Nav.Link href="/contact" style={{ "textDecoration": "none", "color": "#4C4C4C" }}>Contact</Nav.Link>
                    <Nav.Link href="/signup" style={{ "textDecoration": "none", "color": "#4C4C4C" }}>Signup</Nav.Link>
                    {props.user.currentUser ?
                    <Nav.Link style={{ "textDecoration": "none", "color": "#4C4C4C"}} onClick={() => logOutUserHandler(props)}>Logout</Nav.Link>
                    :
                    <Nav.Link href="/login" style={{ "textDecoration": "none", "color": "#4C4C4C" }}>Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    logOutUser
}

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(NavBar, logOutUserHandler)
