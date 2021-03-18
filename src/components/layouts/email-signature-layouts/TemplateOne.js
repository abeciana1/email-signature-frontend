import React, {useState} from 'react';
import { connect } from 'react-redux'

// import { Col, Row } from 'react-bootstrap'



const TemplateOne = (props) => {

        console.log(props.currentUser)
    return (
        <React.Fragment>
            <div style={{"marginRight":"auto", "marginLeft":"auto", "padding":"20px"}}>
            {props.currentUser ? 
                <table style={{"marginLeft":"auto", "marginRight":"auto"}}>
                <tbody>
                {/* <tr> */}
                    <td>
                    <table>
                        <tbody>    
                        <tr>
                            <td style={{"textAlign":"center"}}>    
                                {props.currentUser.profile_image ?
                                <img src={props.currentUser.profile_image} alt={props.currentUser.first_name + " " + props.currentUser.last_name} style={{ "width": "130px", "maxWidth": "128px" }} />
                                : 
                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/placeholders/placeholder-image@2x.png" alt="Default" style={{ "width": "130px", "maxWidth": "128px" }} /> 
                                }
                            </td>
                        </tr>
                        <tr>
                            <td style={{"height":"30px"}}></td>
                        </tr>
                        {/* <tr></tr> */}
                            <div style={{"paddingTop":"10px"}}>
                                {props.currentUser.linkedin ? "hi"
                                : null}
                            </div>
                        </tbody>
                    </table>
                    </td>
                    <td style={{"width":"20px"}}></td>
                    <table>
                        <tr>        
                            <td>
                                <h3 style={{"fontSize":"18px"}}>
                                    <span>{props.currentUser.first_name}</span>
                                            {/* {props.currentUser.first_name}{" "}{props.currentUser.last_name} */}
                                    <span>{" "}</span>
                                    <span>{props.currentUser.last_name}</span>
                                </h3>
                            </td>
                        </tr>
                    </table>
                {/* </tr> */}
                </tbody>
                </table>
                : 
                    null}
                </div>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return state.user
}

// const mapDispatchToProps = {

// }
// 
// export default TemplateOne

export default connect(mapStateToProps, null)(TemplateOne)