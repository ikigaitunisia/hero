import React from "react";
import { useHistory } from "react-router-dom";
import "./FindCircle1.css";

function FindCircle1(props) {
  const history = useHistory();
  const playVideo = (id) => {
    var v = document.getElementById(id);
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };
  return (
    <div id="findcircle1">
      <div className="feed" style={{ minHeight: "90vh!important" }}>
        <video playsInline id="1">
          <source
            src={"assets/videos/" + "short-video-for-test.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="feed-content">
          <img
            src={"assets/img/heroLogoWhite.png"}
            alt="logo"
            className="logo mt-4"
          />
          <div className="mt-4">
            <h2 className="white">
              Find your <b>circle</b>,<br /> accelerate change.
            </h2>
          </div>

          <button
            type="button"
            className="btn btn-primary rounded play-btn"
            onClick={() => playVideo(1)}
          >
            <ion-icon name="play" class="m-0"></ion-icon>
          </button>

          <div className="bottom mt-4 flex-col">
            <button
              id="transparentBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              <ion-icon src="assets/img/svg/icon5.svg"></ion-icon>
              Learn more about HERO
            </button>
            <button
              id="transparentBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              <ion-icon src="assets/img/svg/icon6.svg"></ion-icon>
              Explore HERO Circles
            </button>
            <small>Scroll Down</small>
            <ion-icon
              src="assets/img/svg/scroll-down.svg"
              style={{ width: "38px", height: "38px" }}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindCircle1;
