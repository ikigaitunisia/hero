import React from "react";
import "./CardCapsule.css";

function CardHeader(props) {
  return (
    <div className="appHeader">
      <div className="left">
        <a href="#" className="headerButton goBack">
          <ion-icon name="chevron-back-outline"></ion-icon>
        </a>
      </div>
      <div className="pageTitle">
        <ion-icon
          class="icon-title"
          src="assets/img/svg/heroCardBlue.svg"
        ></ion-icon>
      </div>
      <div className="right">
        <a href="#" className="headerButton">
          <ion-icon name="add-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default CardHeader;
