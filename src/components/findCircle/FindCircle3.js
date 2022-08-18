import React from "react";
import { useHistory } from "react-router-dom";

function FindCircle3(props) {
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
    <div>
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
          <div className="mt-4 flex-center">
            <button
              id="transparentBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4 "
            >
              <ion-icon src="assets/img/svg/icon4.svg"></ion-icon>
              Find your circle, accelerate change.
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
            <h3 className="white">
              Climate mobilizers have
              <br /> the most important job of
              <br /> our time, but its not being
              <br /> paid.
            </h3>
            <button
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              Learn about the impact of mobilizers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindCircle3;
