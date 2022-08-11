import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./ActivistProfile.css";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import ActivistVictoriesModal from "../components/modals/ActivistVictoriesModal";
import ActivistCampaignsModal from "../components/modals/ActivistCampaignsModal";
import ClubSelectMembershipModal from "../components/modals/ClubSelectMembershipModal";

function ActivistProfile(props) {
  const [showMobilizerCampaignsModal, setShowMobilizerCampaignsModal] =
    useState(false);
  const [showMobilizerVictoriesModal, setShowMobilizerVictoriesModal] =
    useState(false);
    const [showClubSelectMembershipModal, setShowClubSelectMembershipModal] =
    useState(false);
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn />

      <div id="appCapsule" className="bg-g-1">
        <div className="section full">
          <iframe
            id="background-video"
            src={"assets/videos/short-video-for-test.mp4"}
            frameborder="0"
            allow="accelerometer;autoplay=false; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="section">
          <div className="row mt-2 mb-2">
            <div
              className="col mb-2 flex-center"
              style={{ borderRight: "1px solid #D9D9D9" }}
            >
              <ion-icon
                id="campaign-logo"
                class="md-icon me-1"
                src="assets/img/svg/logoDark.svg"
                onClick={() => setShowMobilizerCampaignsModal(true)}
              ></ion-icon>
              <span
                className="fw-bold fs-14"
                onClick={() => setShowMobilizerCampaignsModal(true)}
              >
                Campaigns
              </span>
            </div>
            <div className="col flex-center mb-2">
              <ion-icon
                id="victory-logo"
                class="md-icon me-1"
                src="assets/img/svg/logoDark.svg"
                onClick={() => setShowMobilizerVictoriesModal(true)}
              ></ion-icon>
              <span
                className="fw-bold fs-14"
                onClick={() => setShowMobilizerVictoriesModal(true)}
              >
                Victories
              </span>
            </div>
          </div>
        </div>
        <div id="activist-details">
          <div className="section pt-3 text-center center-div">
            <div className="avatar-section mb-2">
              <a href="#">
                <img
                  src={"assets/img/annuna.png"}
                  alt="avatar"
                  className="imaged w100 rounded profil-img"
                />
              </a>
            </div>
            <h3 className="dark-text pb-0 mb-2">Anuna de Wever</h3>
            <h5 className="mb-2">
              <a href="" className="dark-text">
                @anunadewever
              </a>
            </h5>
            <h6 className="dark-text mb-2">Brussels, Belgium</h6>
            <div className="dark-text">
              <p>
                Climate & Social Justice Mobilizer
                <br /> Co-founder Youth for Climate Belgium
                <br /> Member of Friday’s for Future Global
              </p>
            </div>
          </div>
          <div id="social-btn-container" className="row mb-4">
            <div className="flex-col-center col mb-3 p-0">
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn"
              >
                <ion-icon src="assets/img/svg/tiktok.svg"></ion-icon>
              </button>
            </div>
            <div className="flex-col-center col mb-3 p-0">
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </button>
            </div>
            <div className="flex-col-center col mb-3 p-0">
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </button>
            </div>
          </div>
          <div className="section mb-4">
            <div id="activist1" className="mb-4">
              <img
                src="assets/img/logoWhite.png"
                alt="logo"
                className="logo mb-1"
              />
              <small>
                Close Coal Mines
                <br /> in Europe
              </small>
            </div>
          </div>
          <div className="section pb-4 mb-4">
            <button
              id="supportMobBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn"
              onClick={() => setShowClubSelectMembershipModal(true)}
            >
              Support Anuna’s HERO Circle
            </button>
          </div>
        </div>
      </div>
      <ActivistCampaignsModal
        show={showMobilizerCampaignsModal}
        onClose={() => setShowMobilizerCampaignsModal(false)}
      />
      <ActivistVictoriesModal
        show={showMobilizerVictoriesModal}
        onClose={() => setShowMobilizerVictoriesModal(false)}
      />
            <ClubSelectMembershipModal
        show={showClubSelectMembershipModal}
        onClose={() => setShowClubSelectMembershipModal(false)}
      />
    </>
  );
}

export default withRouter(ActivistProfile);
