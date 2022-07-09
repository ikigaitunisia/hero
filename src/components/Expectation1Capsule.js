import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./HomeCapsule.css";

function Expectation1Capsule(props) {
  const history = useHistory();
  return (
    <div id="appCapsule" className="bg-g">
      <div className="section mt-4 pt-4">
        <img className="home-img" src="assets/img/Anuna_HomePage.png" />
      </div>
      <div className="section center-div mb-0">
        <h1 className="text-title white-text title-font">
          Do you want to do more
          <br />
          for the climate but just
          <br />
          don’t know how?
        </h1>
        <div className="lead white-text custom-font-size">
          HERO gives you the power to take meaningful action in just 3 clicks by
          financing climate mobilizers around the world with the most impact on
          policy today.
        </div>
      </div>
      <div className="section center-div mt-2 pb-3 mb-0">
        <h6 className="text-title white-text title-font">
          <img src="assets/img/logoHW.png" alt="logoherow" />
          <br /> No intermediaries
        </h6>
        <h6 className="text-title white-text title-font">
          <img src="assets/img/logoHW.png" alt="logoherow" />
          <br />
          Full transparency
        </h6>
        <h6 className="text-title white-text title-font">
          <img src="assets/img/logoHW.png" alt="logoherow" />
          <br /> Vote on the future of HERO
        </h6>
      </div>
      <div className="section pt-4">
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg rounded font-size-btn home-btn"
          onClick={() => history.push("/survey-feed")}
        >
          Meet the first HERO Mobilizers
        </button>
      </div>
    </div>
  );
}

export default withRouter(Expectation1Capsule);
