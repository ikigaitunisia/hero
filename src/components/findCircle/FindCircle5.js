import React from "react";
import { useHistory } from "react-router-dom";

function FindCircle5(props) {
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

            <h1 className="blue">
              In the words of <br />
              <b>HERO Supporters</b>
            </h1>
          </div>
          <div className="section flex-center mt-4 flex-col">
            <div class="card border-blue">
              <div class="card-body flex-center flex-col">
                <img
                  src="assets/img/activist4.png"
                  alt="image"
                  class="imaged w48 rounded"
                />
                <span className="blue">Andrew Wilson</span>
                <small className="blue">Amsterdam, Netherlands</small>
                <p className="blue">
                  “I wanted to do more for climate, but I just
                  <br /> didn’t how. Supporting a HERO Circle has
                  <br /> allowed me to find an effective way to take
                  <br /> action while engaging with amazing
                  <br />
                  mobilizers that have teached me a lot
                  <br /> about climate. I love it”
                </p>
              </div>
            </div>
            <div class="card border-blue">
              <div class="card-body flex-center flex-col">
                <img
                  src="assets/img/activist4.png"
                  alt="image"
                  class="imaged w48 rounded"
                />
                <span className="blue">Andrew Wilson</span>
                <small className="blue">Amsterdam, Netherlands</small>
                <p className="blue">
                  “I wanted to do more for climate, but I just
                  <br /> didn’t how. Supporting a HERO Circle has
                  <br /> allowed me to find an effective way to take
                  <br /> action while engaging with amazing
                  <br />
                  mobilizers that have teached me a lot
                  <br /> about climate. I love it”
                </p>
              </div>
            </div>
            <div class="card border-blue">
              <div class="card-body flex-center flex-col">
                <img
                  src="assets/img/activist4.png"
                  alt="image"
                  class="imaged w48 rounded"
                />
                <span className="blue">Andrew Wilson</span>
                <small className="blue">Amsterdam, Netherlands</small>
                <p className="blue">
                  “I wanted to do more for climate, but I just
                  <br /> didn’t how. Supporting a HERO Circle has
                  <br /> allowed me to find an effective way to take
                  <br /> action while engaging with amazing
                  <br />
                  mobilizers that have teached me a lot
                  <br /> about climate. I love it”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindCircle5;
