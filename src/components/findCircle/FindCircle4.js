import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import "./FindCircle4.css";
import Menu from "../Menu";

function FindCircle4(props) {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id="findCircle4">
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
          <div className="mt-4 flex-center flex-col">
            <h1 className="blue mb-3" style={{ fontSize: "" }}>
              100 times
              <br /> more effective.{" "}
            </h1>
            <p className="blue">
              Funding climate mobilizers can be 100
              <br />
              times more effective than buying
              <br />
              carbon credits according to the
              <br />
              <a
                href="https://ssir.org/articles/entry/protest_movements_could_be_more_effective_than_the_best_charities"
                className="blue underline"
              >
                <b>Stanford Social Innovation Review</b>
              </a>
            </p>
            <button
              id="blueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4 "
              onClick={() => history.push("/circle-feed")}
            >
              <ion-icon src="assets/img/svg/icon6.svg"></ion-icon>
              Fund a HERO Circle
            </button>
          </div>
          <div className="section inset mt-2 mb-4">
            <h5 className="blue mb-4">How do mobilizers accomplish this?</h5>
            <div className="accordion" id="accordionExample5">
              <div className="accordion-item mb-1">
                <h2 className="accordion-header bg-primary">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordiond1"
                  >
                    Step 1 : Policy proposal
                  </button>
                </h2>
                <div
                  id="accordiond1"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body accordion-body-1 p-4">
                    <p>Example:</p>
                    <b style={{ fontWeight: "bold" }}>
                      The European Union Green Deal.
                    </b>
                    <p>
                      Mobilizers propose to change from 40%
                      <br /> to 55% the carbon reduction target for
                      <br />
                      the European Union in 2030 vs 1990
                      <br /> levels in the Green Deal law of 2021.
                    </p>
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
                    Step 2 : Supporter engagement
                  </button>
                </h2>
                <div
                  id="accordiond6"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body accordion-body-2 p-4">
                    Mobilizers launched a campaign and had
                    <br />{" "}
                    <b>
                      a petition signed by 129,387 individuals
                      <br /> and 320 scientists from 50 countries.
                    </b>
                  </div>
                </div>
              </div>
              <div className="accordion-item mb-1">
                <h2 className="accordion-header bg-dark">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordiond7"
                  >
                    Step 3 : Policy change
                  </button>
                </h2>
                <div
                  id="accordiond7"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body accordion-body-3 p-4">
                    <b>EU Green Deal was passed</b> with 55%
                    <br /> reduction, translating into 3500 Mtons
                    <br /> CO2 reduction over 2021-30.
                    <br /> <br /> Mobilizers keep pressure on
                    <br /> policymakers to ensure execution of the
                    <br /> laws.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header bg-warning">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#accordiond8"
                  >
                    Step 4 : Communication
                  </button>
                </h2>
                <div
                  id="accordiond8"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample5"
                >
                  <div className="accordion-body accordion-body-4 p-4">
                    <b>
                      “We would have no European Green
                      <br /> Deal without the Fridays for the Future
                      <br /> movement”
                    </b>
                    <br /> -Frans Timmermans, Vice President of the
                    <br /> European Commission.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section flex-center flex-col mt-4 mb-4">
            <button
              id="blueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4"
            >
              <Link
                to="findCircle5"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                <span>Reviews from HERO Supporters</span>
              </Link>
            </button>
            <Link
              to="findCircle5"
              spy={true}
              smooth={true}
              offset={30}
              duration={500}
            >
              <small className="blue ">Scroll Down</small>{" "}
            </Link>
            <Link
              to="findCircle5"
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
      <Menu show={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}

export default FindCircle4;
