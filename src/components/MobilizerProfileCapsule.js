import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import "./ActivistProfileCapsule.css";
import ExchangeModal from "./modals/ExchangeModal";

function MobilizerProfileCapsule(props) {
  return (
    <>
      <div id="appCapsule" className="bg-g-1">
        <div className="section full">
          <video id="background-video" autoPlay loop muted>
            <source
              src="Anuna_ the young Belgian who fights for the climate.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="section mt-3 text-center center-div">
          <div className="avatar-section mb-2">
            <a href="#">
              <img
                src="assets\img\Anuna_Profile Picture.jpg"
                alt="avatar"
                className="imaged w100 rounded"
              />
            </a>
          </div>
          <h3 className="blue-text">Anuna de Wever</h3>
          <span className="blue-text">Belgium</span>
          <p className="mt-2 blue-text">
            Climate & Social Justice Mobilizer Co-founder Youth for Climate
            Belgium Member of Friday’s for Future Global
          </p>
          <a href="#" className="blue-text">linktr.ee/anunadewever</a>
        </div>
        <hr
          data-content="AND"
          className="hr-text mt-2"
          style={{ width: "70%", margin: "0 auto" }}
        ></hr>
        <div className="section mt-2">
          <h2 className="blue-text">Endorsed by</h2>
          <p className="blue-text">Greta Thunberg , Angela Merkle , Christiana Figueres</p>
        </div>
        <hr
          data-content="AND"
          className="hr-text mt-2"
          style={{ width: "70%", margin: "0 auto" }}
        ></hr>
        <div className="section mt-3 mb-3">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex-center mb-2">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/voteBlue.svg"
                style={{ marginRight: "5px" }}
              ></ion-icon>
              <strong className="blue-text">Campaigns</strong>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 flex-center  mb-2">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/HeroCoin2.svg"
                style={{ marginRight: "5px" }}
              ></ion-icon>
              <strong className="blue-text">Victories</strong>
            </div>
          </div>
        </div>
        <hr
          data-content="AND"
          className="hr-text mt-2"
          style={{ width: "70%", margin: "0 auto" }}
        ></hr>
        <div className="section mt-2 mb-3">
          <div className="title blue-text">Funding Goal</div>
          <div className="value blue-text">€5, 000</div>

          <div className="center-div mt-3">
            <div
              class="progress mb-2"
              style={{
                width: "200px",
                margin: "0 auto",
                backgroundColor: "#dcdce9",
              }}
            >
              <div
                class="progress-bar"
                role="progressbar"
                style={{ width: "55%" }}
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div
              className="value"
              style={{ color: "blue", textAlign: "center" }}
            >
              € 500 of € 5,000 funded
            </div>
          </div>
          <button
            type="button"
            class="btn btn-outline-primary btn-lg rounded btn-width"
          >
            Support Anuna
          </button>
        </div>
      </div>
      <div className="appBottomMenu" style={{padding: "0 20px"}}>
        <a href="" className="item">
        <div className="col" style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
          <ion-icon src="assets/img/svg/previous.svg"  style={{margin:0}}></ion-icon>

            <strong style={{ color: "blue", marginLeft: "10px", fontSize: "14px", marginTop: 0 }}>
              Previous mobilizer
            </strong>
          </div>
        </a>

        <a href="" className="item">
          <div className="col" style={{display: "flex", justifyContent: "flex-end", alignItems: "center"}}>
            <strong style={{ color: "blue", marginRight: "10px", fontSize: "14px", marginTop: 0 }}>
              Next mobilizer
            </strong>
            <ion-icon src="assets/img/svg/next.svg" style={{margin:0}}></ion-icon>

          </div>
        </a>
      </div>
    </>
  );
}

export default MobilizerProfileCapsule;
