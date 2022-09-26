import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withRouter, useParams, useLocation } from "react-router-dom";
import Header from "../components/Header";
import "./CircleFeed.css";
import "./CircleFeedDetails.css";
import ClubSelectMembershipModal from "../components/modals/ClubSelectMembershipModal";
import ActivistVictoriesModal from "../components/modals/ActivistVictoriesModal";
import ActivistCampaignsModal from "../components/modals/ActivistCampaignsModal";
import axios from "axios";
import Menu from "../components/Menu";
function CircleFeedDetails(props) {
  const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCircle, setCurrentCircle] = useState({});
  const [showMenu, setShowMenu] = useState(false);
  const [load, setLoad] = useState(false);
  const [showClubSelectMembershipModal, setShowClubSelectMembershipModal] =
    useState(false);
  const [showMobilizerCampaignsModal, setShowMobilizerCampaignsModal] =
    useState(false);
  const [showMobilizerVictoriesModal, setShowMobilizerVictoriesModal] =
    useState(false);
  const [MobilizersCircle, setMobilizersCircle] = useState([]);
  const { state } = useLocation();
  const [circles, setCircles] = useState([]);
  const goToNextCircle = () => {
    console.log("index");
    console.log(currentIndex);
    if (currentIndex === state.circle.length - 1) {
      setCurrentIndex(0);
      setCurrentCircle(state.circle[0]);
      setMembers();

      return;
    }

    setCurrentIndex(currentIndex + 1);
    setMembers();
  };
  const setMembers = () => {
    setLoad(true);
    axios
      .get(
        "https://hegemony.donftify.digital:8080/circle/members/" +
          state.circle[currentIndex].name
      )
      .then((res) => {
        console.log(res.data);
        let  k = res.data.sort((a, b) => a.priority.low > b.priority.low ? 1 : -1)
        setMobilizersCircle(k);
      });
  };
  useEffect(() => {
    setCurrentCircle(state.circle[currentIndex]);

    setMembers();
    console.log(circles);
  }, [currentIndex]);
  const whiteMode = props.whiteMode;
  const showMenuBtn = props.showMenuBtn;
  const showLoginBtn = props.showLoginBtn;
  const showCloseBtn = props.showCloseBtn;
  const showLogo = props.showLogo;
  const showBackBtn = props.showBackBtn;
  const showHeroLogo = props.showHeroLogo;
  const transparent = props.transparent;
  const showTitlePage = props.showTitlePage;
  const title = props.title;
  const backTo = props.backTo;

  const colorClass = whiteMode ? "white-text" : "blue-text";
  const [loggedin, setLogedin] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setLogedin(true);
    }
  }, []);
  const closeB = () => {
    history.push(history.goBack());
  };
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <>
      {load && (
        <>
          <div id="appCapsule" className="circle-feed-details">
            <div className="headerCircle">
              <img
                src={"assets/img/heroLogoWhite.png"}
                alt="logo"
                className="logo mt-4 logo1"
              />
              <a
                className={"headerButton menuBtn btnn mt-4 mb-4"}
                onClick={() => setShowMenu(true)}
              >
                <ion-icon name="menu-outline" class="menuBtnIcon"></ion-icon>
              </a>

              <a
                href="#"
                className="arrow position-absolute top-0 start-0"
                data-bs-toggle="modal"
                data-bs-target="#sidebarPanel"
                onClick={() =>
                  backTo ? history.push(backTo) : history.push("/circle-feed")
                }
              >
                <ion-icon name="chevron-back-outline"></ion-icon>
              </a>
            </div>
            <div class="card m-5">
              <div class="card-body flex-center flex-col">
                <h4 className="blue mt-4 m-0">{currentCircle.name}</h4>
                <small className="blue flex-center">
                  {currentCircle.description}{" "}
                </small>
                <h6 className="blue mt-4 mb-3">Mobilizers in this circle</h6>
                <div className="me-4 ml-4 mb-0">
                  {MobilizersCircle.map((item, index) => {
                    return (
                      
                      <img
                        src={"assets/img/" + item.imgProfil}
                        alt="image"
                        className="imaged w48 rounded m-2"
                        onClick={() =>
                          history.push({
                            pathname:
                              "/mobilizer-profile2:" +
                              currentCircle.name.replace(":", ""),
                            state: { index: index },
                          })
                        }
                      />
                    );
                  })}
                </div>
                <hr className="hr mt-2 mb-2" style={{ color: "#D9D9D9" }} />
                <div className="row mt-2 mb-2">
                  <div className="col flex-center">
                    <button
                      id="whiteBlackBtn"
                      type="button"
                      className="btn btn-primary rounded font-size-btn"
                      onClick={() => setShowMobilizerCampaignsModal(true)}
                    >
                      Campaigns
                    </button>
                  </div>
                  <div className="col flex-center">
                    <button
                      id="whiteBlackBtn"
                      type="button"
                      className="btn btn-primary rounded font-size-btn"
                      onClick={() => setShowMobilizerVictoriesModal(true)}
                    >
                      Victories
                    </button>
                  </div>
                </div>
                <hr className="hr mt-2 mb-2" style={{ color: "#D9D9D9" }} />
                <h5>Number of Memberships</h5>
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
                <p>200 memberships left to complete this circle</p>
                <div className="me-4 ml-4 mb-0">
                  <img
                    src="assets/img/sample/photo/1.jpg"
                    alt="image"
                    className="imaged w48 rounded m-2"
                  />
                  <img
                    src="assets/img/sample/photo/1.jpg"
                    alt="image"
                    className="imaged w48 rounded m-2"
                  />
                  <img
                    src="assets/img/sample/photo/1.jpg"
                    alt="image"
                    className="imaged w48 rounded m-2"
                  />
                </div>
                <div className="flex-center flex-col">
                  <span className="black">
                    <b>Supporter 1, Support 2, Supporter 3</b>
                    <br /> and 150 others are part of this circle.
                  </span>
                  <button
                    id="blueBtn"
                    type="button"
                    className="btn btn-primary rounded font-size-btn mt-4 mb-4"
                    onClick={() => setShowClubSelectMembershipModal(true)}
                  >
                    Fund this HERO Circle
                  </button>
                </div>
              </div>
            </div>
            <div className="circle-feed-bottom mb-4">
              <div style={{ display: "flex" }}>
                {state.circle.map((item, i) => {
                  return (
                    <div
                      className={
                        currentIndex === i ? "active-dot me-1" : "dot me-1"
                      }
                      onClick={() => goToNextCircle()}
                    ></div>
                  );
                })}
              </div>
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn"
                onClick={() => goToNextCircle()}
              >
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </button>
            </div>
          </div>
          <ClubSelectMembershipModal
            show={showClubSelectMembershipModal}
            onClose={() => setShowClubSelectMembershipModal(false)}
            circle={props.circlename}
          />
          <ActivistCampaignsModal
            show={showMobilizerCampaignsModal}
            onClose={() => setShowMobilizerCampaignsModal(false)}
          />
          <ActivistVictoriesModal
            show={showMobilizerVictoriesModal}
            onClose={() => setShowMobilizerVictoriesModal(false)}
          />
          <Menu show={showMenu} onClose={() => setShowMenu(false)} />
        </>
      )}
    </>
  );
}

export default withRouter(CircleFeedDetails);
