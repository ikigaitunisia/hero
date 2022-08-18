import React from "react";
import { useHistory } from "react-router-dom";

function FindCircle2(props) {
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
          <div className="mt-4 flex-center">
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4"
            >
              <ion-icon src="assets/img/svg/icon3.svg"></ion-icon>
              Find your circle, accelerate change.
            </button>
          </div>
          <div className="section flex-center flex-col">
            <img
              src={"assets/img/image1.png"}
              alt="logo"
              className="logo mt-4"
            />
            <h2 className="mt-3 blue">
              Our mission is to
              <br /> accelerate change
              <br />
              in the world.
            </h2>
            <p className="blue">
              We bring people together <br />
              to take effective climate action.
            </p>
          </div>

          <div className="section flex-center flex-col">
            <img
              src={"assets/img/image2.png"}
              alt="logo"
              className="logo mt-4"
            />
            <h2 className="mt-3 blue">
              Support circles of
              <br /> climate mobilizers.
            </h2>
            <p className="blue">
              Via a monthly membership to a <b>HERO</b>
              <br /> <b>Circle</b> you can help mobilizers focus
              <br /> full time on making change happen.
            </p>
          </div>
          <div className=" mt-4">
            <button
              id="supportMobBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              Know more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindCircle2;
