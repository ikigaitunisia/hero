import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./HomeCapsule.css";

function HomeCapsule(props) {
  const history = useHistory();
  return (
    <div id="appCapsule" className="bg-g">
      <div className="section mt-2">
        <img src="assets/img/Anuna_HomePage.png" />
      </div>
      <div className="section custom-width center-div white-text mt-2">
        <h2 className="white-text custom-font">
          Millions of Climate Mobilizers.
        </h2>
        <p>
          Today millions of climate mobilizers around the world are advocating
          for change. This is probably one of the most important jobs of our
          time and it's not being paid.
        </p>
      </div>
      <div className="section custom-width center-div white-text mt-2">
        <h2 className="white-text custom-font">
          One coin that gives you the power to support them.
        </h2>
        <p>
          Financing climate mobilizers is 100 times more effective than buying
          carbon credits. Investing in the Hero Coin allows you contribute to
          providing a Basic Income for 1 year to verified mobilizers of your
          choice with a track record of accelerating climate action. With no
          intermediaries, full transparency and a shared governance.
        </p>
      </div>
      <div className="section mt-2">
        <button
          type="button"
          class="btn btn-outline-secondary rounded"
          style={{ borderColor: "white", color: "white" }}
          onClick={() => history.push("/feed")}
        >
          Meet the first HERO Mobilizers
        </button>
      </div>
      <div className="section mt-2">
        <ion-icon
          src="assets/img/svg/heroCoinWhite.svg"
          class="btn-round"
        ></ion-icon>
        <h2 className="white-text custom-font mt-2 mb-2">
          Learn how the HERO Coin works.
        </h2>
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
