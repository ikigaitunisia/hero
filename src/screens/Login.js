import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import BlockLargeButton from "../components/buttons/BlockLargeButton";
import SmsVerification from "../components/SmsVerification";
import BasicInput from "../components/inputs/BasicInput";
import { checkIsPhoneFormat } from "../util/functions";
import Toastbox, { toast } from "react-toastbox";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberError, setphoneNumberError] = useState(false);
  const [showSmsVerification, setShowSmsVerification] = useState(false);
  const [codeSmsValidated, setCodeSmsValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [points, setPoints] = useState("");
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
    const user = JSON.parse(localStorage.getItem('user'));
    if (user != null)
    {
      console.log("utilisateur trouvé");
    }
    else{
      setPoints("...");
    axios
    .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
      phoneNumber: phoneNumber,
      password: password
    })
    .then(function (response) {
      console.log(response.data);
      localStorage.setItem('user', JSON.stringify({phoneNumber: phoneNumber,wallet:response.data}));
      history.push("/feed")
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
    }
    console.log("Login successful :)");
  };

  return (
    <React.Fragment>
      <Toastbox position="top-right" pauseOnHover={true} intent="danger" />
      {!showSmsVerification && !codeSmsValidated && (
        <div id="appCapsule">
          <div className="section mt-2 text-center">
            <h1>Log in</h1>
            <h4>Enter your phone number to log in</h4>
          </div>
          <div className="section mb-5 p-2">
            <form onSubmit={login}>
              <div className="card">
                <div className="card-body pb-1">
                  <BasicInput
                    type="text"
                    label="Phone Number"
                    id="phone"
                    placeholder="Your phone number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-button-group  transparent">
                <BlockLargeButton value="Log in" type="submit" />
              </div>
            </form>
          </div>
        </div>
      )}
      {showSmsVerification && !codeSmsValidated && (
        <SmsVerification onCodeValidate={onCodeValidate} />
      )}
      {codeSmsValidated && (
        <div id="appCapsule">
          <div className="section mt-2 text-center">
            <h1>Log in</h1>
            <h4>Enter your password to log in</h4>
          </div>
          <div className="section mb-5 p-2">
            <form onSubmit={validate}>
              <div className="card">
                <div className="card-body pb-1">
                  <BasicInput
                    type="password"
                    label="Password"
                    id="password1"
                    placeholder="Your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <BasicInput
                    type="password"
                    label="Password Again"
                    id="password2"
                    placeholder="Type password again"
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-button-group  transparent">
                <BlockLargeButton value={"Validate"+points}  onClick={() => createWallet()}/>
              </div>
            </form>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default withRouter(Login);
