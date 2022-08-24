import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import "./CircleFeed.css";

function CircleFeed(props) {
  const circles = [
    {
      id: "1",
      name: "HERO FIRST CIRCLE",
      description:
        "This is a brief description of HERO First Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
    {
      id: "2",
      name: "HERO SECOND CIRCLE",
      description:
        "This is a brief description of HERO Second Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
    {
      id: "3",
      name: "HERO YOUTHTOPIA CIRCLE",
      description:
        "This is a brief description of HERO Youthtopia Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
    {
      id: "4",
      name: "HERO FOURTH CIRCLE",
      description:
        "This is a brief description of HERO Fourth Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
    {
      id: "5",
      name: "HERO FIFTH CIRCLE",
      description:
        "This is a brief description of HERO Fifth Circle, working together towards pushing forward a climate policy.",
      link: "",
      video: "short-video-for-test.mp4",
    },
  ];

  const [currentCircle, setCurrentCircle] = useState(circles[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextCircle = () => {
    setCurrentIndex(currentIndex + 1);
    setCurrentCircle(circles[currentIndex]);
  };
  return (
    <>
      <Header whiteMode showHeroLogo transparent showBackBtn />

      <div id="appCapsule" className="circle-feed-container">
        <div className="feed2" style={{ minHeight: "90vh!important" }}>
          <video playsInline id="1">
            <source
              src={"assets/videos/" + currentCircle.video}
              type="video/mp4"
            />
          </video>
          <div className="feed-content">
            <button type="button" className="btn btn-primary rounded play-btn">
              <ion-icon name="play" class="m-0"></ion-icon>
            </button>

            <div className="bottom mt-4 flex-col-start">
              <h3 className="white mb-3">{currentCircle.name}</h3>
              <p className="white  mb-3">{currentCircle.description}</p>
              <button
                id="whiteBtn"
                type="button"
                className="btn btn-primary rounded font-size-btn mb-4"
              >
                <ion-icon src="assets/img/svg/icon2.svg"></ion-icon>
                Fund this HERO Circle
              </button>
              <a href={currentCircle.link} className="white">
                Learn more about this circle
              </a>
            </div>
          </div>
        </div>
        <div className="circle-feed-bottom mb-4">
          <div style={{ display: "flex" }}>
            <div className={currentIndex === 0 ? "active-dot me-1" :  "dot me-1"}></div>
            <div className={currentIndex === 1 ? "active-dot me-1" :  "dot me-1"}></div>
            <div className={currentIndex === 2 ? "active-dot me-1" :  "dot me-1"}></div>
            <div className={currentIndex === 3 ? "active-dot me-1" :  "dot me-1"}></div>
            <div className={currentIndex === 4 ? "active-dot me-1" :  "dot me-1"}></div>
          </div>
          {currentIndex < 5  && <button
            type="button"
            className="btn btn-icon rounded btn-primary social-btn"
            onClick={goToNextCircle}
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>}
        </div>
      </div>
    </>
  );
}

export default withRouter(CircleFeed);
