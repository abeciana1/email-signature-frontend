import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
// import { Col, Row } from 'react-bootstrap'



const TemplateOne = (props) => {

        console.log(props.currentUser)
    return (
        <React.Fragment>
            <div style={{ "marginRight": "auto", "marginLeft": "auto", "padding": "20px" }}>
                {props.currentUser ? 
    <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial"}}>
        <tbody>
            <tr>
                <td>
                <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial"}}>
                    <tbody>
            <tr>
              <td style={{"verticalAlign": "top"}}>
                <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial"}}>
                  <tbody>
                    <tr>
                      <td style={{"textAlign": "center"}}>
                        <img src="https://static.wikia.nocookie.net/spongebob/images/d/d7/SpongeBob_stock_art.png/revision/latest?cb=20190921125147" role="presentation" width="130" style={{"maxWidth": "128px", "display": "block"}} />
                      </td>
                    </tr>
                    <tr>
                    <td style={{"height":"30"}}></td>
                    </tr>
                    <tr>
                        <td style={{"textAlign": "center"}}>
                            <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial", "display": "inline-block"}}>
                                <tbody>
                                    <tr style={{"textAlign": "center"}}>
                                        <td style={{"width":"5"}}><div></div></td>
                                        <td>
                                            <Link to="//twitter" style={{"display": "inline-block", "padding": "0px", "backgroundColor": "#6A78D1"}}>
                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png" alt="twitter" color="#6A78D1" height="24" style={{"backgroundColor": "#6A78D1", "maxWidth": "135px", "display": "block"}} />
                                            </Link>
                                        </td>
                                        <td style={{"width":"5"}}><div></div></td>
                                        <td>
                                            <Link htoref="//linkedin" style={{"display": "inline-block", "padding": "0px", "backgroundColor": "#6A78D1"}}>
                                                <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png" alt="linkedin" height="24" style={{"backgroundColor": "#6A78D1", "maxWidth": "135px", "display": "block"}} />
                                            </Link>
                                        </td>
                                        {/* <td style={{"width":"5"}} /> */}
                                    </tr>
                                          <div></div>
                                        {/* </td> */}
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </td>
              <td width="46">
              <div></div>
              </td>
              <td style={{"padding": "0px", "verticalAlign": "middle", "textAlign":"left"}}>
                <h3 style={{"margin": "0px", "fontSize": "18px", "color": "#000000"}}>
                  <span>first</span>
                  <span>&nbsp;</span>
                  <span>last</span></h3>
                <p style={{"margin": "0px", "color": "#000000", "fontSize": "14px", "lineHeight": "22px"}}>
                  <span>job title</span></p>
                <p style={{"margin": "0px", "fontWeight": "500", "color": "#000000", "fontSize": "14px", "lineHeight": "22px"}}>
                  <span>department</span>
                  <span>&nbsp;|&nbsp;</span>
                  <span>company name</span></p>
                <p  style={{"color": "#000000", "margin": "0px", "fontSize": "14px", "lineHeight": "22px"}}>
                  <span>bonus field</span></p>
                <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial", "width": "100%"}}><tbody>
                  <tr>
                  <div style={{"height":"5px"}}></div>
                  {/* <td height="30"></td> */}
                  </tr>
                  <tr>
                    <td direction="horizontal" height="1" style={{"width": "100%", "borderBottom": "1px solid rgb(242, 84, 125)", "borderLeft": "none", "display": "block"}}></td></tr>
                  <tr>
                        <div style={{"height":"5px"}}></div>
                    {/* <td height="30"></td> */}
                    </tr></tbody></table>
                <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial"}}>
                  <tbody>
                    <tr height="25" style={{"verticalAlign": "middle"}}>
                  <td width="30" style={{"verticalAlign": "middle"}}>
                    <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial"}}>
                      <tbody>
                        <tr>
                          <td style={{"verticalAlign": "bottom"}}>
                            <span style={{"display": "block", "backgroundColor": "rgb(242, 84, 125)"}}>
                              <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" width="13" style={{"display": "block", "backgroundColor": "rgb(242, 84, 125)"}} />
                              </span></td></tr></tbody></table></td>
                              
                      <td style={{"padding": "0px", "color": "rgb(0, 0, 0)"}}>
                        <a href="tel:555-555-5555" style={{"textDecoration": "none", "color": "rgb(0, 0, 0)", "fontSize": "12px"}}>
                          <span>555-555-5555</span></a> | 
                        <a href="tel:555-555-555" style={{"textDecoration": "none", "color": "rgb(0, 0, 0)", "fontSize": "12px"}}>
                          <span>555-555-555</span></a></td></tr>
                    <tr height="25" style={{"verticalAlign": "middle"}}>
                      <td width="30" style={{"verticalAlign": "middle"}}>
                        <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial"}}>
                          <tbody>
                            <tr>
                              <td style={{"verticalAlign": "bottom"}}>
                                <span width="11" style={{"display": "block", "backgroundColor": "rgb(242, 84, 125)"}}>
                                  <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" width="13" style={{"display": "block", "backgroundColor": "rgb(242, 84, 125)"}} />
                                  </span></td></tr></tbody></table></td>
                      <td style={{"padding": "0px"}}>
                        <a href="mailto:alex@test.com" style={{"textDecoration": "none", "color": "rgb(0, 0, 0)", "fontSize": "12px"}}>
                          <span>alex@test.com</span></a></td></tr>
                    <tr height="25" style={{"verticalAlign": "middle"}}>
                      <td width="30" style={{"verticalAlign": "middle"}}>
                        <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial"}}>
                          <tbody>
                            <tr>
                              <td style={{"verticalAlign": "bottom"}}>
                                <span width="11" style={{"display": "block", "backgroundColor": "rgb(242, 84, 125)"}}>
                                  <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"  width="13" style={{"display": "block", "backgroundColor": "rgb(242, 84, 125)"}}/>
                                  </span></td></tr></tbody></table></td>
                      <td style={{"padding": "0px"}}><a href="//www.google.com" style={{"textDecoration": "none", "color": "rgb(0, 0, 0)", "fontSize": "12px"}}>
                        <span>www.google.com</span></a></td></tr>
                    <tr height="25" style={{"verticalAlign": "middle"}}>
                      <td width="30" style={{"verticalAlign": "middle"}}>
                        <table cellpadding="0" cellspacing="0" style={{"fontSize": "medium", "fontFamily": "Arial"}}>
                          <tbody>
                            <tr>
                              <td style={{"verticalAlign": "bottom"}}>
                                <span width="11" style={{"display": "block", "backgroundColor": "rgb(242, 84, 125)"}}>
                                  <img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" width="13" style={{"display": "block", "backgroundColor": "rgb(242, 84, 125)"}} /></span></td></tr></tbody></table></td>
                      <td style={{"padding": "0px"}}>
                        <span style={{"fontSize": "12px", "color": "rgb(0, 0, 0)"}}>
                          <span>line 1, line 2, line 3, line 4</span></span></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table>
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