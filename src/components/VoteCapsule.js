import React from "react";
import "./VoteCapsule.css";

function VoteCapsule(props) {
  return (
    <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
      <div className="section custom-width center-div-2 white-text mt-4 mb-4">
        <h2 className="white-text">
          You have the power to vote on the future of HERO.
        </h2>
        <p>
          As a HERO Coin holder you have a say in how the community moves
          forward.
        </p>
        <a href="" className="white-text">
          Discover how voting works.
        </a>
      </div>
      <div className="section center-div-2 mb-4">
        <div className="wallet-card">
          <p style={{ color: "black", fontWeight: "bold" }}>
            Would you like, in addition of having the possibility of funding a
            mobilizer for 1 year, to also be able to contribute directly to a
            campaign that the mobilizer is launching?
          </p>
        </div>
      </div>
      <div className="section mb-4 center-div-2">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 flex-center mb-2">
            <button
              type="button"
              class="btn btn-icon rounded me-1"
              style={{
                backgroundColor: "black",
                width: "50px",
                height: "50px",
              }}
            >
              <ion-icon
                name="close"
                style={{ color: "white", display: "flex" }}
              ></ion-icon>
            </button>
            <div className="">
              <span class="badge badge-dark custom-badge">20%</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 flex-center mb-2">
            <button
              type="button"
              class="btn btn-icon rounded me-1"
              style={{
                backgroundColor: "white",
                width: "50px",
                height: "50px",
              }}
            >
              <ion-icon
                name="checkmark-outline"
                style={{ color: "black", display: "flex" }}
              ></ion-icon>
            </button>
            <div>
              <span class="badge custom-badge-white">80%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="section center-div-2 mb-4 pb-4">
        <h3 className="white-text">Voting ends in:</h3>
        <div className="row wallet-card custom-padding mt-3">
          <div className="col-3" style={{ borderRight: "1px solid" }}>
            <h1 className="small-font">35</h1>
            <span style={{ fontSize: "12px" }}>DAYS</span>
          </div>
          <div className="col-3" style={{ borderRight: "1px solid" }}>
            <h1 className="small-font">07</h1>
            <span style={{ fontSize: "12px" }}>HOURS</span>
          </div>

          <div className="col-3" style={{ borderRight: "1px solid" }}>
            <h1 className="small-font">23</h1>
            <span style={{ fontSize: "12px" }}>MINUTES</span>
          </div>

          <div className="col-3">
            <h1 className="small-font">09</h1>
            <span style={{ fontSize: "12px" }}>SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoteCapsule;
