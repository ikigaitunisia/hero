import React from "react";
import "./HeroStarterDetails.css";

function HeroSupporterDetails(props) {
  return (
    <div id="starter">
      <img src={"assets/img/heroLogo2.png"} alt="logo" className="logo" />
      <p className="header-text mt-4">HERO Supporter</p>
      <sup>€</sup>
      <strong>20</strong>
      <span>/mo</span>
      <p className="mt-4">Everything in HERO Starter +</p>
      <p>
        Exclusive updates in private <br />
        social media spaces (IG, TW)
        <br />& behind the scenes footage.
      </p>
      <button
        type="button"
        className="btn btn-icon rounded btn-primary submit-btn-rounded me-1 mb-1 mt-4"
        onClick={props.onClose}
      >
        <ion-icon src="assets/img/svg/left.svg"></ion-icon>
      </button>
    </div>
  );
}

export default HeroSupporterDetails;
