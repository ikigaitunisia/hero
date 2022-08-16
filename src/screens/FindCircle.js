import React, { useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./FindCircle.css";
import { MobilizerData } from "../data/data.js";

function FindCircle(props) {
  const history = useHistory();

  const playVideo = (id) => {
    var v = document.getElementById(id);
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

  const mobilizerData = [{ id: "", image: "", video: "" }];

  return (
    <>
      <div id="feed" className="container">
        {MobilizerData.map((activist, i) => (
          <div key={i}>
            <div className="feed" style={{ minHeight: "90vh!important" }}>
              <video id={i} playsInline>
                <source src={"videos/" + activist.video} type="video/mp4" />
              </video>
              <div className="feed-content">
                <img
                  src={"assets/img/heroLogo.png"}
                  alt="logo"
                  className="logo mt-4"
                />
                <div className="mt-4">
                  <span className="p-3 text-2">Following</span>
                  <span className="p-3 text-3">Discover</span>
                </div>

                <button
                  type="button"
                  className="btn btn-primary rounded play-btn"
                  onClick={() => playVideo(i)}
                >
                  <ion-icon name="play" class="m-0"></ion-icon>
                </button>

                <div className="button-container">
                  <div className="mb-3">
                    <img
                      src={activist.image ? "assets/img/" + activist.image : ""}
                      alt="image"
                      className="imaged w32 rounded rounded-profile-picture"
                      onClick={() => history.push("/profile:" + activist.id)}
                    />
                  </div>
                  <div className="mb-3">
                    <ion-icon
                      class="icon"
                      src="assets/img/svg/echo.svg"
                      style={{ width: "32px", height: "32px" }}
                    ></ion-icon>
                    <span className="text-2">Echo</span>
                  </div>
                  <div
                    className="mb-3"
                    onClick={() =>
                      history.push("/mobilizer-club" + activist.id)
                    }
                  >
                    <img
                      src="assets/img/club.png"
                      alt="image"
                      className="imaged w32 rounded"
                    />
                    <span className="text-2">
                      Join <br /> Club
                    </span>
                  </div>
                </div>
                <div className="bottom mt-4">
                  <span className="p-3 text-2">
                    @anunadewever{" "}
                    <ion-icon
                      class="icon"
                      src="assets/img/svg/icon.svg"
                    ></ion-icon>
                  </span>
                  <p className="mt-2 activist-text">
                    We need to keep showing them that
                    <br /> we can take care of our future.{" "}
                  </p>
                  <span className="mt-2 text-1">1 day ago</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default withRouter(FindCircle);
