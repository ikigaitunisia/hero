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
    //setphoneNumberError(!checkIsPhoneFormat(phoneNumber));
  }, [phoneNumber]);

  const login = (e) => {
    e.preventDefault();
    if (!phoneNumberError) {
      setShowSmsVerification(true);
      axios
        .post("https://hegemony.donftify.digital:8080/sendEmail/", {
          Email: phoneNumber,
        })
        .then(function (response) {})
        .catch(function (error) {
          //handle error here
          console.log(error);
        });
    } else {
      toast.error("Invalid Email");
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
        .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
          Email: phoneNumber,
          password: password,
        })
        .then(function (response) {
          console.log(response.data);
          localStorage.setItem(
            "user",
            JSON.stringify({ Email: phoneNumber, wallet: response.data })
          );
          history.push("/cardtransaction");
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

  return (
    <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
      <img src={"assets/img/logo2.png"} alt="logo" className="logo" />
      <p className="header-text mt-4 white">Create your HERO Account</p>
      <div className="flex-center flex-col">
        <button
          id="whiteBtn"
          type="button"
          className="btn btn-primary rounded font-size-btn mt-4 mb-4"
        >
          <ion-icon src="assets/img/svg/google.svg"></ion-icon>
          Sign up with Google
        </button>
      </div>
      <div className="or">
        <hr className="hr bg-white" />
        <span className="white m-3">OR</span>
        <hr className="hr bg-white" />
      </div>
      <div></div>
    </div>
  );
}

export default withRouter(Login);
