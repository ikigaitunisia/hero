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
      <div className="section mt-4 mb-4 text-center">
        <img src="assets/img/supporter.png" className="supporter-logo" />
      </div>
      <div className="section mt-2 text-center">
        <h3 className="white-text">Enter SMS Code</h3>
        <h4 className="white-text">Enter 4 digit sms verification code</h4>
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

          <div className="mt-3 mb-3 center-div">
            <button
              type="submit"
              className="btn btn-link btn-block btn-lg rounded"
              style={{ backgroundColor: "white" }}
            >
              Verify
            </button>
          </div>
          <div>
            <a href="" className="white-text">
              Resend SMS
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(SmsVerification);
