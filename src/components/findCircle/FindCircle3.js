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
          <div className="mt-4 flex-center flex-col">
            <h4 className="white">
              <b>
                Climate mobilizers have the
                <br /> most important job of our time,
              </b>
              <br />
              but its not being paid.
            </h4>
            <button
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4 "
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
              Learn about the impact of mobilizers
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

export default FindCircle3;
