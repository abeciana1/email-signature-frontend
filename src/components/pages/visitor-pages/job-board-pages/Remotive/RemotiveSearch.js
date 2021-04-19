import React from 'react';
import {Form, Row, Col} from 'react-bootstrap'

class RemotiveSearch extends React.Component {

    state = {
        searchTerm: ""
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log("submit")
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>Remotive search bar</h1>
                <Form style={{"backgroundColor":"white"}}>
                    <Form.Group>
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Job title, keywords or company"
                        />
                        <Row>
                            <Col>
                                <div style={{"backgroundColor":"white", "width":"100%"}}>
                                <Form.Control as="select" custom>
                                    <option>1</option>
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
                                        className="mb-2 mr-sm-2"
                                        name="hide us jobs"
                                        label="Hide US-only"
                                    />
                            </Col>
                        </Row>
                    </Form.Group>
                    {/* <Form.Group>
                    </Form.Group> */}
                </Form>
            </React.Fragment>
        )
    }
}

export default RemotiveSearch