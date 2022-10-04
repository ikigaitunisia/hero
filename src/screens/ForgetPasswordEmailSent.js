import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

import Header from "../components/Header";
import "./Login1.css";
import { Email } from "@mui/icons-material";

function ForgetPasswordEmailSent() {
  const history = useHistory();
  const location = useLocation();
  
  const [EmailError, setEmailError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [resetPasswordError,setresetPasswordError] = useState(false);
  const [ErrorMessage,setErrorMessage] = useState("");
  const [resetPassword, setResetPassword] = useState(false);
 
 
  
  useEffect(() => {
    window.scrollTo(0, 0);
    //setphoneNumberError(!checkIsPhoneFormat(phoneNumber));
   
  });


 
 

  const checkEmail = (email) => {
    if (/\S+@\S+\.\S+/.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Please type a valid email");
    }
  };

  

  useEffect(() => {
    checkEmail(phoneNumber);
  }, [phoneNumber]);

  const onChangeEmail = (ev) => {
    setPhoneNumber(ev.target.value);
    checkEmail(ev.target.value);
  };


  const Confirmation =() =>{
    axios
    .post("https://hegemony.donftify.digital:8080/supporter/get-code", {
     email:phoneNumber
    })
    .then(function (response) {
      if (response.data =="Email sent successfully !")
      {
        setResetPassword(true);
      }
      else
      {
        setresetPasswordError(true)
        setErrorMessage(response.data);
      }

    })
  }
 

  return (
    <>
      <Header whiteMode showCloseBtn transparent={true} />
      <div
        id="appCapsule"
        className="bg-g login"
        style={{ minHeight: "100vh" }}
      >
        <img src={"assets/img/logo2.png"} alt="logo" className="logo mt-0" />
        <p className="header-text mt-3 white mb-1">Reset password</p>
        
        <div className="or">
          <hr className="hr bg-white" />
          <span className="white m-3">Insert you email for confirmation</span>
          <hr className="hr bg-white" />
        </div>
        <div className="flex-center">
          <form id="login-form">
            <div className="form-group boxed">
              <div className="input-wrapper">
                <input
                  type="email"
                  className="form-control"
                  id="email4b"
                  placeholder="Your email"
                  value={phoneNumber}
                  onChange={(ev) => onChangeEmail(ev)}
                />
              </div>
              {EmailError &&  (
                <h6 className="error-message">{EmailError}</h6>
              )}
            </div>

          
            
          
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-3 mb-4 "
              /*onClick={() => setShowWelcomeCirclesModal(true)} */
              onClick={() => Confirmation()}
            >
              Confirmation
            </button>
          </form>
          {resetPassword && (
              <h6 className="error-message">
                We have sent you an email, please check
                <br /> your email to reset your password
              </h6>
            )}
            {resetPasswordError && (
              <h6 className="error-message">
                {ErrorMessage}
              </h6>
            )}
        </div>

       
      </div>
    </>
  );
}

export default withRouter(ForgetPasswordEmailSent);
