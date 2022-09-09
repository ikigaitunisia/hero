import React from "react";
import { useHistory } from "react-router-dom";
import "./FindCircle2.css";

function FindCircle2(props) {
  const history = useHistory();
  return (
    <div id="findcircle2">
      <div className="" style={{ minHeight: "90vh!important" }}>
        <div className="">
        <div className="p-t-h">
            <img
              src={"assets/img/heroLogoBlue.png"}
              alt="logo"
              className="logo mt-4"
            />
            <a href="#" className={"headerButton menuBtn mt-4 mb-4"}>
              <ion-icon name="menu-outline" class="menuBtnIcon"></ion-icon>
            </a>
          </div>
          <div className="m-4 flex-center flex-col">
            <h4 className="mt-3 blue">
              We empower supporters to take
              <br /> effective climate action by funding
              <br />
              circles of climate mobilizers.
            </h4>
            <button
              id="blueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4"
              onClick={() => history.push("/circle-feed")}
            >
              <ion-icon src="assets/img/svg/icon6.svg"></ion-icon>
              Fund a HERO Circle
            </button>
          </div>
          <div className="section flex-center flex-col mt-4 mb-4">
            <img
              src={"assets/img/image4.png"}
              alt="logo"
              className="logo mt-2 mb-2"
            />
          </div>

          <div className="section flex-center flex-col">
            <h2 className="mt-3 blue">What are HERO Circles?</h2>
            <p className="blue">
              <b>Circles are groups of 5-10 mobilizers</b> working
              <br /> towards a same climate policy objective.
            </p>
            <p className="blue">
              By paying a <b>monthly subscription</b> to a HERO
              <br />
              Circle, you contribute to a <b>basic income</b> for
              <br /> these mobilizers, allowing them to focus full
              <br /> time on making that policy change happen.
            </p>
          </div>
          <div className=" mt-4 flex-col mb-4 mt-4">
            <button
              id="supportMobBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              Learn how HERO Circles work
            </button>
            <small className="blue">Scroll Down</small>
            <ion-icon
              src="assets/img/svg/scroll-down-blue.svg"
              style={{ width: "18px", height: "26px" }}
            ></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindCircle2;
