import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./EditPassword.css";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function EditPassword(props) {
  const history = useHistory();
  const [success, setSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const updateUserPassword = () => {
    setSuccess(true);
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
              <br />
              and should include a combination of letters and numbers
              <br /> or special characters (!$@%)
            </span>
            <hr className="hr mt-4 mb-4" />
            <div id="">
              <form>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="text4b">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="text4b"
                      placeholder=""
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="text4b">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="text4b"
                      placeholder=""
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                </div>
                <div className="form-group boxed">
                  <div className="input-wrapper">
                    <label className="label mb-3" for="text4b">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="text4b"
                      placeholder=""
                    />
                    <i className="clear-input">
                      <ion-icon name="close-circle"></ion-icon>
                    </i>
                  </div>
                  {passwordError && (
                    <h6 className="error-message">{passwordError}</h6>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(EditPassword);
