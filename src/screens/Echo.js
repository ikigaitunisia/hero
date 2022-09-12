import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Echo() {
  const history = useHistory();

  return (
    <>
      <div
        id="appCapsule"
        className="bg-g login"
        style={{ minHeight: "100vh" }}
      >
        <div id="welcomeClub" className="modal-body">
          <img src={"assets/img/echo.png"} alt="logo" className="logo" />{" "}
          <p className="header-text mt-4 white">
            Echo this circle,
            <br />
            invite your friends to join!
          </p>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="circle1.hero-labs.co"
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
                  <ion-icon class="blue" name="logo-whatsapp"></ion-icon>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <ion-icon src="assets/img/svg/tiktok2.svg"></ion-icon>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <ion-icon class="blue" name="logo-instagram"></ion-icon>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <ion-icon class="blue" name="logo-twitter"></ion-icon>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <ion-icon class="blue" name="logo-facebook"></ion-icon>
                </button>
              </div>
              <div className="flex-col-center col mb-3 p-0">
                <button
                  type="button"
                  className="btn btn-icon rounded btn-primary social-btn"
                >
                  <ion-icon class="blue" name="logo-linkedin"></ion-icon>
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
