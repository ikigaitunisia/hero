import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./FindCircle11.css";
import FindCirle2 from "./FindCircle2";
import Menu from "../Menu";
import { Link } from "react-scroll";
import "./FindCircle1.css";

function FindCircle11(props) {
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
    <div id="findcircle11">
      <div style={{ minHeight: "90vh!important" }}>
        <div className="">
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
          <div className="m-4 flex-center flex-col" >
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4"
              onClick={() => history.push("/circle-feed")}
            >
              <ion-icon src="assets/img/svg/icon3.svg"></ion-icon>
              Fund a HERO Circle
            </button>
          </div>

          <div className="section flex-center flex-col">
            <h4 className="mt-3 white">
              Do you want to do more
              <br /> for the climate but you
              <br /> don’t know how?
            </h4>
            <p className="white">
              Citizens around the world have a<br /> new way to effectively act
              on
              <br /> climate policy.
            </p>
          </div>
          <div className=" mt-4 flex-col mb-4 mt-4"
         
          >
            <button
              id="whiteLightBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-4"
            >
              <Link
                to="findcircle2"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <text style={{ color: "#8585FF" }}>Learn more about HERO</text>
              </Link>
            </button>
            <Link
              to="findcircle2"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <small className="white">Scroll Down</small>{" "}
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

export default FindCircle11;
