import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./HomeCapsule.css";

function HomeCapsule(props) {
  const history = useHistory();
  return (
    <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
      <div className="section mt-4 pt-4">
        <img className="home-img" src="assets/img/Anuna_HomePage.png" />
      </div>
      <div className="section">
        <h1 className="text-title white-text title-font">
          Millions of Climate
          <br />
          Mobilizers.
        </h1>
        <div className="lead white-text custom-font-size">
          Today millions of climate mobilizers around the world are advocating
          for change. This is probably one of the most important jobs of our
          time and it's not being paid.
        </div>
      </div>
      <div className="section mt-2 pb-3">
        <h1 className="text-title white-text title-font">
          HERO Coin gives you
          <br /> the power to support them.
        </h1>
        <div className="lead white-text custom-font-size">
          Financing climate mobilizers is 100 times* more effective than buying
          carbon credits. With no intermediaries, full transparency and a shared
          governance.
        </div>
      </div>
      <div className="section pt-4">
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg rounded font-size-btn"
          style={{
            borderColor: "white",
            color: "#8585FF",
            background: "white",
          }}
          onClick={() => history.push("/feed")}
        >
          Meet the first HERO Mobilizers
        </button>
        <div className="mt-3">
          <span className="white-text" style={{ fontSize: "14px" }}>
            *Source: Standford Social Innovation Review
          </span>
        </div>
      </div>
      <div className="section mt-3 pt-4">
        <ion-icon
          src="assets/img/svg/heroCoinWhite.svg"
          class="btn-round"
        ></ion-icon>
        <h1 className="text-title white-text mb-4 title-font">
          Learn how the
          <br />
          HERO Coin works.
        </h1>
        <video
          controls
          src="assets/videos/short-video-for-test.mp4"
          className="home-video"
        ></video>
      </div>
    </div>
  );
}

export default withRouter(HomeCapsule);
