import React from "react";

function MobilizerCardBottomMenu(props) {
  return (
    <div className="appBottomMenu">
      <a href="" className="item active">
        <div className="col">
          <ion-icon
            src="assets/img/svg/transaction.svg"
            style={{ color: "bule" }}
          ></ion-icon>
        </div>
      </a>
      <a href="" className="item">
        <div className="col">
          <ion-icon src="assets/img/svg/vote1.svg"></ion-icon>
        </div>
      </a>
    </div>
  );
}

export default MobilizerCardBottomMenu;
