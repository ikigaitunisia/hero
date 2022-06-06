import React from "react";
import { withRouter } from "react-router-dom";
import "./HomeCapsule.css";

function HomeCapsule(props) {
  return (
    <div id="appCapsule">
      <div className="section wallet-card-section pt-1">
        <div
          className="wallet-card"
          style={{ padding: 0, borderRadius: "25px" }}
        >
          <img id="background-image" src="assets/img/homebg.png" />
        </div>
      </div>
      <div className="mt-2 mb-2">
        <button type="button" class="btn btn-icon btn-primary btn-lg btn-round">
          <ion-icon src="assets/img/svg/vote.svg"></ion-icon>
        </button>
      </div>
      <div className="section">
        <h2 className="blue-text custom-font">Millions of HEROES.</h2>
        <div className="row mt-2">
          <div className="col-12">
            <div className="stat-box">
              <p>
                Today millions of social and climate mobilizers around the world
                are advocating for change. This is probably one of the most
                important jobs of our time and it's not being paid.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-2">
        <ion-icon
          src="assets/img/svg/heroCoin.svg"
          class="btn-round"
        ></ion-icon>
      </div>
      <div className="section">
        <h2 className="blue-text custom-font">
          One coin that gives you the power to support them.
        </h2>
        <div className="row mt-2">
          <div className="col-12">
            <div className="stat-box">
              <p>
                We are redefining the way you can take action by empowering you
                to invest directly in leading and emerging mobilizers providing
                them the financial resources they need to accelerate climate
                action.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section mt-2">
        <button type="button" class="btn btn-primary btn-lg rounded shadowed" onClick={() => history.push("/feed")}>
          Become an early investor in the HERO Coin
        </button>
      </div>
    </div>
  );
}

export default withRouter(HomeCapsule);
