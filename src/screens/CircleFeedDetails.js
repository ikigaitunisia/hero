import React, { useEffect, useState } from "react";
import { withRouter ,useParams,useLocation} from "react-router-dom";
import Header from "../components/Header";
import "./CircleFeed.css";
import "./CircleFeedDetails.css";
import ClubSelectMembershipModal from "../components/modals/ClubSelectMembershipModal";
import ActivistVictoriesModal from "../components/modals/ActivistVictoriesModal";
import ActivistCampaignsModal from "../components/modals/ActivistCampaignsModal";
import axios from "axios";
function CircleFeedDetails(props) {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCircle, setCurrentCircle] = useState({});
  const [load,setLoad] = useState(false);
  const [showClubSelectMembershipModal, setShowClubSelectMembershipModal] =
    useState(false);
  const [showMobilizerCampaignsModal, setShowMobilizerCampaignsModal] =
    useState(false);
  const [showMobilizerVictoriesModal, setShowMobilizerVictoriesModal] =
    useState(false);
  const [MobilizersCircle,setMobilizersCircle] = useState([]);
    const { circlename } = useParams();
    const {state} = useLocation();
    const [circles,setCircles] = useState([]);
  const goToNextCircle = () => {
    if (currentIndex === 4) {
      setCurrentIndex(0);
      setCurrentCircle(circles[0]);
      return;
    }
    setCurrentIndex(currentIndex + 1);
  };
  useEffect(() => {
    setCircles(state.circle)
    setCurrentIndex(state.index);
    setLoad(true);
    axios.get("https://hegemony.donftify.digital:8080/circle/members/"+circlename.replace(":",""))
      .then((res) => {
        console.log(res.data);
        setMobilizersCircle(res.data);
          
        });
        
    setCurrentCircle(state.circle[currentIndex]);

  }, [currentIndex]);
  return (
   
    <>
   
   {load &&
   <>
      <Header whiteMode showHeroLogo transparent showBackBtn />

      <div id="appCapsule" className="circle-feed-details">
        <div class="card m-4">
          <div class="card-body flex-center flex-col">
            <h4 className="blue mt-4 m-0">{currentCircle.name}</h4>
            <small className="blue flex-center">
              {currentCircle.description}{" "}
              <ion-icon src="assets/img/svg/icon7.svg" class="ml-1"></ion-icon>
            </small>
            <h6 className="blue mt-4 mb-3">Mobilizers in this circle</h6>
            <div className="me-4 ml-4 mb-0">
            {MobilizersCircle.map((item) => {
                    return (

              <img
                src={"assets/img/"+item.imgProfil}
                alt="image"
                className="imaged w48 rounded m-2"
              />
                    )
            })
          }
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
          {circles.map((item, i) => {
                    return (

            <div
              className={currentIndex === i ? "active-dot me-1" : "dot me-1"}
              onClick={goToNextCircle}
            ></div>
                    )
            })
            }
            
          </div>
          <button
            type="button"
            className="btn btn-icon rounded btn-primary social-btn"
            onClick={goToNextCircle}
          >
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
      <ClubSelectMembershipModal
        show={showClubSelectMembershipModal}
        onClose={() => setShowClubSelectMembershipModal(false)}
      />
      <ActivistCampaignsModal
        show={showMobilizerCampaignsModal}
        onClose={() => setShowMobilizerCampaignsModal(false)}
      />
      <ActivistVictoriesModal
        show={showMobilizerVictoriesModal}
        onClose={() => setShowMobilizerVictoriesModal(false)}
      />
      </>
        }
    </>
  
  );
}

export default withRouter(CircleFeedDetails);
