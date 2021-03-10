import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

import { compose } from 'redux'
import { connect } from 'react-redux'

const  NavBar = (props) => {
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
                    <Nav.Link href="/signup" style={{ "textDecoration": "none", "color": "#4C4C4C"}}>Signup</Nav.Link>
                    <Nav.Link href="/login" style={{ "textDecoration": "none", "color": "#4C4C4C"}}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(NavBar)
