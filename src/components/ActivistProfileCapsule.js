import React, { useState, useEffect } from "react";
import { useHistory,useParams } from "react-router-dom";
import axios from "axios";

import "./ActivistProfileCapsule.css";

function ActivistProfileCapsule(props) {
  const { id } = useParams();
  const history = useHistory();
  const [Info,setInfo] = useState({});
  useEffect(() => {
    axios
    .post("http://localhost:8080/GetActivistByID", {
      ID: id
    })
    .then(function (response) {
      console.log(response.data);
      
    })
    .catch(function (error) {
        //handle error here
        console.log(error);
    }); 


  }, []);

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
            <source
              src="assets/videos/short-video-for-test.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div className="section mt-4">
        <div className="wallet-card custom-font blue-text">
          <h1 className="blue-text">Anuna de Wever</h1>
          <span>Belgium</span>
        </div>
      </div>
      <div className="section">
        <div className="row mt-2">
          <div className="col-5">
            <div className="stat-box">
              <div className="title blue-text">Funding Goal</div>
              <div className="value blue-text">€5, 000</div>
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
                € 500 of € 5,000 funded
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <button
              type="button"
              class="btn btn-primary btn-lg rounded shadowed btn-width"
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
                Climate & Social Justice Mobilizer Co-founder{" "}
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
              <p>
                1, 0000, 0000 people movilized in Belgium. Propossed law in the
                EU Parliament to stop fossil fuel extraction in Central Europe.
              </p>
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
    </div>
  );
}

export default ActivistProfileCapsule;
