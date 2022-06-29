import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Menu from "./Menu";
import "./Header.css";

function Header(props) {
  const whiteMode = props.whiteMode;
  const showMenuBtn = props.showMenuBtn;
  const showLoginBtn = props.showLoginBtn;
  const showCloseBtn = props.showCloseBtn;
  const showLogo = props.showLogo;
  const showBackBtn = props.showBackBtn;
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [loggedin, setLogedin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setLogedin(true);
    }
  }, []);
  const closeB = () => {
    history.push(history.goBack());
  };
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };

  const colorClass = whiteMode ? "white-text" : "blue-text";
  return (
    <>
      <div className="appHeader no-border transparent position-absolute">
        <div className="left">
          {loggedin && showMenuBtn && (
            <a
              href="#"
              className={"headerButton " + colorClass}
              onClick={() => setShowMenu(true)}
            >
              <ion-icon name="menu-outline"></ion-icon>
            </a>
          )}
          {showBackBtn && (
            <a
              href="#"
              className={"headerButton " + colorClass}
              data-bs-toggle="modal"
              data-bs-target="#sidebarPanel"
              onClick={() => history.push("/")}
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
                  ? "assets/img/heroLogo.png"
                  : "assets/img/HEROLogoBlue.png"
              }
              alt="logo"
              className="logo"
              onClick={() => history.push("/")}
            />
          )}
        </div>
        <div className="right">
          {showLoginBtn &&
            (!loggedin ? (
              <a
                onClick={() => history.push("/login")}
                className={"headerButton headerCustomBtn " + colorClass}
              >
                Login
              </a>
            ) : (
              <a
                onClick={() => logout()}
                className={"headerButton headerCustomBtn " + colorClass}
              >
                Logout
              </a>
            ))}

          {showCloseBtn && (
            <a
              className={"headerButton goBack " + colorClass}
              onClick={() => closeB()}
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
