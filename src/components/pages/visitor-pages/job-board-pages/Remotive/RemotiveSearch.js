import React from 'react';
import {Form, Row, Col} from 'react-bootstrap'

class RemotiveSearch extends React.Component {

    state = {
        searchTerm: "",
        hideUSOnly: false,
        jobCategory: "All Job Categories"
    }

    changeHandler = (e) => {
        console.log("changing")
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    checkboxHandler = () => {
        this.setState({
            hideUSOnly: !this.state.hideUSOnly
        })
    }

    selectHandler = (e) => {
        // console.log(e.target.value)
        this.setState({
            jobCategory: e.target.value
        })
    }
    
    render() {
        console.log(this.state.hideUSOnly)
        return (
            <React.Fragment>
                <h1>Remotive search bar</h1>
                <Form style={{"backgroundColor":"white", "borderRadius":"5px"}}>
                    <Form.Group>
                        <Form.Control
                            name="searchTerm"
                            size="lg"
                            type="text"
                            placeholder="Job title, keywords or company"
                            onChange={this.changeHandler}
                            value={this.state.searchTerm}
                            style={{"borderRadius":"5px"}}
                        />
                        <Row>
                            <Col>
                                <div style={{"backgroundColor":"white", "width":"100%", "borderRadius":"5px"}}>
                                    <Form.Control
                                        as="select"
                                        style={{ "borderRadius": "5px" }}
                                        value={this.state.jobCategory}
                                        onChange={this.selectHandler.bind(this)}
                                    >
                                    <option>All Job Categories</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                                </div>
                            </Col>
                            <Col>
                                <Form.Check
                                    type="checkbox"
                                    name="hideUSOnly"
                                    label="Hide US-only"
                                    value={this.state.hideUSOnly}
                                    onChange={this.checkboxHandler}
                                    style={{"borderRadius":"5px"}}
                                    />
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </React.Fragment>
        )
    }
}

export default RemotiveSearch