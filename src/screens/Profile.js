import React, { useEffect, useState } from "react";
import { withRouter, useHistory } from "react-router-dom";
import Header from "../components/Header";
import "./Profile.css";
import { MobilizerData } from "../data/data.js";
import { useParams } from "react-router-dom";
import VerifyLogo from "./Profile/ProfileAssets/Verify-logo.svg";

function Profile(props) {
  const history = useHistory();
  const { id } = useParams();
  const [activist, setActivist] = useState({});
  useEffect(() => {
    console.log(id.substring(1));
    MobilizerData.map((value, index) => {
      if (value.id === id.substring(1)) {
        setActivist(value);
      }
    });
  });
  return (
    <>
      <Header whiteMode showLogo showMenu bgBlue />

      <div id="appCapsule" className="profile" style={{ minHeight: "100vh" }}>
        <div id="activist-info" className="bg-g p-4">
          <img
            src={activist.image ? "assets/img/" + activist.image : ""}
            alt="image"
            className="imaged w76 rounded"
          />
          <h3 className="pb-0 m-0 mt-2">{activist.name}</h3>
          <small>{activist.sm}</small>
          <img src={VerifyLogo} className="ml-1" />
          <br />
          <span>{activist.location}</span>
          <p className="mt-2">{activist.profileDescription}</p>
          <div id="social-btn-container" className="row p-2 mt-3">
            <div className="flex-col-center col mb-3 p-0">
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn me-1 mb-1"
              >
                <ion-icon src="assets/img/svg/social-icon-1.svg"></ion-icon>
              </button>
            </div>
            <div className="flex-col-center col mb-3 p-0">
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn me-1 mb-1"
              >
                <ion-icon src="assets/img/svg/social-icon-2.svg"></ion-icon>
              </button>
            </div>
            <div className="flex-col-center col mb-3 p-0">
              <button
                type="button"
                className="btn btn-icon rounded btn-primary social-btn me-1 mb-1"
              >
                <ion-icon src="assets/img/svg/social-icon-3.svg"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div className="row p-4">
          <div id="public-content" className="col black mb-2">
            <ion-icon
              class="me-2"
              src="assets/img/svg/coinBlack.svg"
            ></ion-icon>
            <span>Public Content</span>
          </div>
          <div id="club-access" className="col blue mb-2">
            <ion-icon class="me-2" src="assets/img/svg/coinBlue.svg"></ion-icon>
            <span>Club Access</span>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="exampleBox">.col</div>
          </div>
          <div class="col">
            <div class="exampleBox">.col</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Profile);
