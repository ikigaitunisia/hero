import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import "./FindCircle2.css";
import Menu from "../Menu";

function FindCircle2(props) {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id="findcircle2">
      <Menu show={showMenu} onClose={() => setShowMenu(false)} />

      <div className="" style={{ minHeight: "90vh!important" }}>
        <div className="">
          <div className="p-t-h">
            <img
              src={"assets/img/heroLogoBlue.png"}
              alt="logo"
              className="logo mt-4"
            />
            <a
              className={"headerButton menuBtn mt-4 mb-4"}
              onClick={() => setShowMenu(true)}
            >
              <ion-icon
                name="menu-outline"
                class="menuBtnIcon"
                style={{ color: "#0000ff" }}
              ></ion-icon>
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
              <b>
                Circles are climate think tanks and research
                <br /> groups of 5-10 mobilizers
              </b>{" "}
              working towards a<br /> same climate policy objective.
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
              <Link
                to="findcircle3"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                <span>Learn how HERO Circles work</span>
              </Link>
            </button>
            <Link
              to="findcircle3"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              <small className="blue ">Scroll Down</small>{" "}
            </Link>
            <Link
              to="findcircle3"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              <ion-icon
                src="assets/img/svg/scroll-down-blue.svg"
                style={{ width: "18px", height: "26px" }}
              ></ion-icon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FindCircle2;
