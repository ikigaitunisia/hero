import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Echo.css";

function Echo() {
  const history = useHistory();

  return (
    <>
      <div
        id="appCapsule"
        className="echo"
        style={{ minHeight: "100vh" }}
      >
        <div id="" className="echo-content section">
          <img src={"assets/img/echotransparent.png"} alt="logo" className="logo" />{" "}
          <p className="header-text mt-4 white">
            Echo this circle,
            <br />
            invite your friends to join!
          </p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              value="circle1.hero-labs.co"
              aria-label="circle1.hero-labs.co"
              aria-describedby="basic-addon2"
            />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Copy
              </button>
            </div>
          </div>
          <div className="section center">
            <div id="social-btn-container2" className="row mb-4">
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/whatsapp.svg"/>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/tiktok3.svg"/>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/instagram.svg"/>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/twitter.svg"/>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/facebook.svg"/>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <img class="blue" src="assets/img/svg/linkedin.svg"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Echo);
