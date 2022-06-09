import React, { useState } from "react";
import "./CardCapsule.css";
import ExchangeModal from "./modals/ExchangeModal";

function CardCapsule(props) {
  const [showExchangeModal, setShowExchangeModal] = useState(false);

  return (
    <div id="appCapsule" className="bg-g-1">
      <div className="section mt-2">
        <div className="card-block mb-2 bg-g">
          <div className="card-main card-main-custom">
            <div>
              <ion-icon
                class="icon-title"
                src="assets/img/svg/heroCardWhite.svg"
              ></ion-icon>
            </div>
            <div className="in in-custom">
              <div className="card-number card-number-custom mb-3">
                <span className="label">YOUR HERO COIN BALANCE</span>
                <strong>
                  <ion-icon
                    src="assets/img/svg/Vector.svg"
                    style={{ marginRight: "5px" }}
                  ></ion-icon>{" "}
                  2.250
                </strong>
              </div>
              <div className="card-number card-number-custom">
                <span className="label">BACKED BY</span>
                <strong>00000</strong>
                <span className="label">CARBON CREDITS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExchangeModal
        show={showExchangeModal}
        onClose={() => setShowExchangeModal(false)}
      />
      <div className="text">
        <h1 className="text-title">HERO Mobilizers supported</h1>
        <p className="left-right-padding">
          <a href="#">Discover how carbon credits are calculated.</a>
        </p>
      </div>
      <div className="center-div">
        <ul className="listview flush transparent simple-listview no-space mt-3">
          <li>
            <div
              className="detail"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="assets/img/img3.png"
                alt="img"
                className="image-block imaged rounded w48"
                style={{ marginRight: "10px" }}
              />
              <div>
                <strong>Anuna de Wever</strong>
              </div>
            </div>
            <div className="itemList">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/voteBlue.svg"
                style={{ marginRight: "5px" }}
              ></ion-icon>
              <ion-icon
                class="md-icon"
                src="assets/img/svg/HeroCoin2.svg"
                style={{ marginRight: "5px" }}
              ></ion-icon>
            </div>
          </li>
          <li>
            <div
              className="detail"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="assets/img/img2.png"
                alt="img"
                className="image-block imaged rounded w48"
                style={{ marginRight: "10px" }}
              />
              <div>
                <strong>Julieta Martinez</strong>
              </div>
            </div>
            <div className="itemList">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/voteBlue.svg"
                style={{ marginRight: "5px" }}
              ></ion-icon>
              <ion-icon
                class="md-icon"
                src="assets/img/svg/HeroCoin2.svg"
                style={{ marginRight: "5px" }}
              ></ion-icon>
            </div>
          </li>
          <li>
            <div
              className="detail"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="assets/img/img1.png"
                alt="img"
                className="image-block imaged rounded w48"
                style={{ marginRight: "10px" }}
              />
              <div>
                <strong>Vanessa Nakate</strong>
              </div>
            </div>
            <div className="itemList">
              <ion-icon
                class="md-icon"
                src="assets/img/svg/voteBlue.svg"
                style={{ marginRight: "5px" }}
              ></ion-icon>
              <ion-icon
                class="md-icon"
                src="assets/img/svg/HeroCoin2.svg"
                style={{ marginRight: "5px" }}
              ></ion-icon>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardCapsule;
