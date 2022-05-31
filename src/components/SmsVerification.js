import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import BlockLargeButton from "../components/buttons/BlockLargeButton";
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
    <div id="appCapsule">
      <div className="section mt-2 text-center">
        <h1>Enter SMS Code</h1>
        <h4>Enter 4 digit sms verification code</h4>
      </div>
      <div className="section mb-5 p-2">
        <form onSubmit={verfiySmsCode}>
          <div className="form-group basic">
            <input
              type="text"
              className="form-control verification-input"
              id="smscode"
              placeholder="••••"
              maxLength="4"
              onChange={(e) => setSmsCode(e.target.value)}
            />
          </div>

          <div className="form-button-group transparent">
            <BlockLargeButton value="Verify" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(SmsVerification);
