import React from "react";
import "./HeroStarterDetails.css";

function HeroStarterDetails(props) {
  return (
    <div id="starter">
      <img src={"assets/img/heroLogo2.png"} alt="logo" className="logo" />
      <p className="header-text mt-4">HERO Starter</p>
      <sup>€</sup>
      <strong>10</strong>
      <span>/mo</span>
      <p className="mt-4">
        Direct feedback & campaign <br />
        progress.
      </p>
      <p>
        Voting on Hero: <br />
        new features / policy priorities.
      </p>
      <button
        type="button"
        className="btn btn-icon rounded btn-primary submit-btn me-1 mb-1 mt-4"
      >
        <ion-icon src="assets/img/svg/left.svg"></ion-icon>
      </button>
    </div>
  );
}

export default HeroStarterDetails;
