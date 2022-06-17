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
import "./Login.css";
function LoginAct() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberError, setphoneNumberError] = useState(false);
  const [showSmsVerification, setShowSmsVerification] = useState(false);
  const [codeSmsValidated, setCodeSmsValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [points, setPoints] = useState("");
  const [erroPassword, setErrorPassword] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setphoneNumberError(!checkIsPhoneFormat(phoneNumber));
  }, [phoneNumber]);

  const login = (e) => {
    e.preventDefault();
    if (!phoneNumberError) {
      setShowSmsVerification(true);
    } else {
      toast.error("Invalid phone number!");
      return;
    }
  };
  const createWallet = () => {
    console.log("ok");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      console.log("utilisateur trouvé");
    } else {
      setPoints("...");
      axios
        .post("https://hegemony.donftify.digital:8080/CheckPassword/", {
          numeroTel: phoneNumber,
          password: password,
        })
        .then(function (response) {
          console.log(response.data);
          if (response.data.error == undefined) {
            localStorage.setItem("user", JSON.stringify(response.data));
            history.push("/mobilizercard");
          } else {
            setErrorPassword(true);
          }
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
    /*if (!password) {
      toast.error("Password is requiered");
      return;
    }
    if (password.length < 8) {
      toast.error("Password must contain at least 8 characters long");
      return;
    }
    if (password !== rePassword) {
      toast.error("the passwords are not the same");
      return;
    }*/

    console.log("Login successful :)");
  };

  return (
    <React.Fragment>
      <Header whiteMode showLogo showBackBtn />
      <Toastbox position="top-right" pauseOnHover={true} intent="danger" />
      {!showSmsVerification && !codeSmsValidated && (
        <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
          <div className="section mt-4 mb-4 text-center">
            <img src="assets/img/mobilizersLogoWhite.png" className="supporter-logo" />
          </div>
          <div className="section mt-2 text-center">
            <h4 className="white-text">Enter your phone number to log in</h4>
          </div>
          <div className="section mb-5 p-2">
            <form id="white-form" onSubmit={login} className="login-form">
              <BasicInput
                type="text"
                label=""
                id="phone"
                placeholder="(Country Code) Your phone number"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <div className="mt-3 mb-3 center-div">
                <button
                  type="submit"
                  className="btn btn-link btn-block btn-lg rounded"
                  style={{ backgroundColor: "white" }}
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showSmsVerification && !codeSmsValidated && (
        <SmsVerification onCodeValidate={onCodeValidate} isMobilizer={true}/>
      )}
      {codeSmsValidated && (
        <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
          <div className="section mt-4 mb-4 text-center">
            <img src="assets/img/mobilizersLogoWhite.png" className="supporter-logo" />
          </div>
          <div className="section mt-2 text-center">
            <h3 className="white-text">Create new password</h3>
            <h4 className="white-text">
              Make sure to include at least 1 capital letter and 1 number or
              symbol
            </h4>
          </div>
          <div className="section mb-5 p-2">
            <form onSubmit={validate} id="white-form" className="login-form">
              <BasicInput
                type="password"
                label=""
                id="password1"
                placeholder="Your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <BasicInput
                type="password"
                label=""
                id="password2"
                placeholder="Type password again"
                onChange={(e) => setRePassword(e.target.value)}
              />
              {erroPassword && <h3>incorrect password</h3>}
              <div>
                <div className="form-check mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    I agree to the{" "}
                    <a href="" className="white-text">
                      HERO Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <div className="mt-3 mb-3 center-div">
                <button
                  type="submit"
                  className="btn btn-link btn-block btn-lg rounded"
                  style={{ backgroundColor: "white" }}
                  onClick={() => createWallet()}
                >
                  {"Validate" + points}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default withRouter(LoginAct);
