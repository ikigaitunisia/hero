import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./CircleVideos.css";

function CircleVideos(props) {
  const videos = [
    {
      id: 1,
      video: "short-video-for-test.mp4",
    },
    {
      video: "short-video-for-test.mp4",
    },
    {
      id: 2,
      video: "short-video-for-test1.mp4",
    },
    {
      id: 3,
      video: "short-video-for-test.mp4",
    },
    {
      id: 4,
      video: "short-video-for-test.mp4",
    },
  ];
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const playVideo = (id) => {
    var v = document.getElementById(id);
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };
  const goToNextVideo = () => {
    if (currentIndex === 4) {
      setCurrentIndex(0);
      setCurrentVideo(videos[0]);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    setCurrentVideo(videos[currentIndex]);
  }, [currentIndex]);
  return (
    <>
      <Header
        showTitlePage
        title={"Circle Videos"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
        backTo={"/circle-home"}
      />
      <div id="appCapsule" className="circle-videos">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/icon24.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-updates:Hero%20UK%20Climate%20Justice%20Circle")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon22.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-videos")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon17.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-interactions")}
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card">
            <video playsInline id={currentVideo.video}>
              <source
                src={"assets/videos/" + currentVideo.video}
                type="video/mp4"
                class="card-img overlay-img"
              />
            </video>
            <div class="card-img-overlay">
              <button
                type="button"
                className="btn btn-primary rounded play-btn"
                onClick={() => playVideo(currentVideo.video)}
                style={{ zIndex: 1 }}
              >
                <ion-icon name="play" class="m-0"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <div className="flex-center">
            <div
              onClick={() => goToNextVideo(1)}
              className={currentIndex === 0 ? "active-dot me-1" : "dot me-1"}
            ></div>
            <div
              onClick={() => goToNextVideo(2)}
              className={currentIndex === 1 ? "active-dot me-1" : "dot me-1"}
            ></div>
            <div
              onClick={() => goToNextVideo(3)}
              className={currentIndex === 2 ? "active-dot me-1" : "dot me-1"}
            ></div>
            <div
              onClick={() => goToNextVideo(4)}
              className={currentIndex === 3 ? "active-dot me-1" : "dot me-1"}
            ></div>
            <div
              onClick={() => goToNextVideo(5)}
              className={currentIndex === 4 ? "active-dot me-1" : "dot me-1"}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(CircleVideos);
