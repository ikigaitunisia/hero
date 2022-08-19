import React from "react";
import { useHistory } from "react-router-dom";

function FindCircle2(props) {
  const history = useHistory();
  return (
    <div>
      <div className="" style={{ minHeight: "90vh!important" }}>
        <div className="">
          <img
            src={"assets/img/heroLogoBlue.png"}
            alt="logo"
            className="logo mt-4"
          />
          <div className="mt-2 flex-center">
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4"
            >
              <ion-icon src="assets/img/svg/icon3.svg"></ion-icon>
              Explore HERO Circles
            </button>
          </div>
          <div className="section flex-center flex-col">
            <h2 className="mt-3 blue">
              Our mission is to
              <br /> accelerate change
              <br />
              in the world.
            </h2>
            <p className="blue">
              We empower people to take effective climate
              <br /> action by supporting circles of climate
              <br /> mobilizers.
            </p>
            <img
              src={"assets/img/image1.png"}
              alt="logo"
              className="logo mt-4"
            />
          </div>

          <div className="section flex-center flex-col">
            <h2 className="mt-3 blue">What are HERO Circles?</h2>
            <p className="blue">
              Circles are groups of 10 mobilizers working<br/> towards a same climate
              policy objective.
            </p>
            <p className="blue">
              Via a monthly membership to a HERO Circle,<br/> you can allow these
              mobilizers to focus full<br/> time on making that policy change happen.
            </p>
          </div>
          <div className=" mt-4 flex-col">
            <button
              id="supportMobBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              Learn how HERO Circles work
            </button>
            <small>Scroll Down</small>
            <ion-icon
              src="assets/img/svg/scroll-down.svg"
              style={{ width: "38px", height: "38px" }}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindCircle2;
