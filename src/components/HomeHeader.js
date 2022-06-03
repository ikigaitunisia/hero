import React from "react";
import { withRouter } from "react-router-dom";

function HomeHeader(props) {
  return (
    <div className="appHeader bg-primary text-light">
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
        <img src="assets/img/heroLogo.png" alt="logo" className="logo" />
      </div>
      <div class="right">
        <a href="app-login.html" class="headerButton">
          Login
        </a>
      </div>
    </div>
  );
}

export default withRouter(HomeHeader);
