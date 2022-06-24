import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import "../HomeCapsule.css";

function HomeCapsuleDesktop(props) {
  const history = useHistory();
  return (
    <div id="appCapsule" className="bg-g" style={{ minHeight: "100vh" }}>
      <div className="container">
        <div className="row mt-4 pt-4">
          <div className="col-6 flex-center">
            <img
              className="home-img"
              src="assets/img/Anuna_HomePage.png"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-6">
            <div style={{ marginBottom: 0 }}>
              <h4 className="text-title white-text title-font">
                Millions of Climate Mobilizers.
              </h4>
              <div className=" white-text custom-font-size">
                Today millions of climate mobilizers around the world are
                advocating for change. This is probably one of the most
                important jobs of our time and it's not being paid.
              </div>
            </div>
            <div style={{ marginBottom: 0 }}>
              <h4 className="text-title white-text title-font">
                HERO Coin gives you the power to support them.
              </h4>
              <div className=" white-text custom-font-size">
                Financing climate mobilizers is 100 times* more effective than
                buying carbon credits. With no intermediaries, full transparency
                and a shared governance.
              </div>
            </div>
            <div className="mt-4">
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg rounded font-size-btn"
                style={{
                  borderColor: "white",
                  color: "#8585FF",
                  background: "white",
                }}
                onClick={() => history.push("/feed")}
              >
                Meet the first HERO Mobilizers
              </button>
              <div className="mt-3">
                <span className="white-text" style={{ fontSize: "14px" }}>
                  *Source: Stanford Social Innovation Review
                </span>
              </div>
            </div>
          </div>
        </div>
        <hr data-content="AND" className="hr-text mb-4 mt-4 light-divider"></hr>
        <div className="row mt-4 mb-4">
          <div className="col-6">
            {" "}
            <div className="section mt-3 pt-4">
              <ion-icon
                src="assets/img/svg/heroCoinWhite.svg"
                class="btn-round"
              ></ion-icon>
              <h1 className="text-title white-text mb-4 title-font">
                Learn how the
                <br />
                HERO Coin works.
              </h1>
            </div>
          </div>
          <div className="col-6 flex-center">
            <iframe
              className="home-video-desktop mb-4"
              src="https://www.youtube.com/embed/cy44_lAZcVs"
              title="HERO Coin - How it works"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomeCapsuleDesktop);
