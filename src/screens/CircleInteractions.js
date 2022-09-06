import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import { withRouter } from "react-router-dom";
import "./CircleInteractions.css";

function CircleInteractions(props) {
  const history = useHistory();

  return (
    <>
      <Header
        showTitlePage
        title={"Circle Interactions"}
        showBackBtn
        showMenuBtn
        transparent
        whiteMode
        backTo={"/circle-home"}
      />
      <div id="appCapsule" className="circle-interactions">
        <div className="mt-4">
          <ion-icon
            src="assets/img/svg/icon24.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-updates")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon16.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-videos")}
          ></ion-icon>
          <ion-icon
            src="assets/img/svg/icon23.svg"
            class="mb-2 icon-btn me-2"
            onClick={() => history.push("/circle-interactions")}
          ></ion-icon>
        </div>
        <div className="section mt-2">
          <div className="card"></div>
        </div>
      </div>
    </>
  );
}

export default withRouter(CircleInteractions);
