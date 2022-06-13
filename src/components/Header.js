import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Menu from "./Menu";

function Header(props) {
  const whiteMode = props.whiteMode;
  const showMenuBtn = props.showMenuBtn;
  const showLoginBtn = props.showLoginBtn;
  const showCloseBtn = props.showCloseBtn;
  const showLogo = props.showLogo;
  const showBackBtn = props.showBackBtn;
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="appHeader no-border transparent position-absolute">
        <div className="left">
          {showMenuBtn && (
            <a
              href="#"
              className="headerButton"
              onClick={() => setShowMenu(true)}
              style={whiteMode ? { color: "white" } : {}}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </a>
          )}
          {showBackBtn && (
            <a
              href="#"
              className="headerButton"
              data-bs-toggle="modal"
              data-bs-target="#sidebarPanel"
              style={whiteMode ? { color: "white" } : {}}
            >
              <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
          )}
        </div>
        <div className="pageTitle">
          {showLogo && (
            <img
              src={
                whiteMode
                  ? "assets/img/HEROLogo.png"
                  : "assets/img/HEROLogoBlue.png"
              }
              alt="logo"
              className="logo"
            />
          )}
        </div>
        <div className="right">
          {showLoginBtn && (
            <a
              onClick={() => history.push("/login")}
              className="headerButton"
              style={whiteMode ? { color: "white" } : {}}
            >
              Login
            </a>
          )}

          {showCloseBtn && (
            <a
              href="#"
              className="headerButton goBack"
              style={whiteMode ? { color: "white" } : {}}
            >
              <ion-icon name="close"></ion-icon>
            </a>
          )}
        </div>
      </div>
      <Menu show={showMenu} onClose={() => setShowMenu(false)} />
    </>
  );
}

export default Header;
