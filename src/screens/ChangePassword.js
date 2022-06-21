import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import BasicInput from "../components/inputs/BasicInput";
import Toastbox, { toast } from "react-toastbox";
import Header from "../components/Header";
import "./Login.css";
function ChangePassword() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const validate = (e) => {
    e.preventDefault();
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 8) {
      toast.error("Make sure to include at least 8 characters");
      return;
    }
    if (password !== rePassword) {
      toast.error("the passwords are not the same");
      return;
    }
    console.log("Login successful :)");
  };

  return (
    <React.Fragment>
      <Header whiteMode showLogo showBackBtn />
      <Toastbox position="top-right" pauseOnHover={true} intent="danger" />
      <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
        <div className="section mt-4 pt-4 text-center">
          <img src="assets/img/supporter.png" className="supporter-logo" />
        </div>
        <div className="section text-center">
          <div className="lead white-text">
            <h4 className="white-text text-title">Change password</h4>
            Make sure to include at least 8 characters.
          </div>
        </div>
        <div className="section mb-5 p-2">
          <form onSubmit={validate} id="white-form" className="login-form">
            <BasicInput
              type="password"
              label=""
              id="password1"
              placeholder="Your new password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <BasicInput
              type="password"
              label=""
              id="password2"
              placeholder="Type new password again"
              onChange={(e) => setRePassword(e.target.value)}
            />
            <div className="mt-2">
              <div class="form-check mb-1">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  class="form-check-label"
                  for="flexRadioDefault1"
                  style={{ fontSize: "14px" }}
                >
                  I agree to the{" "}
                  <a
                    href="https://herolabsco.notion.site/Private-Policy-3da3d0ebdd3849dfa7d48fb13cf27564"
                    className="white-text"
                    target="_blank"
                  >
                    HERO Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <div className="pt-4 center-div">
              <button
                type="submit"
                className="btn btn-link btn-block btn-lg rounded"
                style={{ backgroundColor: "white" }}
              >
                {"Validate"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(ChangePassword);
