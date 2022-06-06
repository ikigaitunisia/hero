import React from "react";
import "./ActivistProfileCapsule.css";
import "./FeedCapsule.css"

function FeedCapsule(props) {
  return (
    <div id="appCapsule">
      <div className="section wallet-card-section pt-1">
        <div
          className="wallet-card"
          style={{ height: "40vh", padding: 0, borderRadius: "15px" }}
        >
          <div style={{ width: "70%", padding: "20px 0", margin: "0 auto" }}>
            <h1>Your investment has global impact.</h1>
            <p>
              By investing in the HERO Coin you contribute to providing a
              Universal Basic Income for a year to a verified mobilizer of your
              choice with a track record of accelerating climate action.
            </p>
            <p>
              This will allow the mobilizer to dedicate full time to their
              climate work and persue global policies to keep the world’s
              temperature below 1.5 degrees, the minimum required for all of us
              to live in an habitable world.
            </p>
          </div>
        </div>
      </div>
      <div className="section mt-4">
        <ion-icon
          class="icon-title"
          src="assets/img/svg/heroMobilizers.svg"
        ></ion-icon>
      </div>
      <div className="section">
        <div className="row mt-2">
          <div className="col-12">
            <div className="stat-box box-bg">
              <div className="custom-font">
                <h1 className="blue-text">Anuna de Wever</h1>
                <span>Belgium</span>
              </div>
              <div className="btn-section">
                <button
                  type="button"
                  class="btn btn-primary btn-lg rounded shadowed"
                >
                  See Profile
                </button>
                <button
                  type="button"
                  class="btn btn-primary btn-lg rounded shadowed"
                >
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
