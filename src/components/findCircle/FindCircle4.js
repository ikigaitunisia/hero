import React from "react";
import { useHistory } from "react-router-dom";

function FindCircle4(props) {
  const history = useHistory();
  return (
    <div>
      <div className="feed" style={{ minHeight: "90vh!important" }}>
        <div className="feed-content">
          <img
            src={"assets/img/heroLogoBlue.png"}
            alt="logo"
            className="logo mt-4"
          />
          <div className="mt-4 flex-center flex-col">
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4 "
            >
              <ion-icon src="assets/img/svg/icon3.svg"></ion-icon>
              Find your circle, accelerate change.
            </button>

            <h1 className="blue">100 times</h1>
            <p className="blue">
              more effective than buying carbon credits
              <br /> according to the <b>Stanford Social</b>
              <br /> <b>Innovation Review.</b>
            </p>
          </div>
          <div className="section inset mt-2 mb-4">
            <div className="accordion" id="accordionExample5">
              <div className="accordion-item mb-1">
                <h2 className="accordion-header bg-primary">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordiond1"
                  >
                    Influence on climate policy
                  </button>
                </h2>
                <div
                  id="accordiond1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body blue">
                    <b>100 times</b> more effective than
                    <br /> buying carbon credits according to
                    <br /> the{" "}
                    <b>
                      <i>
                        Stanford Social Innovation
                        <br /> Review
                      </i>
                    </b>
                    .
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-1">
                <h2 className="accordion-header bg-info">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordiond6"
                  >
                    Change in public narratives
                  </button>
                </h2>
                <div
                  id="accordiond6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body blue">
                    <b>100 times</b> more effective than
                    <br /> buying carbon credits according to
                    <br /> the{" "}
                    <b>
                      <i>
                        Stanford Social Innovation
                        <br /> Review
                      </i>
                    </b>
                    .
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header bg-dark">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordiond7"
                  >
                    Mobilization of people towards action
                  </button>
                </h2>
                <div
                  id="accordiond7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body blue">
                    <b>100 times</b> more effective than
                    <br /> buying carbon credits according to
                    <br /> the{" "}
                    <b>
                      <i>
                        Stanford Social Innovation
                        <br /> Review
                      </i>
                    </b>
                    .
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section flex-center mt-4">
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 "
            >
              Reviews from HERO Supporters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindCircle4;
