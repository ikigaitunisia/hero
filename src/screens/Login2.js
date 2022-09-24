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
          name: HeroID,
          lastname: "",
          HeroId: phoneNumber.split("@")[0],
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
  const checkPassword = () => {
    axios
      .post(`https://hegemony.donftify.digital:8080/CheckPassword`, {
        email: phoneNumber,
        password: password,
      })
      .then((K) => {
        console.log(K.data);
        return K.data;
      });
  };
  const validate = async (e) => {
    let x = true;
    console.log(password);
    if (!checked) {
      setCheckedError("You should accept the HERO Terms of Use");
      x = false;
    }
    if (password == "") {
      setPasswordError("Password is required");
      x = false;
    } else {
      setPasswordError("");

      if (password.length < 8) {
        setPasswordError("Your password is not strong enough");
        x = false;
      } else {
        const t = checkPassword();
        if (true) {
          setPasswordError("");
          if (password !== rePassword) {
            setRePasswordError("The passwords you entered do not match");
            x = false;
          } else {
            setRePasswordError("");
          }
        } else {
          setRePasswordError("Please check password");
          x = false;
        }
      }
    }

    if (HeroID == "") {
      setFullnameError("Please enter your name");
      x = false;
    } else {
      setFullnameError("");
    }
    if (/\S+@\S+\.\S+/.test(phoneNumber)) {
      setEmailError("");
    } else {
      setEmailError("Please type a valid email");
      x = false;
    }
    if (x == true && checked) {
      createWallet();
    }
  };
  const [showWelcomeCirclesModal, setShowWelcomeCirclesModal] = useState(false);
  const onChangeFullName = (ev) => {
    setHeroID(ev.target.value);
    if (!ev.target.value) {
      setFullnameError("Please enter your name");
    } else {
      setFullnameError("");
    }
  };

  const onChangeEmail = (ev) => {
    setPhoneNumber(ev.target.value);
    if (/\S+@\S+\.\S+/.test(ev.target.value)) {
      setEmailError("");
    } else {
      setEmailError("Please type a valid email");
    }
  };

  const onChangePassword = (ev) => {
    setPassword(ev.target.value);
    if (ev.target.value == "") {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
      if (ev.target.value.length < 6) {
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

  const onChangeChecked = (ev) => {
    setChecked(ev.target.value);
    console.log(ev.target.value);
    if (!ev.target.value) {
      setCheckedError("You should accept the hero terms and conditons");
    } else {
      setCheckedError("");
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
                  onChange={(ev) => onChangeEmail(ev)}
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
              {EmailError && <h6 className="error-message">{EmailError}</h6>}
            </div>

            <div className="form-group boxed">
              <div className="input-wrapper">
                <label className="label mb-3" htmlFor="text4b">
                  Password
                  <br />
                 
                </label>
                <input
                  type="password"
                  autoComplete="off"
                  className="form-control"
                  id="password4b"
                  placeholder="Password"
                  value={password}
                  onChange={(ev) => onChangePassword(ev)}
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
              {passwordError && (
                <h6 className="error-message">{passwordError}</h6>
              )}
            </div>
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4 "
              /*onClick={() => setShowWelcomeCirclesModal(true)} */
              onClick={(e) => validate(e)}
            >
              Log in
            </button>
            <hr/>
            <small className="mt-3">
            For new HERO Supporters
                  </small>
            <div className="form-group boxed">
              <div className="input-wrapper">
              <div className="mt-4 flex-center flex-col">
            <button
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-2 mb-4 "
              onClick={() => history.push("/circle-feed")}
            >
              <ion-icon src="assets/img/svg/icon2.svg"></ion-icon>
              Fund a HERO Circle
            </button>
          </div>
              </div>
             
            </div>
           
           
            

           
          </form>
        </div>
      </div>
    </>
  );
}

export default withRouter(Login2);
