import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CircleHome.css";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";

function CircleHome(props) {
  const history = useHistory();
  const circles = [
    {
      id: "1",
      name: "HERO First Circle",
      description:
        "This is the circle objective. A brief description of the focus of the circle for the first year.",
    },
    {
      id: "2",
      name: "HERO Second Circle",
      description:
        "This is the circle objective. A brief description of the focus of the circle for the first year.",
    },
    {
      id: "3",
      name: "HERO Third Circle",
      description:
        "This is the circle objective. A brief description of the focus of the circle for the first year.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCircle, setCurrentCircle] = useState(circles[0]);

  const goToNextCircle = () => {
    if (currentIndex === 2) {
      setCurrentIndex(0);
      setCurrentCircle(circles[0]);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };

  useEffect(() => {
    setCurrentCircle(circles[currentIndex]);
  }, [currentIndex]);
  return (
    <>
      <Header
        showTitlePage
        title={currentCircle.name}
        showBackBtn
        showMenuBtn
      />
      <div id="appCapsule" className="circle-home">
        <div className="flex-center mt-4 mb-4">
          <img
            src="assets/img/image8.png"
            alt="image"
            className="imaged  w36 mt-4"
          />
        </div>
        <div class="card mb-3 ml-3 me-3">
          <div className="custom-div-header">
            <h5>
              <b>Echo this circle,</b>
              <br />
              invite your friends to join!
            </h5>
          </div>
          <div class="card-body flex-center flex-col mt-3">
            <h4 className="blue">Circle’s Objective</h4>
            <p>{currentCircle.description}</p>
            <hr className="hr mt-4 mb-4" />
            <div className="flex-center flex-row">
              <div className="flex-center flex-col me-2">
                <ion-icon
                  src="assets/img/svg/icon8.svg"
                  class="mb-2"
                ></ion-icon>
                <span>Mobilizers</span>
              </div>
              <div className="flex-center flex-col me-2">
                <ion-icon
                  src="assets/img/svg/icon9.svg"
                  class="mb-2"
                ></ion-icon>
                <span>Updates</span>
              </div>
              <div className="flex-center flex-col me-2">
                <ion-icon
                  src="assets/img/svg/icon10.svg"
                  class="mb-2"
                ></ion-icon>
                <span>Videos</span>
              </div>
              <div className="flex-center flex-col">
                <ion-icon
                  src="assets/img/svg/icon12.svg"
                  class="mb-2"
                ></ion-icon>
                <span>Interactions</span>
              </div>
            </div>
            <hr className="hr mt-4 mb-4" />
            <h5>Memberships</h5>
            <div className="progress mb-2">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "25%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6>200 memberships left to complete this circle</h6>
            <div className="me-4 ml-4 mb-0">
              <img
                src="assets/img/sample/photo/1.jpg"
                alt="image"
                className="imaged w48 rounded m-2"
              />
              <img
                src="assets/img/sample/photo/1.jpg"
                alt="image"
                className="imaged w48 rounded m-2"
              />
              <img
                src="assets/img/sample/photo/1.jpg"
                alt="image"
                className="imaged w48 rounded m-2"
              />
            </div>
            <span id="list-supporters">
              <b>Supporter 1, Support 2, Supporter 3</b>
              <br /> recently joined this circle.
            </span>
            <hr className="hr mt-4 mb-4" />
            <h6 id="bottom-text">
              Swipe right to move between circles you support
            </h6>
          </div>
        </div>
        <div className="circle-feed-bottom mb-4">
          <div style={{ display: "flex" }}>
            <div
              className={currentIndex === 0 ? "active-dot me-1" : "dot me-1"}
            ></div>
            <div
              className={currentIndex === 1 ? "active-dot me-1" : "dot me-1"}
            ></div>
            <div
              className={currentIndex === 2 ? "active-dot me-1" : "dot me-1"}
            ></div>
          </div>
          {
            <button
              type="button"
              className="btn btn-icon rounded btn-primary social-btn"
              onClick={goToNextCircle}
            >
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </button>
          }
        </div>
      </div>
    </>
  );
}

export default withRouter(CircleHome);
