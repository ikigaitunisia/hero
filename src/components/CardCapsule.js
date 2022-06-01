import React from "react";
import "./CardCapsule.css";

function CardCapsule(props) {
  return (
    <div id="appCapsule">
      <div className="section mt-2">
        <div className="card-block mb-2">
          <div className="card-main">
            <div>
              <ion-icon
                class="icon-title"
                src="assets/img/svg/heroCardWhite.svg"
              ></ion-icon>
            </div>
            <div className="in">
              <div className="card-number">
                <span className="label">HERO COINS</span>
                <strong>
                  <ion-icon
                    src="assets/img/svg/Vector.svg"
                    style={{ marginRight: "5px" }}
                  ></ion-icon>{" "}
                  2.250
                </strong>
              </div>
              <div className="card-number">
                <span className="label">EQUIVALENT IN USD</span>
                <strong>$ 1.562.50</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wallet-card">
        <div className="wallet-footer">
          <div className="item">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#withdrawActionSheet"
              style={{ display: "block" }}
            >
              <div className="icon-wrapper">
                <ion-icon name="arrow-down-outline"></ion-icon>
              </div>
              <strong style={{ color: "blue" }}>Withdraw</strong>
            </a>
          </div>
          <div className="item">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#sendActionSheet"
            >
              <div className="icon-wrapper">
                <ion-icon src="assets/img/svg/exchange.svg"></ion-icon>
              </div>
              <strong style={{ color: "blue" }}>Exchange</strong>
            </a>
          </div>
          <div className="item">
            <a href="">
              <div className="icon-wrapper">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <strong style={{ color: "blue" }}>Support</strong>
            </a>
          </div>
          <div className="item">
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#exchangeActionSheet"
            >
              <div className="icon-wrapper bg-dark">
                <ion-icon src="assets/img/svg/vote.svg"></ion-icon>
              </div>
              <strong style={{ color: "blue" }}>Vote</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="text">
        <h1 className="text-title">Carbon offsets for recent transcations*</h1>
        <p>
          *The amount of carbon offset credits are calculated in real time by
          the actions taken by the mobilizers you support and the projects and
          policies they are pushing forward globally. You can access the full
          list of actions taken in real time <a href="#">here</a>.
        </p>
      </div>
      <div className="center-div">
        <ul className="listview flush transparent simple-listview no-space mt-3">
          <li>
            <strong>Anuna de Wever</strong>
            <div className="itemList">
              <strong>+ $ 200</strong>
              <span>- 1000 tons of C02</span>
            </div>
          </li>
          <li>
            <strong>Vanessa Nakate</strong>
            <div className="itemList">
              <strong>+ $ 400</strong>
              <span>- 2000 tons of C02</span>
            </div>
          </li>
          <li>
            <strong className="largeText">Julieta Martinez</strong>
            <div className="itemList">
              <strong className="largeText">+ $ 100</strong>
              <span>- 500 tons of C02</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardCapsule;
