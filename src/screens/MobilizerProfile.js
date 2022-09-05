import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CircleHome.css";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./MobilizerProfile.css";

function CircleHome(props) {
  const history = useHistory();
  const circles = [
    {
      id: "1",
      name: "Anuna de Wever",
      fullname: "@anunadewever",
      address: "Brussels, Belgium",
      lead: "Circle Lead",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
    {
      id: "2",
      name: "Thomas Maddens",
      fullname: "@thomasmaddens",
      address: "Brussels, Belgium",
      lead: "Circle Campaigner",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
    {
      id: "3",
      name: "Mobilizer Three",
      fullname: "@mobilizerthree",
      address: "Circle Fundraiser",
      lead: "Circle Lead",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
    {
      id: "4",
      name: "Mobilizer Four",
      fullname: "@mobilizerfour",
      address: "Brussels, Belgium",
      lead: "Circle Organizer",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
    {
      id: "5",
      name: "Mobilizer Five",
      fullname: "@mobilizerfive",
      address: "City, Country",
      lead: "Circle Role",
      description:
        "This is a brief description of the mobilizer’s work, organizations and projects.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCircle, setCurrentCircle] = useState(circles[0]);

  const goToNextCircle = () => {
    if (currentIndex === 4) {
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
        showHeroLogo
        showBackBtn
        showMenuBtn
        whiteMode
        transparent
        backTo={"/circle-home"}
      />
      <div id="appCapsule" className="mobilizer-profile">
        <div class="section mt-2 mb-4">
          <div class="card bg-dark text-white">
            <img
              src="assets/img/bg-card.png"
              class="card-img overlay-img"
              alt="image"
            />
            <div class="card-img-overlay">
              <h2 className="white">{currentCircle.name}</h2>
              <div className="flex-center">
                <span>{currentCircle.fullname}</span>
                <ion-icon
                  src="assets/img/svg/icon15.svg"
                  class="ml-1"
                ></ion-icon>
              </div>
              <div className="mt-3 mb-2 flex-center">
                <ion-icon
                  src="assets/img/svg/icon13.svg"
                  class="me-1"
                ></ion-icon>
                <span>{currentCircle.address}</span>
              </div>
              <div className="mb-3 flex-center">
                <ion-icon
                  src="assets/img/svg/icon14.svg"
                  class="me-1"
                ></ion-icon>
                <span>{currentCircle.lead}</span>
              </div>
              <p>{currentCircle.description}</p>

              <div className="flex-center flex-row mb-4">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn2 me-1"
                >
                  <ion-icon src="assets/img/svg/tiktok2.svg"></ion-icon>
                </button>
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn2 me-1"
                >
                  <ion-icon class="blue" name="logo-instagram"></ion-icon>
                </button>
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn2"
                >
                  <ion-icon class="blue" name="logo-twitter"></ion-icon>
                </button>
              </div>
            </div>
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
            <div
              className={currentIndex === 3 ? "active-dot me-1" : "dot me-1"}
            ></div>
            <div
              className={currentIndex === 4 ? "active-dot me-1" : "dot me-1"}
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
