import React from "react";

function CardBottomMenu(props) {
  return (
    <div className="appBottomMenu">
      <a href="" className="item">
        <div className="col">
          <ion-icon src="assets/img/svg/wallet.svg"></ion-icon>
          <strong style={{ color: "blue" }}>Wallet</strong>
        </div>
      </a>
      <a href="" className="item active">
        <div className="col">
          <ion-icon
            name="arrow-forward-outline"
            style={{ color: "bule" }}
          ></ion-icon>
          <strong style={{ color: "blue" }}>Support</strong>
        </div>
      </a>
      <a href="" className="item">
        <div className="col">
          <ion-icon src="assets/img/svg/heroCoin.svg"></ion-icon>
          <strong style={{ color: "blue" }}>HERO Coin</strong>
        </div>
      </a>
    </div>
  );
}

export default CardBottomMenu;
