import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-scroll";
import "./FindCircle3.css";
import Menu from "../Menu";

function FindCircle3(props) {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const [muted, setMuted] = useState(true);

  const playVideo = (id) => {
    var v = document.getElementById(id);
    if (v.paused) {
      v.play();
      setMuted(false)
    } else {
      v.pause();
      setMuted(true)
    }
  };
  return (
    <div id="findcircle3" className="circle-feed-container">
      <div
        className="feed"
        style={{ minHeight: "90vh!important", height: "104vh" }}
      >
        <div className="feed-content">
          <div className="p-t-h">
            <img
              src={"assets/img/heroLogoWhite.png"}
              alt="logo"
              className="logo mt-4"
            />
            <a
              className={"headerButton menuBtn mt-4 mb-4"}
              onClick={() => setShowMenu(true)}
            >
              <ion-icon name="menu-outline" class="menuBtnIcon"></ion-icon>
            </a>
          </div>
          <div className="mt-4 flex-center flex-col">
            <button
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-2 mb-4 "
              onClick={() => history.push("/circle-feed")}
            >
              <ion-icon src="assets/img/svg/icon2.svg"></ion-icon>
              Fund a HERO Circle
            </button>
          </div>
          <div className="feed2" style={{ minHeight: "90vh!important" }}>
            <video preLoad="none" playsInline id="2"   muted={muted} poster="assets/img/C0502 1.png">
            <source
              src={"assets/videos/" + "howHeroWorks.mp4"}
              type="video/mp4"
            />
            </video>
            <div className="bottom mt-4 flex-col">
            <button
              id="whiteBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mb-2"
            >
              <Link
                to="findCircle4"
                spy={true}
                smooth={true}
                offset={30}
                duration={500}
              >
                <text className="learnMore">
                  Learn about the impact of mobilizers
                </text>
              </Link>
            </button>
          
          </div>
          </div>
          <button
            type="button"
            className="btn btn-primary rounded play-btn buttonplay"
            onClick={() => playVideo(2)}>
            {muted && <ion-icon name="play" class="m-0"></ion-icon>}
            {!muted && <ion-icon name="pause" class="m-0"></ion-icon>}
            </button>

         
        </div>
      </div>
      <Menu show={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}

export default FindCircle3;
