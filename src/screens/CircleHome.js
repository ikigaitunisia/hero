import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./CircleHome.css";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";

function CircleHome(props) {
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextCircle = () => {
    if (currentIndex === 4) {
      setCurrentIndex(0);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <>
      <Header
        showTitlePage
        title={"HERO First Circle"}
        showBackBtn
        showMenuBtn
      />

      <div id="appCapsule" className="circle-home">
        <div className="flex-center mt-4 mb-4">
          <img
            src="assets/img/image8.png"
            alt="image"
            className="imaged  w36"
          />
        </div>
        <div class="card m-3">
          <div class="card-body flex-center flex-col">
            <h5 className="blue">Circle’s Objective</h5>
            <p>
              This is the circle objective. A brief description of the focus of
              the circle for the first year.
            </p>
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
