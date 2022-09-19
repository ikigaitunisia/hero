import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import "./SubscriptionsAndPricing.css";

function SubscriptionsAndPricing(props) {
  const history = useHistory();
  const [amount, setAmount] = useState(null);

  return (
    <>
      <Header showCloseBtn whiteMode transparent={true} />

      <div id="appCapsule" className="subscriptions-pricing">
        <img src={"assets/img/logo2.png"} alt="logo" className="logo mt-3" />
        <p className="header-text mt-4 white">
          Choose your HERO Circle
          <br /> Membership
        </p>
        <div className="button-wrapper mt-4">
          <button
            type="button"
            className={
              amount === 10
                ? "btn btn-outline-primary custom-btn-white me-1 mb-1"
                : "btn btn-outline-primary custom-btn me-1 mb-1"
            }
            onClick={() => {
              setAmount(10);
              history.push("/circle-feed");
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
            <sup>STARTER</sup>
          </button>
          <div className="amount-div white mt-2">
            <sup>€</sup>10<span>/mo</span>
          </div>
          <h6 className="mt-1">Access to Circle Updates</h6>
        </div>
        <hr className="hr mt-2 mb-2" />

        <div className="button-wrapper mt-4">
          <button
            type="button"
            className={
              amount === 20
                ? "btn btn-outline-primary custom-btn-white me-1 mb-1"
                : "btn btn-outline-primary custom-btn me-1 mb-1"
            }
            onClick={() => {
              setAmount(20);
              history.push("/circle-feed");
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
            <sup>ADVOCATE</sup>
          </button>
          <div className="amount-div white mt-2">
            <sup>€</sup>20<span>/mo</span>
          </div>
          <h6 className="mt-1">Access to Circle Updates + Videos</h6>
        </div>
        <hr className="hr mt-2 mb-2" />

        <div className="button-wrapper mt-4">
          <button
            type="button"
            className={
              amount === 50
                ? "btn btn-outline-primary custom-btn-white me-1 mb-1"
                : "btn btn-outline-primary custom-btn me-1 mb-1"
            }
            onClick={() => {
              setAmount(50);
              history.push("/circle-feed");
            }}
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
            <sup>CHANGER</sup>
          </button>
          <div className="amount-div white mt-2">
            <sup>€</sup>50+<span>/mo</span>
          </div>
          <h6 className="mt-1">
            You can choose the monthly amount
            <br /> you want to contribute, starting at €50
          </h6>
        </div>
      </div>
    </>
  );
}

export default withRouter(SubscriptionsAndPricing);
