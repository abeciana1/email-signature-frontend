// import react from 'react';
import DefaultLayout from '../layouts/DefaultLayout.js'
import { Helmet } from 'react-helmet'
// import { Row, Col } from 'react-bootstrap'

const Home = (props) => {
    // document.body.style = "background: red;";
    // console.log(props)
    // debugger
    return (
        <>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
                {/* {document.head.children[9].innerText} */}
            </Helmet>
            <DefaultLayout>
                <div style={{"textAlign":"center"}}>
                    <h1 className="brand-name" style={{ "fontSize": "50px" }}>jobase</h1>
                    <div style={{"fontSize": "25px"}}>Making the job search simple</div>
                </div>
                {/* <Row xs={1} md={2}>
                </Row> */}
            </DefaultLayout>
        </>
    )
}

export default Home