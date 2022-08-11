import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./ActivistProfile.css";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import ActivistVictoriesModal from "../components/modals/ActivistVictoriesModal";
import ActivistCampaignsModal from "../components/modals/ActivistCampaignsModal";
import ClubSelectMembershipModal from "../components/modals/ClubSelectMembershipModal";

function AfricanLeadersCircleProfile(props) {
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
            <div
              className="col flex-center mb-2"
              style={{ borderRight: "1px solid #D9D9D9" }}
            >
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
            <div className="col flex-center mb-2">
              <ion-icon
                id="victory-logo"
                class="md-icon me-1"
                src="assets/img/svg/logoDark.svg"
                onClick={() => setShowMobilizerVictoriesModal(true)}
              ></ion-icon>
              <span className="fw-bold fs-14">Members</span>
            </div>
          </div>
        </div>
        <div id="activist-details">
          <div className="section pt-3 text-center center-div">
            <h3 className="pb-0 mb-2 blue">Close Coal Mines in Europe</h3>
            <h5 className="mb-2 blue">HERO Circle</h5>
            <div className="dark-text">
              <p>
                This circle is working to pass policies that will end
                <br /> coal mining in Europe, resulting in more than
                <br /> 1,500 gigatons of carbon reduction by 2030.
              </p>
            </div>
          </div>

          <div className="section mb-4">
            <div className="flex-col">
              <span>Region of impact:</span>
              <span className="badge badge-primary">Europe</span>
            </div>
            <div className="flex-col">
              <span>Scope of work:</span>
              <div className="row">
                <span className="badge badge-primary me-2 col">
                  Climate Justice
                </span>
                <span className="badge badge-primary col">
                  Carbon Reduction
                </span>
              </div>
            </div>
          </div>
          <div className="section pb-4 mb-4 custom-div">
            <h6 className="blue">
              Become a member to contribute a<br /> monthly basic income to the
              10
              <br />
              mobilizers of this circle.
            </h6>
            <button
              id="supportMobBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn"
              onClick={() => setShowClubSelectMembershipModal(true)}
            >
              Join this HERO Circle
            </button>
          </div>
          <div className="section">
            <span>Goal</span>
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
            <span>150 out of 400 supporters</span>
          </div>
          <div className="mt-4">
            <div>
              <img
                src="assets/img/member1.png"
                alt="image"
                className="imaged w48 rounded me-1"
              />
              <img
                src="assets/img/member2.png"
                alt="image"
                className="imaged w48 rounded me-1"
              />
              <img
                src="assets/img/member3.png"
                alt="image"
                className="imaged w48 rounded me-1"
              />
            </div>
            <div>
              <small>
                <b>Sylvain, Mauricio, Mohamed</b> and
                <br /> 147 others are supporting this circle.
              </small>
            </div>
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

export default withRouter(AfricanLeadersCircleProfile);
