import React, { useState, useEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";

import "./Login1.css";
import WelcomeCirclesModal from "../components/modals/WelcomeCirclesModal";
function Login1() {
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberError, setphoneNumberError] = useState(false);
  const [EmailError, setEmailError] = useState("");

  const [showSmsVerification, setShowSmsVerification] = useState(false);
  const [codeSmsValidated, setCodeSmsValidated] = useState(false);
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [HeroID, setHeroID] = useState("");
  const [HeroIDError, setHeroIDError] = useState("");
  const [checkedError, setCheckedError] = useState("");

  const [points, setPoints] = useState("");
  const [loginOnly, setloginOnly] = useState(true);
  const [amount, setAmount] = useState(0);
  const [circle, setCircle] = useState("");
  const [checked, setChecked] = useState(false);
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
  useEffect(() => {
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
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });
  const onSuccess = async (res) => {
    console.log("success:", res);
    setPoints("...");
    axios
      .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
        Email: res.profileObj.email,
        password: "",
        googleId: res.profileObj.googleId,
        imageUrl: res.profileObj.imageUrl,
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
        let a = JSON.parse(localStorage.getItem("user"));

        if (loginOnly == false) {
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
        } else {
          isSubscribed(res.profileObj.email).then((response) => {
            if (response.length == 0) {
              history.push("/circle-feed");
            } else {
              history.push("/circle-home:" + response[0].grName);
            }
          });
        }
      })
      .catch(function (error) {
        //handle error here
        console.log(error);
      });
  };

  const onFailure = (err) => {
    console.log("failed:", err);
  };
  const createWallet = async () => {
    console.log("ok");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      const A = await isSubscribed(user.Email);
      if (A.length == 0) {
        history.push("/circle-feed");
      } else {
        history.push("/circle-home:" + A[0].grName);
      }
    } else {
      setPoints("...");
      axios
        .post("https://hegemony.donftify.digital:8080/CreateWallet/", {
          Email: phoneNumber,
          password: password,
          googleId: "",
          imageUrl: "",
          name: "",
          lastname: "",
          HeroId: HeroID,
        })
        .then(function (response) {
          localStorage.setItem(
            "user",
            JSON.stringify({ Email: phoneNumber, wallet: response.data })
          );
          if (loginOnly == false) {
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
          } else {
            let data = isSubscribed(phoneNumber).then((response) => {
              if (response.length == 0) {
                history.push("/circle-feed");
              } else {
                history.push("/circle-home:" + response[0].grName);
              }
            });
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
    let x = true;
    console.log(password);
    if (!checked) {
      setCheckedError("You should accept the hero terms and conditons");
      x = false;
    }
    if (password == "") {
      setPasswordError("Password is required");
      x = false;
    } else {
      setPasswordError("");
      if (password.length < 6) {
        setPasswordError("Make sure to include at least 6 characters");
        x = false;
      } else {
        setPasswordError("");
        if (password !== rePassword) {
          setPasswordError("the passwords are not the same");
          x = false;
        } else {
          setPasswordError("");
        }
      }
    }

    if (/\S+@\S+\.\S+/.test(phoneNumber)) {
      setEmailError("");
    } else {
      setEmailError("the email is not valid");
      x = false;
    }
    if (x == true && checked) {
      createWallet();
    }
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
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
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
                <label className="label mb-3" htmlFor="text4b">
                  Email
                </label>
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
              {EmailError && <h6  className="error-message">{EmailError}</h6>}
            </div>

            <div className="form-group boxed">
              <div className="input-wrapper">
                <label className="label mb-3" htmlFor="text4b">
                  Password
                  <br />
                  <small className="mt-3">
                    Your password must be at least 8 characters
                    <br /> and should include a combination of letters and
                    <br /> numbers or special characters (!$@%)
                  </small>
                </label>
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
                <label className="label mb-3" htmlFor="text4b">
                  Confirm your password
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="password4b"
                  placeholder="Type your password again"
                  value={rePassword}
                  onChange={(ev) => setRePassword(ev.target.value)}
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
              {passwordError && <h6 className="error-message">{passwordError}</h6>}
            </div>
            <div className="form-group boxed">
              <div className="input-wrapper">
                <label className="label mb-3" htmlFor="text4b">
                  Full Name
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  className="form-control"
                  id="password4b"
                  placeholder="First Name Last Name"
                  value={HeroID}
                  onChange={(ev) => setHeroID(ev.target.value)}
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
                Make my subscription private
              </label>
            </div>
            <div className="form-check p-0 mt-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="customCheckb2"
                value={checked}
                onChange={(ev) => setChecked(ev.target.value)}
              />
              <label className="form-check-label white" htmlFor="customCheckb2">
                I agree to the{" "}
                <a
                  href="https://herolabsco.notion.site/Terms-of-Use-2ad8469c5f5e414eab44966ed5ec1627"
                  style={{ textDecoration: "underline" }}
                >
                  HERO Terms of Use
                </a>
              </label>
              {checkedError && <h6  className="error-message">{checkedError}</h6>}
            </div>

            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4 "
              /*onClick={() => setShowWelcomeCirclesModal(true)} */
              onClick={(e) => validate(e)}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default withRouter(Login1);
