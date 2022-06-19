import React, { useState,useEffect } from "react";
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
  const [loggedin,setLogedin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user != null) {
      setLogedin(true);
    } 
  }, []);
  const logout = () => {
    localStorage.removeItem('user');
    history.push("/");

  }
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
          {showLoginBtn && (
             !loggedin ?
            <a
              onClick={() => history.push("/login")}
              className="headerButton"
              style={whiteMode ? { color: "white" } : {}}
            >
              Login
            </a> :
            <a
            onClick={() => logout()}
            className="headerButton"
            style={whiteMode ? { color: "white" } : {}}
          >
            Logout
          </a> 
           
          )}

          {showCloseBtn && (
          
            <a
              className="headerButton goBack"
              style={whiteMode ? { color: "white" } : {}}
             onClick ={() => history.push(history.goBack())}
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
