import React from "react";
import "./CardCapsule.css";

function CardTransactionHeader(props) {
  return (
    <div className="appHeader no-border transparent position-absolute">
      <div className="right">
        <a href="#" className="headerButton goBack" style={{ color: "white" }}>
          <ion-icon name="close"></ion-icon>
        </a>
      </div>
    </div>
  );
}

export default CardTransactionHeader;
