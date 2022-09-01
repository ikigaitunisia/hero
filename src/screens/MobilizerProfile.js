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
      <Header showHeroLogo showBackBtn showMenuBtn whiteMode transparent />
      <div id="appCapsule" className="mobilizer-profile">
        <div class="card mb-3 ml-3 me-3">
          <div class="card-body flex-center flex-col mt-3">

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
