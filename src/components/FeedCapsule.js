import React from "react";
import "./FeedCapsule.css";

function FeedCapsule(props) {
  return (
    <div id="appCapsule">
      <div className="section wallet-card-section pt-1">
        <div className="wallet-card">
          <div className="custom-font center-div">
            <h1 className="blue-text">Your investment has global impact.</h1>
            <hr data-content="AND" class="hr-text"></hr>
            <p className="black-text">
              By investing in the <b>HERO Coin</b> you contribute to providing a
              Universal <b>Basic Income</b> for a year to a verified{" "}
              <b>mobilizer</b> of your choice with a track record of
              accelerating climate action.
            </p>
            <p className="black-text">
              This will allow the mobilizer to <b>dedicate full time</b> to
              their climate work and persue global policies to keep the{" "}
              <b>world’s temperature below 1.5 degrees</b>, the minimum required
              for all of us to live in an habitable world.
            </p>
          </div>
        </div>
      </div>
      <div className="center-content">
        <ion-icon
          class="hero-mobilizers-logo"
          src="assets/img/svg/heroMobilizers.svg"
        ></ion-icon>
      </div>
      <div className="section mb-2">
        <div className="row mt-2">
          <div className="col-12">
            <div className="stat-box box-bg">
              <div className="custom-font">
                <h1 className="white-text">Anuna de Wever</h1>
                <span className="white-text">Belgium</span>
              </div>
              <div className="btn-section">
                <button type="button" class="btn btn-primary rounded shadowed">
                  See Profile
                </button>
                <button type="button" class="btn btn-primary rounded shadowed">
                  Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedCapsule;
