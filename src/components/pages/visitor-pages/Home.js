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
                        <div style={{"width":"100px", "marginLeft":"auto","marginRight":"auto"}}>
                            <Link to="/signature-creator" style={{ "textDecoration": "none", "color": "#4C4C4C" }}>
                                    <img src={process.env.PUBLIC_URL + "/images/quill-feather.png"} alt="email-signature-tool" style={{ "width":"5rem"}}/>
                                    <div style={{"overflowWrap":"break-word", "width":"80px"}}>Email Signature Creator</div>
                            </Link>
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