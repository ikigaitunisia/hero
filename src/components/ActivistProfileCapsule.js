import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

import "./ActivistProfileCapsule.css";
import ExchangeModal from "./modals/ExchangeModal";
function ActivistProfileCapsule(props) {
  const A = useLocation();
  const history = useHistory();
  const [Info, setInfo] = useState({});
  const [showExchangeModal, setShowExchangeModal] = useState(false);
  const support = () => {
    console.log("Anuna");
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      history.push("/Login");
    } else {
      setShowExchangeModal(true);
    }
  };
  return (
    <div id="appCapsule">
      <div className="section wallet-card-section pt-1">
        <div
          className="wallet-card"
          style={{ height: "40vh", padding: 0, borderRadius: "15px" }}
        >
          <video
            id="background-video"
            autoPlay
            loop
            muted
            style={{ borderRadius: "10px" }}
          >
            <source src={A.state.autre.Video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="section mt-4">
        <div className="wallet-card custom-font blue-text">
          <h1 className="blue-text">{A.state.Nom + " " + A.state.Prenom}</h1>
          <span>{A.state.autre.Pays}</span>
        </div>
      </div>
      <div className="section">
        <div className="row mt-2">
          <div className="col-5">
            <div className="stat-box">
              <div className="title blue-text">Funding Goal</div>
              <div className="value blue-text">
                {"€" + A.state.autre.MaxFunds}
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="stat-box">
              <div class="progress mb-2">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div
                className="value"
                style={{ color: "blue", textAlign: "start" }}
              >
                {"€ 500 of € " + A.state.autre.MaxFunds}
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <button
              type="button"
              class="btn btn-primary btn-lg rounded shadowed btn-width"
              onClick={() => support()}
            >
              Support Anuna
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <div className="stat-box text-box">
              <h3>Bio</h3>
              <p>
                {A.state.autre.Bio + " "}
                <a
                  href=""
                  style={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Youth for Climate Belgium
                </a>{" "}
                Member of{" "}
                <a
                  href=""
                  style={{
                    textDecoration: "underline",
                    fontWeight: "bold",
                  }}
                >
                  Friday’s for Future Global
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col-12">
            <div className="stat-box text-box">
              <h3>Results to date</h3>
              <p>{A.state.autre["Results to date"]}</p>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <div className="stat-box text-box">
              <h3>Endorsed by</h3>
              <p>Greta Thunberg , Angela Merkle , Christiana Figueres</p>
            </div>
          </div>
        </div>
      </div>
      <ExchangeModal
        show={showExchangeModal}
        onClose={() => setShowExchangeModal(false)}
      />
    </div>
  );
}

export default ActivistProfileCapsule;
