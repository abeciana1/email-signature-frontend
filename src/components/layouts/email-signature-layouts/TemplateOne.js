import React from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
// import { Col, Row } from 'react-bootstrap'



const TemplateOne = (props) => {

        console.log(props.currentUser)
    return (
      <React.Fragment>
        <div
          style={{ marginRight: "auto", marginLeft: "auto", padding: "20px" }}
        >
          {props.currentUser ? (
            <table
              cellpadding="0"
              cellspacing="0"
              style={{ fontSize: "medium", fontFamily: "Arial" }}
            >
              <tbody>
                <tr>
                  <td>
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      style={{ fontSize: "medium", fontFamily: "Arial" }}
                    >
                      <tbody>
                        <tr>
                          <td style={{ verticalAlign: "top" }}>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style={{
                                fontSize: "medium",
                                fontFamily: "Arial",
                              }}
                            >
                              {props.currentUser.profile_image ? (
                                <tbody>
                                  <tr>
                                    <td style={{ textAlign: "center" }}>
                                      <img
                                        src={props.currentUser.profile_image}
                                        style={{
                                          maxWidth: "128px",
                                          display: "block",
                                        }}
                                        alt="Profile"
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{ height: "30" }}></td>
                                  </tr>
                                  <tr>
                                    <td style={{ textAlign: "center" }}>
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        style={{
                                          fontSize: "medium",
                                          fontFamily: "Arial",
                                          display: "inline-block",
                                        }}
                                      >
                                        <tbody>
                                          <tr style={{ textAlign: "center" }}>
                                            <td style={{ width: "10px" }}>
                                              <div></div>
                                            </td>
                                            {props.currentUser.twitter ?
                                              <td>
                                              <Link
                                                to={{
                                                  pathname:
                                                    props.currentUser.twitter,
                                                }}
                                                style={{
                                                  display: "inline-block",
                                                  padding: "0px",
                                                  backgroundColor: "#6A78D1",
                                                }}
                                              >
                                                <img
                                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                                  alt="Twitter logo"
                                                  color="#6A78D1"
                                                  height="24"
                                                  style={{
                                                    backgroundColor: "#6A78D1",
                                                    maxWidth: "135px",
                                                    display: "block",
                                                  }}
                                                />
                                              </Link>
                                            </td>
                                            : null}
                                            <td style={{ width: "10px" }}>
                                              <div></div>
                                            </td>
                                            {props.currentUser.linkedin ?
                                              <td>
                                              <Link
                                                to={{
                                                  pathname:
                                                    props.currentUser.linkedin,
                                                }}
                                                style={{
                                                  display: "inline-block",
                                                  padding: "0px",
                                                  backgroundColor: "#6A78D1",
                                                }}
                                              >
                                                <img
                                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                  alt="LinkedIn"
                                                  height="24"
                                                  style={{
                                                    backgroundColor: "#6A78D1",
                                                    maxWidth: "135px",
                                                    display: "block",
                                                  }}
                                                />
                                              </Link>
                                              </td>
                                            : null}
                                            <td style={{ width: "10px" }}>
                                              <div></div>
                                            </td>
                                            { props.currentUser.github ?
                                              <td>
                                              <Link
                                                to={{
                                                  pathname:
                                                    props.currentUser.github,
                                                }}
                                                style={{
                                                  display: "inline-block",
                                                  padding: "0px",
                                                  backgroundColor: "#6A78D1",
                                                }}
                                              >
                                                <img
                                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                                  alt="GitHub"
                                                  height="24"
                                                  style={{
                                                    backgroundColor: "#6A78D1",
                                                    maxWidth: "135px",
                                                    display: "block",
                                                  }}
                                                />
                                              </Link>
                                              </td>
                                            : null}
                                            {/* <td style={{"width":"5"}} /> */}
                                          </tr>

                                          <div></div>
                                          {/* </td> */}
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              ) : (
                                <div style={{ float: "right" }}>
                                  {props.currentUser.twitter ? (
                                    <Link
                                      to={{
                                        pathname: props.currentUser.twitter,
                                      }}
                                      style={{
                                        display: "inline-block",
                                        padding: "0px",
                                        backgroundColor: "#6A78D1",
                                      }}
                                    >
                                      <img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/twitter-icon-2x.png"
                                        alt="Twitter logo"
                                        color="#6A78D1"
                                        height="24"
                                        style={{
                                          backgroundColor: "#6A78D1",
                                          maxWidth: "135px",
                                          // display: "block",
                                          position: "absolute",
                                        }}
                                      />
                                    </Link>
                                  ) : null}
                                  <br />
                                  <br />
                                    {props.currentUser.linkedin ?
                                    <Link
                                      to={{
                                        pathname: props.currentUser.linkedin,
                                      }}
                                      style={{
                                        display: "inline-block",
                                        padding: "0px",
                                        backgroundColor: "#6A78D1",
                                      }}
                                    >
                                      <img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                        alt="LinkedIn"
                                        height="24"
                                        style={{
                                          backgroundColor: "#6A78D1",
                                          maxWidth: "135px",
                                          // display: "block",
                                          position: "absolute",
                                        }}
                                      />
                                    </Link>
                                  : null}
                                  <br />
                                  <br />
                                  {props.currentUser.github ? (
                                    <Link
                                      to={{
                                        pathname: props.currentUser.github,
                                      }}
                                      style={{
                                        display: "inline-block",
                                        padding: "0px",
                                        backgroundColor: "#6A78D1",
                                      }}
                                    >
                                      <img
                                        src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/linkedin-icon-2x.png"
                                        alt="GitHub"
                                        height="24"
                                        style={{
                                          backgroundColor: "#6A78D1",
                                          maxWidth: "135px",
                                          // display: "block",
                                          position: "absolute",
                                        }}
                                      />
                                    </Link>
                                  ) : null}
                                </div>
                              )}
                            </table>
                          </td>
                          <td width="46">
                            <div></div>
                          </td>
                          <td
                            style={{
                              padding: "0px",
                              verticalAlign: "middle",
                              textAlign: "left",
                            }}
                          >
                            <h3
                              style={{
                                margin: "0px",
                                fontSize: "18px",
                                color: "#000000",
                              }}
                            >
                              <span>{props.currentUser.first_name}</span>
                              <span>&nbsp;</span>
                              <span>{props.currentUser.last_name}</span>
                            </h3>
                            <p
                              style={{
                                margin: "0px",
                                color: "#000000",
                                fontSize: "14px",
                                lineHeight: "22px",
                              }}
                            >
                              <span>{props.currentUser.job_title}</span>
                            </p>
                            <p
                              style={{
                                margin: "0px",
                                fontWeight: "500",
                                color: "#000000",
                                fontSize: "14px",
                                lineHeight: "22px",
                              }}
                            >
                              <span>{props.currentUser.department}</span>
                              <span>&nbsp;|&nbsp;</span>
                              <span>{props.currentUser.company_name}</span>
                            </p>
                            <p
                              style={{
                                color: "#000000",
                                margin: "0px",
                                fontSize: "14px",
                                lineHeight: "22px",
                              }}
                            >
                              <span>{props.currentUser.bonus_field}</span>
                            </p>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style={{
                                fontSize: "medium",
                                fontFamily: "Arial",
                                width: "100%",
                              }}
                            >
                              <tbody>
                                <tr>
                                  <div style={{ height: "5px" }}></div>
                                  {/* <td height="30"></td> */}
                                </tr>
                                <tr>
                                  <td
                                    direction="horizontal"
                                    height="1"
                                    style={{
                                      width: "100%",
                                      borderBottom:
                                        "1px solid rgb(242, 84, 125)",
                                      borderLeft: "none",
                                      display: "block",
                                    }}
                                  ></td>
                                </tr>
                                <tr>
                                  <div style={{ height: "5px" }}></div>
                                  {/* <td height="30"></td> */}
                                </tr>
                              </tbody>
                            </table>
                            <table
                              cellpadding="0"
                              cellspacing="0"
                              style={{
                                fontSize: "medium",
                                fontFamily: "Arial",
                              }}
                            >
                              <tbody>
                                <tr
                                  height="25"
                                  style={{ verticalAlign: "middle" }}
                                >
                                  <td
                                    width="30"
                                    style={{ verticalAlign: "middle" }}
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      style={{
                                        fontSize: "medium",
                                        fontFamily: "Arial",
                                      }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{ verticalAlign: "bottom" }}
                                          >
                                            <span
                                              style={{
                                                display: "block",
                                                backgroundColor:
                                                  "rgb(242, 84, 125)",
                                              }}
                                            >
                                              <img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png"
                                                width="13"
                                                style={{
                                                  display: "block",
                                                  backgroundColor:
                                                    "rgb(242, 84, 125)",
                                                }}
                                              />
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>

                                  <td
                                    style={{
                                      padding: "0px",
                                      color: "rgb(0, 0, 0)",
                                    }}
                                  >
                                    <a
                                      href="tel:555-555-5555"
                                      alt="company phone"
                                      style={{
                                        textDecoration: "none",
                                        color: "rgb(0, 0, 0)",
                                        fontSize: "12px",
                                      }}
                                    >
                                      <span>
                                        {props.currentUser.office_phone}
                                      </span>
                                    </a>{" "}
                                    |
                                    <a
                                      href="tel:555-555-555"
                                      style={{
                                        textDecoration: "none",
                                        color: "rgb(0, 0, 0)",
                                        fontSize: "12px",
                                      }}
                                    >
                                      <span>
                                        {props.currentUser.mobile_phone}
                                      </span>
                                    </a>
                                  </td>
                                </tr>
                                <tr
                                  height="25"
                                  style={{ verticalAlign: "middle" }}
                                >
                                  <td
                                    width="30"
                                    style={{ verticalAlign: "middle" }}
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      style={{
                                        fontSize: "medium",
                                        fontFamily: "Arial",
                                      }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{ verticalAlign: "bottom" }}
                                          >
                                            <span
                                              width="11"
                                              style={{
                                                display: "block",
                                                backgroundColor:
                                                  "rgb(242, 84, 125)",
                                              }}
                                            >
                                              <img
                                                src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png"
                                                width="13"
                                                style={{
                                                  display: "block",
                                                  backgroundColor:
                                                    "rgb(242, 84, 125)",
                                                }}
                                              />
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style={{ padding: "0px" }}>
                                    <a
                                      href="mailto:alex@test.com"
                                      style={{
                                        textDecoration: "none",
                                        color: "rgb(0, 0, 0)",
                                        fontSize: "12px",
                                      }}
                                    >
                                      <span>{props.currentUser.email}</span>
                                    </a>
                                  </td>
                                </tr>
                                {props.currentUser.website_url ? (
                                  <tr
                                    height="25"
                                    style={{ verticalAlign: "middle" }}
                                  >
                                    <td
                                      width="30"
                                      style={{ verticalAlign: "middle" }}
                                    >
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        style={{
                                          fontSize: "medium",
                                          fontFamily: "Arial",
                                        }}
                                      >
                                        <tbody>
                                          <tr>
                                            <td
                                              style={{
                                                verticalAlign: "bottom",
                                              }}
                                            >
                                              <span
                                                width="11"
                                                style={{
                                                  display: "block",
                                                  backgroundColor:
                                                    "rgb(242, 84, 125)",
                                                }}
                                              >
                                                <img
                                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png"
                                                  width="13"
                                                  style={{
                                                    display: "block",
                                                    backgroundColor:
                                                      "rgb(242, 84, 125)",
                                                  }}
                                                />
                                              </span>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                    <td style={{ padding: "0px" }}>
                                      {props.currentUser.website_url ? (
                                        <>
                                          <a
                                            href={props.currentUser.website_url}
                                            style={{
                                              textDecoration: "none",
                                              color: "rgb(0, 0, 0)",
                                              fontSize: "12px",
                                            }}
                                          >
                                            <span>
                                              {props.currentUser.website_url}
                                            </span>
                                          </a>
                                        </>
                                      ) : null}
                                    </td>
                                  </tr>
                                ) : null}
                                <tr
                                  height="25"
                                  style={{ verticalAlign: "middle" }}
                                >
                                  <td
                                    width="30"
                                    style={{ verticalAlign: "middle" }}
                                  >
                                    <table
                                      cellpadding="0"
                                      cellspacing="0"
                                      style={{
                                        fontSize: "medium",
                                        fontFamily: "Arial",
                                      }}
                                    >
                                      <tbody>
                                        <tr>
                                          <td
                                            style={{ verticalAlign: "bottom" }}
                                          >
                                            <span
                                              width="11"
                                              style={{
                                                display: "block",
                                                backgroundColor:
                                                  "rgb(242, 84, 125)",
                                              }}
                                            >
                                              {props.currentUser.address_1 ||
                                              props.currentUser.address_2 ||
                                              props.currentUser.address_3 ||
                                              props.currentUser.address_4 ? (
                                                <img
                                                  src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png"
                                                  width="13"
                                                  style={{
                                                    display: "block",
                                                    backgroundColor:
                                                      "rgb(242, 84, 125)",
                                                  }}
                                                />
                                              ) : null}
                                            </span>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style={{ padding: "0px" }}>
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "rgb(0, 0, 0)",
                                      }}
                                    >
                                      <span>
                                        {props.currentUser.address_1}
                                        {props.currentUser.address_2
                                          ? ", " + props.currentUser.address_2
                                          : null}
                                        {props.currentUser.address_3
                                          ? ", " + props.currentUser.address_3
                                          : null}
                                        {props.currentUser.address_4
                                          ? ", " + props.currentUser.address_4
                                          : null}
                                      </span>
                                    </span>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : null}
        </div>
      </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return state.user
}

// const mapDispatchToProps = {

// }
// 
// export default TemplateOne

export default connect(mapStateToProps, null)(TemplateOne)