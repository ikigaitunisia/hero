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
          <div className="mt-4 flex-col">
            <h2 className="white">
              <b>Support climate mobilizers,</b>
              <br /> accelerate change.
            </h2>
            <button
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4"
              onClick={() => history.push("/circle-feed")}
            >
              <ion-icon src="assets/img/svg/icon2.svg"></ion-icon>
              Fund a HERO Circle
            </button>
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
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              <ion-icon src="assets/img/svg/icon1.svg"></ion-icon>
              Learn more about HERO
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
