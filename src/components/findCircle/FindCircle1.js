import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./FindCircle1.css";
import FindCirle2 from "./FindCircle2";
import Menu from "../Menu";
import { Link } from "react-scroll";

function FindCircle1(props) {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [loggedin, setLogedin] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    if (user != null) {
      setLogedin(true);
    }
  }, []);
  const playVideo = (id) => {
    var v = document.getElementById(id);
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };
  const logout = () => {
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <div id="findcircle1">
      <div className="feed" style={{ minHeight: "90vh!important" }}>
        <video playsInline autoPlay muted id="1">
          <source
            src={"assets/videos/" + "short-video-for-test.mp4"}
            type="video/mp4"
          />
        </video>
        <div className="feed-content">
          <div className="p-t-h">
            <img
              src={"assets/img/heroLogoWhite.png"}
              alt="logo"
              className="logo mt-4"
            />
            <a
              href="#"
              className={"headerButton menuBtn mt-4 mb-4"}
              onClick={() => setShowMenu(true)}
            >
              <ion-icon name="menu-outline" class="menuBtnIcon"></ion-icon>
            </a>
          </div>
          <div className="m-4 flex-col">
            <h2 className="white">
              <b>Support climate mobilizers,</b>
              <br /> accelerate change.
            </h2>
            <button
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4"
              onClick={() => history.push("/circle-feed")}
            >
              <ion-icon src="assets/img/svg/icon2.svg"></ion-icon>
              Fund a HERO Circle
            </button>
          </div>

          <button
            type="button"
            className="btn btn-primary rounded play-btn"
            onClick={() => playVideo(1)}
          >
            <ion-icon name="play" class="m-0"></ion-icon>
          </button>

          <div className="bottom mt-4 flex-col">
            <a
              href=""
              className="white mb-4 login-link"
              onClick={loggedin ? logout : () => history.push("/login")}
            >
              {loggedin ? "Logout" : "Log in"}
            </a>
            <button
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              <ion-icon src="assets/img/svg/icon1.svg"></ion-icon>
              <Link
                to="findcircle2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <text className="learnMore">Learn more about HERO</text>
              </Link>
            </button>
            <Link
              to="findcircle2"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <small>Scroll Down</small>
            </Link>
            <Link
              to="findcircle2"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <ion-icon
                src="assets/img/svg/scroll-down.svg"
                style={{ width: "18px", height: "26px" }}
              ></ion-icon>
            </Link>
          </div>
        </div>
      </div>
      <Menu show={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}

export default FindCircle1;
