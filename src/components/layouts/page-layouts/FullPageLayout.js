// import react from 'react'
import styled from "styled-components";

const FullPageLayoutWrapper = styled.section`
${'' /* border: 10px solid black; */}
margin-top: 2%;
${'' /* margin-bottom: 10%; */}
margin-left: auto;
margin-right: auto;
width: 90%;
color: #4C4C4C;
margin-bottom: 0
`

const FullPageLayout = (props) => {
    return (
            <FullPageLayoutWrapper>
                {props.children}
            </FullPageLayoutWrapper>
    )
}

export default FullPageLayout;