import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./ActivistProfile.css";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SearchForHeroCircle from "../components/SearchForHeroCircle";

function ActivistProfile(props) {
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
            <div className="col mb-2 flex-center">
              <ion-icon
                id="campaign-logo"
                class="md-icon me-1"
                src="assets/img/svg/logoDark.svg"
              ></ion-icon>
              <span className="fw-bold fs-14">Campaigns</span>
            </div>
            <div className="col flex-center mb-2">
              <ion-icon
                id="victory-logo"
                class="md-icon me-1"
                src="assets/img/svg/logoDark.svg"
              ></ion-icon>
              <span className="fw-bold fs-14">Victories</span>
            </div>
          </div>
        </div>
        <div className="section mt-3 text-center center-div">
          <div className="avatar-section mb-2">
            <a href="#">
              <img
                src={"assets/img/annuna.png"}
                alt="avatar"
                className="imaged w100 rounded profil-img"
              />
            </a>
          </div>
          <h3 className="custom-font blue-text pb-0 m-0">Anuna de Wever</h3>
          <h5>
            <a href="" className="blue-text title-font">
              @anunadewever
            </a>
          </h5>
          <span className="blue-text fs-italic">Brussels, Belgium</span>
          <div className="black-text pt-3 pb-3">
            <span>
              Climate & Social Justice Mobilizer Co-founder Youth for Climate
              Belgium Member of Friday’s for Future Global
            </span>
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
          >
            Support Anuna’s HERO Circle
          </button>
        </div>
      </div>
    </>
  );
}

export default withRouter(ActivistProfile);
