import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import "./WelcomeCirclesModal.css";
function WelcomeCirclesModal(props) {
  useEffect(() => {
    if (props.show) {
      const modal = new Modal(document.getElementById("welcomeCircles"), {
        keyboard: false,
      });
      if (modal) {
        modal.show();
      }
    }

    return () => {
      props.onClose();
    };
  }, [props.show]);

  return (
    <>
      <div
        className="modal fade modalbox clubSelectMembership"
        id="welcomeCircles"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className={"modal-content modal-content-custom"}>
            <div
              className="modal-header"
              style={{
                justifyContent: "flex-end",
                border: "unset",
                background: "transparent",
              }}
            >
              <a href="#" data-bs-dismiss="modal">
                <ion-icon name="close" style={{ color: "white" }}></ion-icon>
              </a>
            </div>
            <div id="welcomeClub" className="modal-body flex-center flex-col">
              <img src={"assets/img/logo2.png"} alt="logo" className="logo" />
              <p className="header-text mt-4 white">
                Welcome to the Circle, John!
              </p>
              <p className="mt-4 mb-4 pb-4 white center-text">
                You are now supporting{" "}
                <b>
                  Mobilizer 1 and 9<br /> other mobilizers
                </b>{" "}
                and will have access to
                <br /> exclusive features.
              </p>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg rounded mb-4"
              >
                Echo this circle,
                <br />
                invite your friends to join!
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg rounded mb-4"
              >
                Go to your HERO Circle
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg rounded mb-4"
              >
                Go to your profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeCirclesModal;
