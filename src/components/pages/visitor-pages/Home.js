import DefaultLayout from '../../layouts/page-layouts/DefaultLayout.js'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const Home = (props) => {
    // console.log(localStorage)

    return (
        <>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
            </Helmet>
            <DefaultLayout>
                <div style={{ "textAlign": "center" }}>
                    {localStorage.getItem("isLoggedIn") ? <h1>signed in</h1> : null}
                    <h1 className="brand-name" style={{ "fontSize": "50px" }}>jobase</h1>
                    <div style={{ "fontSize": "25px" }}>Making the job search simple</div>
                    <div style={{ "marginTop": "15px", "textAlign": "center" }}>
                        <div style={{ "width": "60%", "marginLeft": "auto", "marginRight": "auto" }}>
                            <Row xs={2} md={4} lg={6}>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                    <Link to="/signature-creator" style={{ "textDecoration": "none", "color": "#4C4C4C" }}>
                                        <img src={process.env.PUBLIC_URL + "/images/quill-feather.png"} alt="email-signature-tool" style={{ "width":"5rem"}}/>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/job-boards" style={{ "textDecoration": "none", "color": "#4C4C4C" }}>
                                        <img src={process.env.PUBLIC_URL + "/images/briefcase.png"} alt="job-search-tool" style={{ "width": "5rem" }} />
                                    </Link>
                                </Col>
                            </Row>
                            <Row xs={2} md={4} lg={6}>
                                <Col></Col>
                                <Col></Col>
                                <Col>
                                    <Link to="/signature-creator" style={{ "textDecoration": "none", "color": "#4C4C4C" }}>
                                        <div style={{"overflowWrap":"break-word", "width":"80px"}}>Email Signature Creator</div>
                                    </Link>
                                </Col>
                                <Col>
                                    <Link to="/signature-creator" style={{ "textDecoration": "none", "color": "#4C4C4C" }}>
                                        <div style={{"overflowWrap":"break-word", "width":"80px"}}>Job Search</div>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </DefaultLayout>
        </>
    )
}

export default Home