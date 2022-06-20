import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastbox";

function SmsVerification(props) {
  const [smsCode, setSmsCode] = useState("");

  const verfiySmsCode = (e) => {
    e.preventDefault();
    if (smsCode === "" || smsCode.length !== 4) {
      toast.error("Invalid sms code");
      return;
    }
    props.onCodeValidate();
  };
  return (
    <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
      <div className="section mt-4 pt-4 pb-3 text-center">
        <img
          src={
            props.isMobilizer
              ? "assets/img/mobilizersLogoWhite.png"
              : "assets/img/supporter.png"
          }
          className="supporter-logo"
        />
      </div>
      <div className="section text-center">
        <div className="lead white-text">
          <h4 className="white-text text-title">Enter SMS Code</h4>
          this is a test page: please enter 0000 as a verification code
        </div>
      </div>
      <div className="section mb-5 p-2">
        <form onSubmit={verfiySmsCode} className="login-form" id="white-form">
          <div className="form-group basic">
            <input
              type="text"
              style={{
                background: "transparent!important",
                color: "white!important",
              }}
              className="form-control verification-input"
              id="smscode"
              placeholder="••••"
              maxLength="4"
              onChange={(e) => setSmsCode(e.target.value)}
            />
          </div>

          <div className="pt-4 mt-4 center-div">
            <button
              type="submit"
              className="btn btn-link btn-block btn-lg rounded"
              style={{
                backgroundColor: "white",
                width: "200px",
                margin: "0 auto",
              }}
            >
              Verify
            </button>
          </div>
          {/*<div>
            <a href="" className="white-text">
              Resend SMS
            </a>
            </div>*/}
        </form>
      </div>
    </div>
  );
}

export default withRouter(SmsVerification);
