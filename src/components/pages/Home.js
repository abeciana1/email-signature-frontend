// import react from 'react';
import DefaultLayout from '../layouts/DefaultLayout.js'
import { Helmet } from 'react-helmet'

const Home = () => {
    // document.body.style = "background: red;";

    return (
        <>
            <Helmet>
                <style>{'body { background-color: #FFCD04; }'}</style>
            </Helmet>
            <DefaultLayout>
                    <h1 className="brand-name" style={{ "fontSize": "50px" }}>jobase</h1>
                    <div style={{"fontSize": "25px"}}>Making the job search simple</div>
            </DefaultLayout>
        </>
    )
}

export default Home