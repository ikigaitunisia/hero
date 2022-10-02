import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import "./FindCircle5.css";
import Menu from "../Menu";


function FindCircle5(props) {
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div id="findCircle5">
      <div className="" style={{ minHeight: "90vh!important" }}>
        <div className="">
          <div className="p-t-h">
            <img
              src={"assets/img/heroLogoWhite.png"}
              alt="logo"
              className="logo mt-4"
            />
            <a  className={"headerButton menuBtn mt-4 mb-4"} onClick={() => setShowMenu(true)}>
              <ion-icon name="menu-outline" class="menuBtnIcon"></ion-icon>
            </a>
          </div>
          <div className="mt-4 flex-center flex-col">
            <h3 className="white">
              In the words of <br />
              <b>HERO Supporters</b>
            </h3>
            <button
              id="whiteBlueBtn"
              type="button"
              className="btn btn-primary rounded font-size-btn mt-4 mb-4 "
              onClick={() => history.push("/circle-feed")}
            >
              <ion-icon src="assets/img/svg/icon3.svg"></ion-icon>
              Fund a HERO Circle
            </button>
          </div>
          <div className="section flex-center mt-4 flex-col">
            <div className="card border-blue mb-3">
              <div className="card-body flex-center flex-col">
                <img
                  src="assets/img/image5.png"
                  alt="image"
                  className="imaged w48 rounded"
                />
                <span className="blue">Esther Rimmelink</span>
                <small className="blue mb-2">Amsterdam, Netherlands</small>
                <p className="blue">
                  “I wanted to do more for climate, but I just
                  <br /> didn’t know how. HERO has allowed me to 
                  <br /> act in a super effective way on climate.”
                </p>
              </div>
            </div>
            <div className="card border-blue mb-3">
              <div className="card-body flex-center flex-col">
                <img
                  src="assets/img/Anne_Flore_lepeu.jpeg"
                  alt="image"
                  className="imaged w48 rounded"
                />
                <span className="blue">Anne-Flore Lepeu</span>
                <small className="blue mb-2">Bordeaux, France</small>
                <p className="blue">
                  “Having real time reports on the policies
                  <br /> impacted by the HERO Circle I support is
                  <br /> amazing, it makes me feel part of change.”
                </p>
              </div>
            </div>
            <div className="card border-blue mb-3" style={{width:300}}>
              <div className="card-body flex-center flex-col">
                <img
                  src="assets/img/Leo.jpeg"
                  alt="image"
                  className="imaged w48 rounded"
                />
                <span className="blue">Horn-Phathanothai</span>
                <small className="blue mb-2">London, UK</small>
                <p className="blue">
                  “These are the brave pioneers clearing a new path to a brighter, fairer future, in balance with nature action;
                  <br /> Mobilisers create political space and unstoppable pressure for bold climate  
                  <br /> they deserve our full support, and more than that, our partnership.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Menu show={showMenu} onClose={() => setShowMenu(false)} />
    </div>
  );
}

export default FindCircle5;
