import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./HomeCapsule.css";

function HomeCapsule(props) {
  const history = useHistory();
  return (
    <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
      <div className="section mt-2 center-div-2">
        <img className="home-img" src="assets/img/Anuna_HomePage.png" />
      </div>
      <div className="section custom-width center-div-2 white-text mt-2">
        <h1 className="text-title white-text">
          Millions of Climate Mobilizers.
        </h1>
        <p>
          Today millions of climate mobilizers around the world are advocating
          for change. This is probably one of the most important jobs of our
          time and it's not being paid.
        </p>
      </div>
      <div className="section custom-width center-div-2 white-text mt-2">
        <h1 className="text-title white-text">
          HERO Coin gives you the power to support them.
        </h1>
        <p>
          Financing climate mobilizers is 100 times* more effective than buying
          carbon credits. With no intermediaries, full transparency and a shared
          governance.
        </p>
      </div>
      <div className="section mt-2 center-div-2">
        <button
          type="button"
          class="btn btn-outline-secondary btn-lg rounded"
          style={{ borderColor: "white", color: "blue", background: "white" }}
          onClick={() => history.push("/feed")}
        >
          Meet the first HERO Mobilizers
        </button>
        <div className="mt-2">
          <span className="white-text" style={{ fontSize: "14px" }}>
            *Source: Standford Social Innovation Review
          </span>
        </div>
      </div>
      <div className="section mt-4">
        <ion-icon
          src="assets/img/svg/heroCoinWhite.svg"
          class="btn-round"
        ></ion-icon>
        <h1 className="text-title white-text mb-2">
          Learn how the HERO Coin works.
        </h1>
        <video
          controls
          src="assets/videos/short-video-for-test.mp4"
          style={{ width: "80%", borderRadius: "10px" }}
        ></video>
      </div>
    </div>
  );
}

export default withRouter(HomeCapsule);
