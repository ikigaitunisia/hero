import React, { useEffect, useState } from "react";
import { Modal } from "bootstrap";
import "./WelcomeCirclesModal.css";
import { useHistory } from "react-router-dom";

function WelcomeCirclesModal(props) {
  const history = useHistory();
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

  useEffect(() => {
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {});
    const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", () => {
      history.push("/circle-home");
      window.location.reload();
    });
    const btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", () => {
      history.push("/circle-home");
      window.location.reload();
    });
  }, []);
  return (
    <>
      <div
        className="modal fade modalbox"
        id="welcomeCircles"
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
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
            <div className="modal-body">
              <div className="flex-center flex-col">
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

                <button id="btn1" type="button" className="btn btn-lg mb-4">
                  Echo this circle,
                  <br />
                  invite your friends to join!
                </button>
                <button
                  id="btn2"
                  type="button"
                  className="btn btn-lg mb-4"
                  data-bs-dismiss="modal"
                >
                  Go to your HERO Circle
                </button>
                <button
                  id="btn3"
                  type="button"
                  className="btn btn-lg mb-4"
                  data-bs-dismiss="modal"
                >
                  Go to your profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeCirclesModal;
