import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import Header from "../components/Header";
import "./Login1.css";
import WelcomeCirclesModal from "../components/modals/WelcomeCirclesModal";

function Login2() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [EmailError, setEmailError] = useState("");
  const [fullnameError, setFullnameError] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [HeroID, setHeroID] = useState("");
  const [checkedError, setCheckedError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [resetPassword, setResetPassword] = useState(false);

  const [points, setPoints] = useState("");
  const [loginOnly, setloginOnly] = useState(true);
  const [amount, setAmount] = useState(0);
  const [circle, setCircle] = useState("");
  const [checked, setChecked] = useState(false);
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const history = useHistory();
  const location = useLocation();
  const clientId =
    "213045835379-hcm9r1um59u7dksk2h73773e6jfepinn.apps.googleusercontent.com";

  const isSubscribed = async (email) => {
    let K = await axios.post(
      "https://hegemony.donftify.digital:8080/supporter/get-subscriptions",
      {
        email: email,
      }
    );

    console.log(K.data);
    return K.data;
  };
  const isHeroExist = async (HeroID) => {
    let K = await axios.post(
      "https://hegemony.donftify.digital:8080/supporter/HeroIDExist ",
      {
        HeroID: HeroID,
      }
    );

    console.log(K.data);
    return K.data;
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    //setphoneNumberError(!checkIsPhoneFormat(phoneNumber));
    const search = new URLSearchParams(location.search).get("fromSubsctiption");
    if (search !== null) {
      setloginOnly(false);
      const amnt = new URLSearchParams(location.search).get("amount");
      setAmount(amnt);
      const circ = new URLSearchParams(location.search).get("circle");
      setCircle(circ);
    }

    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
      });
    };
    gapi.load("client:auth2", initClient);
    const testSubsc = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user != null) {
        const A = await isSubscribed(user.Email);
        if (A.length == 0) {
          history.push("/circle-feed");
        } else {
          history.push("/circle-home:" + A[0].grName);
        }
      }
    };
    testSubsc();
  });
  const onSuccess = (res) => {
    isSubscribed(res.profileObj.email).then((response) => {
      if (response.length == 0) {
        history.push("/circle-feed");
      } else {
        history.push("/circle-home:" + response[0].grName);
      }
    });
    console.log(res.profileObj);

    axios
      .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
        Email: res.profileObj.email,
        password: "",
        googleId: res.profileObj.googleId,
        imageUrl: res.profileObj.imageUrl ? res.profileObj.imageUrl : "",
        name: res.profileObj.givenName,
        lastname: res.profileObj.familyName,
        HeroId: res.profileObj.email.split("@")[0],
      })
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem(
          "user",
          JSON.stringify({
            Email: res.profileObj.email,
            wallet: response.data,
            googleId: res.profileObj.googleId,
            imageUrl: res.profileObj.imageUrl,
            name: res.profileObj.givenName,
            lastname: res.profileObj.familyName,
            HeroId: res.profileObj.email.split("@")[0],
          })
        );
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };
  const login = () => {
    axios
      .post("https://hegemony.donftify.digital:8080/CheckPassword/", {
        email: phoneNumber,
        password: password,
      })
      .then(function (response) {
        if (response.data.found == "") {
          localStorage.setItem("user", JSON.stringify(response.data.infor));
          isSubscribed(phoneNumber).then((response) => {
            if (response.length == 0) {
              history.push("/circle-feed");
            } else {
              history.push("/circle-home:" + response[0].grName);
            }
          });
        } else {
          setPasswordError("Incorrect email or password");
        }
      });
  };
  const createWallet = async () => {
    setPoints("...");
    axios
      .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
        Email: phoneNumber,
        password: password,
        googleId: "",
        imageUrl: "",
        name: HeroID,
        lastname: "",
        HeroId: phoneNumber.split("@")[0],
      })
      .then(function (response) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            Email: phoneNumber,
            googleId: "",
            wallet: response.data,
          })
        );
        let a = JSON.parse(localStorage.getItem("user"));

        const customerId = a.wallet.customerId;
        console.log({
          mode: "subscription",
          grName: circle,
          amount: amount * 100,
          customerId: customerId,
        });
        axios
          .post(`https://hegemony.donftify.digital:8080/create-checkout`, {
            mode: "subscription",
            grName: circle,
            amount: amount * 100,
            customerId: customerId,
          })
          .then((res) => {
            console.log(res.data);
            window.location.href = res.data.url;
          })
          .catch((err) => {
            console.log(err);
          });
        let data = isSubscribed(phoneNumber).then((response) => {
          if (response.length == 0) {
            history.push("/circle-feed");
          } else {
            history.push("/circle-home:" + response[0].grName);
          }
        });
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
  };

  const onChangeEmail = (ev) => {
    setPhoneNumber(ev.target.value);
    if (/\S+@\S+\.\S+/.test(ev.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Please type a valid email");
    }
  };
  const passStreing = (password) => {
    var k = true;
    if (!/[a-z]/.test(password)) {
      k = false;
    }

    // Check if password contains at least 1 Uppercase letter
    if (!/[A-Z]/.test(password)) {
      k = false;
    }

    // Check if password contains at least 1 number
    if (!/[0-9]/.test(password)) {
      k = false;
    }
    if (!/[!@$#\+\-\$%\^&\*/]/.test(password)) {
      k = false;
    }
    if (password.length < 8) {
      k = false;
    }
    return k;
  };
  const onChangePassword = (ev) => {
    setPassword(ev.target.value);

    if (ev.target.value == "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
      if (!passStreing(ev.target.value)) {
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

  return (
    <>
      <Header whiteMode showCloseBtn transparent={true} />
      <div
        id="appCapsule"
        className="bg-g login"
        style={{ minHeight: "100vh" }}
      >
        <img src={"assets/img/logo2.png"} alt="logo" className="logo mt-0" />
        <p className="header-text mt-3 white mb-1">HERO Log In</p>
        <h6 className="white">For existing HERO Supporters</h6>
        <div className="flex-center flex-col mt-3">
          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={false}
            className="google-btn"
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
                  onChange={(ev) => onChangeEmail(ev)}
                />
              </div>
              {EmailError && <h6 className="error-message">{EmailError}</h6>}
            </div>

            <div className="form-group boxed mb-2">
              <div className="input-wrapper">
                <input
                  type={hiddenPassword ? "password" : "text"}
                  autoComplete="off"
                  className="form-control"
                  id="password4b"
                  placeholder="Password"
                  value={password}
                  onChange={(ev) => onChangePassword(ev)}
                />
                <i
                  className="clear-input"
                  onClick={() => setHiddenPassword((current) => !current)}
                >
                  <ion-icon
                    name={hiddenPassword ? "eye-off" : "eye"}
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
            <h5 onClick={() => setResetPassword(true)} className="white">
              Forgot my password
            </h5>
            {resetPassword && (
              <h6 className="error-message">
                We have sent you an email, please check
                <br /> your email to reset your password
              </h6>
            )}
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-3 mb-4 "
              /*onClick={() => setShowWelcomeCirclesModal(true)} */
              onClick={() => login()}
            >
              Log in
            </button>
          </form>
        </div>
        <hr className="hr bg-white" />

        <div className="bottom-text">
          <p className="header-text mt-4 white mb-1">For new HERO Supporters</p>
          <span style={{ color: "white", fontSize: "16px" }}>
            Join a HERO Circle to create an account
          </span>
        </div>
        <button
          id="whiteBlueBtn2"
          type="button"
          className="btn btn-primary rounded font-size-btn mt-4 mb-4 "
          onClick={() => history.push("/circle-feed")}
        >
          <ion-icon src="assets/img/svg/icon3.svg"></ion-icon>
          Fund a HERO Circle
        </button>
      </div>
    </>
  );
}

export default withRouter(Login2);
