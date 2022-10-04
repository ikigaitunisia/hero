import React, { useEffect, useState, useRef } from "react";
import { Modal } from "bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import "./ChangeSubscription.css";

function ChangeSubscription(props) {
  const history = useHistory();
  const subscription = props.location.state
    ? props.location.state.subscription
    : null;

  const [amount, setAmount] = useState(
    subscription ? subscription.amount : null
  );
  const [validAmount, setValidAmount] = useState(true);
  const [overAmount, setOverAmount] = useState(50);
  const [confirmChange, setConfirmChange] = useState(false);

  const validateAmount = async (ev) => {
    if (ev < 50) {
      setValidAmount(false);
    } else {
      setValidAmount(true);
    }
    setOverAmount(ev);
  };

  const confirm = () => {
    setConfirmChange(true);
  };

  return (
    <>
      <Header whiteMode transparent showCloseBtn />

      <div id="appCapsule" className="change-subscription">
        {!confirmChange && (
          <div id="amount-select" className="flex-center flex-col">
            <img src={"assets/img/logo2.png"} alt="logo" className="logo" />
            <p
              className="header-text mt-4 white"
              style={{ textAlign: "center" }}
            >
              Choose your HERO Circle
              <br /> Membership
            </p>
            <div className="button-wrapper mt-4">
              <button
                type="button"
                className={
                  amount === 10
                    ? "btn btn-outline-primary custom-btn-white me-1 mb-1 flex"
                    : "btn btn-outline-primary custom-btn me-1 mb-1 flex"
                }
                onClick={() => {
                  setAmount(10);
                  confirm();
                }}
              >
                <img
                  src={
                    amount === 10
                      ? "assets/img/heroLogoBlue.png"
                      : "assets/img/heroLogoWhite.png"
                  }
                  alt="logo"
                  className="logo"
                />
                <span>STARTER</span>
              </button>
              <div className="amount-div white mt-2">
                <sup>€</sup>10<span>/mo</span>
              </div>
              <h6 className="mt-1">Access to Circle Updates</h6>
              <h6 className="italic">
                Follow the discussions at the front lines of climate action
              </h6>
            </div>
            <hr className="hr mt-2 mb-2" />

            <div className="button-wrapper mt-4">
              <button
                type="button"
                className={
                  amount === 20
                    ? "btn btn-outline-primary custom-btn-white me-1 mb-1 flex"
                    : "btn btn-outline-primary custom-btn me-1 mb-1 flex"
                }
                onClick={() => {
                  setAmount(20);
                  confirm();
                }}
              >
                <img
                  src={
                    amount === 20
                      ? "assets/img/heroLogoBlue.png"
                      : "assets/img/heroLogoWhite.png"
                  }
                  alt="logo"
                  className="logo"
                />
                <span>ADVOCATE</span>
              </button>
              <div className="amount-div white mt-2">
                <sup>€</sup>20<span>/mo</span>
              </div>
              <h6 className="mt-1">Access to Circle Updates + Videos</h6>
              <h6 className="italic">
                Behind the scenes videos of campaigns and events
              </h6>
            </div>
            <hr className="hr mt-2 mb-2" />

            <div className="button-wrapper mt-4">
              <button
                type="button"
                className={
                  amount === 50
                    ? "btn btn-outline-primary custom-btn-white me-1 mb-1 flex"
                    : "btn btn-outline-primary custom-btn me-1 mb-1 flex"
                }
                onClick={() => setAmount(50)}
              >
                <img
                  src={
                    amount === 50
                      ? "assets/img/heroLogoBlue.png"
                      : "assets/img/heroLogoWhite.png"
                  }
                  alt="logo"
                  className="logo"
                />
                <span>CHANGER</span>
              </button>
              <h6 className="mt-1">
                You can choose the monthly amount
                <br /> you want to contribute, starting at €50
              </h6>
              <div className="form-group basic animated">
                <div className="input-wrapper">
                  <span>€</span>
                  <input
                    type="number"
                    className="form-control"
                    id="userid2"
                    value={overAmount}
                    onChange={(ev) => validateAmount(ev.target.value)}
                    onClick={() => {
                      setOverAmount("");
                      setAmount(50);
                      confirm();
                    }}
                    style={{
                      color: "white",
                      fontSize: 25,
                      textAlign: "center",
                    }}
                    //disabled={amount !== 50 ? "disabled" : ""}
                  />
                  <i className="clear-input">
                    <ion-icon
                      name="close-circle"
                      role="img"
                      class="md hydrated"
                      aria-label="close circle"
                    ></ion-icon>
                  </i>
                  <span>/mo</span>
                </div>
              </div>
              <h6 className="mt-1">
                Access to Circle Updates + Videos + Interactions{" "}
              </h6>
              <h6 className="italic">
                Everything you ever wanted to ask to those driving change
              </h6>
              {!validAmount && (
                <h6 className="error-message">
                  Please input an amont above € 50{" "}
                </h6>
              )}
            </div>
            <button
              type="button"
              className="btn btn-icon rounded btn-primary submit-btn-rounded me-1 mb-1 mt-4"
            >
              <ion-icon
                src="assets/img/svg/next.svg"
                style={{ color: "blue" }}
              ></ion-icon>
            </button>
          </div>
        )}
        {confirmChange && (
          <div id="welcomeCircles" className="flex-center flex-col">
            <img
              src={"assets/img/logo2.png"}
              alt="logo"
              className="logo mt-0"
            />
            <p className="header-text mt-4 white mb-0">
              Your subscription has been
              <br /> succesfully changed.
            </p>
            <p className="mt-4 mb-4 white center-text">
              You are now a HERO Starter and will have access to Circle Updates.
            </p>

            <button type="button" className="btn btn-lg mb-4">
              <b>Echo this circle,</b>
              <br />
              <span>invite your friends to join!</span>
            </button>
            <button type="button" className="btn btn-lg mb-4">
              <b>Go to your HERO Circle</b>
            </button>
            <button type="button" className="btn btn-lg mb-4">
              <b>Go to your profile</b>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ChangeSubscription;
