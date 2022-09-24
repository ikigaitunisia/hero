import React, { useEffect, useState } from "react";
import "./WelcomeCirclesModal.css";
import { useHistory, useParams, withRouter } from "react-router-dom";
import { Modal } from "bootstrap";

function WelcomeCircles(props) {
  const history = useHistory();
  const { circlename } = useParams();
  const [user,setUser] = useState({});
  const user1 = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const modal = new Modal(document.getElementById("welcomeCircles"), {
      keyboard: false,
    });

    modal.show();
   
  }, []);
  useEffect(() => {
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", () => {
      history.push("/echo:" + circlename.replace(":", ""));
      window.location.reload();
    });
    const btn2 = document.getElementById("btn2");
    btn2.addEventListener("click", () => {
      history.push("/circle-home:" + circlename.replace(":", ""));
      window.location.reload();
    });
    const btn3 = document.getElementById("btn3");
    btn3.addEventListener("click", () => {
      history.push("/account-information");
      window.location.reload();
    });
    console.log(user1.wallet.name);
   
  }, []);
  return (
    <>
      <div
        className="modal fade modalbox"
        id="welcomeCircles"
        key="welcomeCircles"
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
            ></div>
            <div className="modal-body">
              <div className="flex-center flex-col">
                <img
                  src={"assets/img/logo2.png"}
                  alt="logo"
                  className="logo mt-0"
                />
                <p className="header-text mt-4 white mb-0">
                  Welcome to Circle 1,
                  <br /> {user1.wallet.name!= null ? user1.wallet.name : ""}
                </p>
                <p className="mt-4 mb-4 white center-text">
                  You are now supporting <b>the {circlename.replace(':',"")}</b> and will
                  <br /> have access to exclusive features.
                </p>

                <button
                  id="btn1"
                  type="button"
                  className="btn btn-lg mb-4"
                  onClick={() => console.log("ok")}
                >
                  <b>Echo this circle,</b>
                  <br />
                  <span>invite your friends to join!</span>
                </button>
                <button
                  id="btn2"
                  type="button"
                  className="btn btn-lg mb-4"
                  data-bs-dismiss="modal"
                >
                  <b>Go to your HERO Circle</b>
                </button>
                <button
                  id="btn3"
                  type="button"
                  className="btn btn-lg mb-4"
                  data-bs-dismiss="modal"
                >
                  <b>Go to your profile</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(WelcomeCircles);
