import React from "react";
import "./CardCapsule.css";

function CardHeader(props) {
  return (
    <div className="appHeader no-border transparent position-absolute">
      <div className="left">
        <a
          href="#"
          className="headerButton"
          data-bs-toggle="modal"
          data-bs-target="#sidebarPanel"
        >
          <ion-icon name="menu-outline"></ion-icon>
        </a>
      </div>
      <div className="pageTitle">
        <ion-icon
          class="icon-title"
          src="assets/img/svg/heroCardBlue.svg"
        ></ion-icon>
      </div>
    </div>
  );
}

export default CardHeader;
