import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./EditPassword.css";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { checkIsValidPassword } from "../util/functions";
import axios from "axios";
function EditPassword(props) {
  const history = useHistory();

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [errormessage, setErrormessage] = useState(false);
  const [currentPasswordError, setCurrentPasswordError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [hiddenCurrentPassword, setHiddenCurrentPassword] = useState(true);
  const [hiddenNewPassword, setHiddenNewPassword] = useState(true);
  const [hiddenNewRePassword, setHiddenNewRePassword] = useState(true);

  const [success, setSuccess] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  const onChangeCurrentPassword = (ev) => {
    setCurrentPassword(ev.target.value);
  };
  const onChangePassword = (ev) => {
    setPassword(ev.target.value);
    if (ev.target.value == "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
      if (!checkIsValidPassword(ev.target.value)) {
        setPasswordError("Your password is not strong enough");
      } else {
        setPasswordError("");
        if (ev.target.value !== rePassword) {
          setRePasswordError("The password you entered doesn’t match");
        } else {
          setRePasswordError("");
        }
      }
    }
  };

  const onChangeRePassword = (ev) => {
    setRePassword(ev.target.value);
    if (ev.target.value !== password) {
      setRePasswordError("The password you entered doesn’t match");
    } else {
      setRePasswordError("");
    }
  };
  const updateUserPassword = () => {
    axios
      .post(
        "https://hegemony.donftify.digital:8080/supporter/change-password",
        {
          email: user.Email,
          oldPassword: currentPassword,
          newPassword: password,
        }
      )
      .then(function (response) {
        setSuccess(true);
        setErrormessage(false);
        setPassword("");
        setRePassword("");
        setCurrentPassword("");
        window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: 'smooth'
        });
      })
      .catch(function (error) {
        //handle error here
        setSuccess(false);
        setErrormessage(true);
        window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: 'smooth'
        });
      });
  };
  return (
    <>
      <Header
        showTitlePage
        title={"Change Password"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
        backTo={"/"}
      />
      <div id="appCapsule" className="edit-password">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/account.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/account-information")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/passwordInfoWhite.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/notification.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/subscriptions")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/card.svg"
            class="mb-2 icon-btn me-2"
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card flex-center pt-4 pb-4">
            <span>
              Your password must be at least 8 characters
              <br /> and should include a combination of letters and
              <br /> at least one number and one special character (!$@%+-*/)
            </span>
            <hr className="hr mt-4 mb-4" />
            <div id="">
              <form>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" htmlFor="text4b">
                      Current Password
                    </label>
                    <input
                      type={hiddenCurrentPassword ? "password" : "text"}
                      className="form-control"
                      id="text4b"
                      placeholder=""
                      value={currentPassword}
                      onChange={(ev) => onChangeCurrentPassword(ev)}
                    />
                    <i
                      className="clear-input"
                      onClick={() =>
                        setHiddenCurrentPassword((current) => !current)
                      }
                    >
                      <ion-icon
                        name={hiddenCurrentPassword ? "eye-off" : "eye"}
                        role="img"
                        className="md hydrated white"
                        aria-label="close circle"
                      ></ion-icon>
                    </i>
                  </div>
                  {currentPasswordError && (
                    <h6 className="error-message">{currentPasswordError}</h6>
                  )}
                </div>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" htmlFor="text4b">
                      New Password
                    </label>
                    <input
                      type={hiddenNewPassword ? "password" : "text"}
                      className="form-control"
                      id="text4b"
                      placeholder=""
                      value={password}
                      onChange={(ev) => onChangePassword(ev)}
                    />
                    <i
                      className="clear-input"
                      onClick={() =>
                        setHiddenNewPassword((current) => !current)
                      }
                    >
                      <ion-icon
                        name={hiddenNewPassword ? "eye-off" : "eye"}
                        role="img"
                        className="md hydrated white"
                        aria-label="close circle"
                      ></ion-icon>
                    </i>
                  </div>
                  {passwordError && (
                    <h6 className="error-message">{passwordError}</h6>
                  )}
                </div>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" htmlFor="text4b">
                      Confirm New Password
                    </label>
                    <input
                      type={hiddenNewRePassword ? "password" : "text"}
                      className="form-control"
                      id="text4b"
                      placeholder=""
                      value={rePassword}
                      onChange={(ev) => onChangeRePassword(ev)}
                    />
                    <i
                      className="clear-input"
                      onClick={() =>
                        setHiddenNewRePassword((current) => !current)
                      }
                    >
                      <ion-icon
                        name={hiddenNewRePassword ? "eye-off" : "eye"}
                        role="img"
                        className="md hydrated white"
                        aria-label="close circle"
                      ></ion-icon>
                    </i>
                  </div>
                  {rePasswordError && (
                    <h6 className="error-message">{rePasswordError}</h6>
                  )}
                </div>
              </form>

              <button
                type="button"
                className="btn btn-outline-secondary btn-lg mt-4"
                onClick={() => updateUserPassword()}
              >
                Save
              </button>
              <br />
              <br />
              {success && (
                <Alert
                  severity="success"
                  color="info"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setSuccess(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Thank you, your password has been updated
                </Alert>
              )}
              {errormessage && (
                <Alert
                  severity="error"
                  color="error"
                  action={
                    <IconButton
                      aria-label="close"
                      color="inherit"
                      size="small"
                      onClick={() => {
                        setSuccess(false);
                      }}
                    >
                      <CloseIcon fontSize="inherit" />
                    </IconButton>
                  }
                >
                  Current password incorrect!
                </Alert>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(EditPassword);
