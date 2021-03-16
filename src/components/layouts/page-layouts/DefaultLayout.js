import styled from "styled-components";

const DefaultLayoutWrapper = styled.section`
${'' /* border: 10px solid black; */}
margin-top: 10%;
margin-bottom: 10%;
margin-left: auto;
margin-right: auto;
width: 75%;
color: #4C4C4C
`

const DefaultLayout = (props) => {
    // console.log(props)
    return (
            <DefaultLayoutWrapper>
                {props.children}
            </DefaultLayoutWrapper>
    )
}

export default DefaultLayout