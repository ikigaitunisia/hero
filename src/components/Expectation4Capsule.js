import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./ActivistProfileCapsule.css";
import ActivistCampaignsModal from "./modals/ActivistCampaignsModal";
import ActivistVictoriesModal from "./modals/ActivistVictoriesModal";
//import CardTransactionModal from "./modals/CardTransactionModal";

function Expectation4Capsule(props) {
  const A = useLocation();
  const history = useHistory();
  const [showMobilizerCampaignsModal, setShowMobilizerCampaignsModal] =
    useState(false);
  const [showMobilizerVictoriesModal, setShowMobilizerVictoriesModal] =
    useState(false);
  const [showCardTransactionModal, setShowCardTransactionModal] =
    useState(false);
  const [loggedin, setLogedin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setLogedin(true);
    }
  }, []);
  useEffect(() => {
    console.log(A);
  }, []);
  const support = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      history.push("/Login");
    } else {
      //setShowCardTransactionModal(true);
      history.push("/cardtransaction");
    }
  };

  return (
    <>
      <div
        id="appCapsule"
        className="bg-g-1"
        style={loggedin ? { paddingBottom: "100px" } : {}}
      >
        <div className="section mt-4">
          <div className="wallet-card flex-center mb-4">
            <div className="avatar-section mb-2 me-4">
              <a href="#">
                <img
                  src={"assets/img/" + A.state.autre.Photo}
                  alt="avatar"
                  className="imaged w100 rounded profil-img"
                />
              </a>
            </div>
            <div className="text-start">
              <h3 className="blue-text">Julieta Martinez</h3>
              <span className="blue-text">Chile</span>
              <p>
                Founder Tremendas | Cofounder Latinas for climate | Activist UN
                Women
              </p>
              <a href="linktr.ee/julietamartinez">linktr.ee/julietamartinez</a>
            </div>
          </div>
          <div className="mb-4">
            <video id="background-video" controls={true} playsInline>
              <source src={A.state.autre.Video} type="video/mp4" />
            </video>
          </div>
          <div className="section mb-4">
            <div className="flex-center">
              <div
                className="mb-2 flex-center pt-2 pb-2 pe-3 pl-3"
                style={{
                  backgroundColor: "blue",
                  borderRadius: "20px 0 0 20px",
                }}
              >
                <ion-icon
                  class="md-icon me-1"
                  src="assets/img/svg/voteBlue.svg"
                  onClick={() => setShowMobilizerCampaignsModal(true)}
                ></ion-icon>
                <span className="white-text fw-bold fs-14">Campaigns</span>
              </div>
              <div
                className="flex-center mb-2 pt-2 pb-2 pe-3 pl-3"
                style={{
                  backgroundColor: "blue",
                  borderRadius: "0 20px 20px 0",
                }}
              >
                <ion-icon
                  class="md-icon me-1"
                  src="assets/img/svg/HeroCoin2.svg"
                  onClick={() => setShowMobilizerVictoriesModal(true)}
                ></ion-icon>
                <span className="white-text fw-bold fs-14">Victories</span>
              </div>
            </div>
          </div>
          <div className="wallet-card mb-4" style={{ backgroundColor: "blue" }}>
            <h5 className="white-text">Launch is one month away!</h5>
            <p className="white-text">
              Take action on climate change by pledging to fund your favourite
              mobilizer upon launch.
            </p>
            <button
              type="submit"
              className="btn btn-link btn-block btn-lg rounded submit-btn"
            >
              Make a pledge
            </button>
          </div>
          <div className="center-div mb-4">
            <h4 className="blue-text">Works on same causes as</h4>
            <div class="chip chip-primary ms-05 mb-05">
              <span class="chip-label">Juan Sierra</span>
            </div>
            <div class="chip chip-primary ms-05 mb-05">
              <span class="chip-label">Jessica Klezcka</span>
            </div>
            <div class="chip chip-primary ms-05 mb-05">
              <span class="chip-label">Elijah Mckenzie</span>
            </div>
          </div>
        </div>

        <ActivistCampaignsModal
          show={showMobilizerCampaignsModal}
          activist={A.state}
          onClose={() => setShowMobilizerCampaignsModal(false)}
        />
        <ActivistVictoriesModal
          show={showMobilizerVictoriesModal}
          activist={A.state}
          onClose={() => setShowMobilizerVictoriesModal(false)}
        />
      </div>
    </>
  );
}

export default Expectation4Capsule;
