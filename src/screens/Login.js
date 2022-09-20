import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import BlockLargeButton from "../components/buttons/BlockLargeButton";
import SmsVerification from "../components/SmsVerification";
import BasicInput from "../components/inputs/BasicInput";
import { checkIsPhoneFormat } from "../util/functions";
import Toastbox, { toast } from "react-toastbox";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import "./Login.css";
import WelcomeCirclesModal from "../components/modals/WelcomeCirclesModal";
function Login() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberError, setphoneNumberError] = useState(false);
  const [showSmsVerification, setShowSmsVerification] = useState(false);
  const [codeSmsValidated, setCodeSmsValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [points, setPoints] = useState("");
  const history = useHistory();
  const clientId = '213045835379-hcm9r1um59u7dksk2h73773e6jfepinn.apps.googleusercontent.com';

  useEffect(() => {
    //setphoneNumberError(!checkIsPhoneFormat(phoneNumber));
    const initClient = () => {
      gapi.client.init({
      clientId: clientId,
      scope: ''
    });
 };
 gapi.load('client:auth2', initClient);

  })
  const onSuccess = (res) => {
    console.log('success:', res);
    setPoints("...");
      axios
        .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
          Email: res.profileObj.email,
          password: "",
          googleId: res.profileObj.googleId,
          imageUrl:res.profileObj.imageUrl,
          name:res.profileObj.givenName,
          lastname:res.profileObj.familyName
        })
        .then(function (response) {
          console.log(response.data);
          localStorage.setItem(
            "user",
            JSON.stringify({ Email: res.profileObj.email, wallet: response.data ,imageUrl:res.profileObj.imageUrl,
              name:res.profileObj.givenName,
              lastname:res.profileObj.familyName})
          );
          history.push("/");
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    }

  const onFailure = (err) => {
      console.log('failed:', err);
  };
  const createWallet = () => {
    console.log("ok");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      console.log("utilisateur trouvé");
    } else {
      setPoints("...");
      axios
        .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
          Email: phoneNumber,
          password: password,
          googleId: "",
          imageUrl:"",
          name:"",
          lastname:""
        })
        .then(function (response) {
          console.log(response.data);
          console.log(phoneNumber);
          localStorage.setItem(
            "user",
            JSON.stringify({ Email: phoneNumber, wallet: response.data })
          );
          history.push("/");
        })
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    }
  };
  const onCodeValidate = () => {
    setCodeSmsValidated(true);
  };

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
  const [showWelcomeCirclesModal, setShowWelcomeCirclesModal] = useState(false);

  return (
    <>
      <div
        id="appCapsule"
        className="bg-g login"
        style={{ minHeight: "100vh" }}
      >
        {showWelcomeCirclesModal && (
          <WelcomeCirclesModal
            show={showWelcomeCirclesModal}
            onClose={() => setShowWelcomeCirclesModal(false)}
          />
        )}
        <img src={"assets/img/logo2.png"} alt="logo" className="logo mt-0" />
        <p className="header-text mt-4 white">Create your HERO Account</p>
        <div className="flex-center flex-col">
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
      />
        </div>
        <div className="or">
          <hr className="hr bg-white" />
          <span className="white m-3">OR</span>
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
                  onChange={(ev) => setPhoneNumber(ev.target.value)}
                />
                <i className="clear-input">
                  <ion-icon
                    name="close-circle"
                    role="img"
                    class="md hydrated"
                    aria-label="close circle"
                  ></ion-icon>
                </i>
              </div>
            </div>

            <div className="form-group boxed">
              <div className="input-wrapper">
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="password4b"
                  placeholder="Password"
                  value={password}
                  onChange={(ev) => setPassword(ev.target.value)}
                />
                <i className="clear-input">
                  <ion-icon
                    name="close-circle"
                    role="img"
                    className="md hydrated"
                    aria-label="close circle"
                  ></ion-icon>
                </i>
              </div>
            </div>

            <div className="form-group boxed">
              <div className="input-wrapper">
                <input
                  type="text"
                  className="form-control"
                  id="text4b"
                  placeholder="John Doe"
                />
                <i className="clear-input">
                  <ion-icon
                    name="close-circle"
                    role="img"
                    className="md hydrated"
                    aria-label="close circle"
                  ></ion-icon>
                </i>
              </div>
            </div>

            <div className="form-check p-0 mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheckb1"
              />
              <label className="form-check-label white" htmlFor="customCheckb1">
                I agree to the <a href="#">HERO Terms and Conditions</a>
              </label>
            </div>
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4 "
              /*onClick={() => setShowWelcomeCirclesModal(true)} */
              onClick={() => createWallet()}
            >
              Join HERO
            </button>
          </form>
        </div>
        <div className="flex-center">
          <button
            type="button"
            className="btn btn-icon rounded btn-primary submit-btn-rounded me-1 mb-1 mt-4"
            onClick={() => history.push("/")}
          >
            <ion-icon src="assets/img/svg/left.svg"></ion-icon>
          </button>
        </div>
      </div>
    </>
  );
}

export default withRouter(Login);
