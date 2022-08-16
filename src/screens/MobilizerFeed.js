import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import "./MobilizerFeed.css";

function MobilizerFeed(props) {
  const history = useHistory();
  const circles = [
    {
      name: "circle1",
      description: "HERO Circle 1",
      image: "activist1.png",
    },
    {
      name: "circle2",
      description: "HERO Circle 2",
      image: "activist2.png",
    },
    {
      name: "circle3",
      description: "HERO Circle 3",
      image: "activist3.png",
    },
  ];
  return (
    <>
      <Header showHeroLogo showMenuBtn showBackBtn transparent={false} />
      <div id="appCapsule" className="mobilzerfeed-container">
        <Search placeholder="Search for a HERO Mobilizer" />
        <hr className="hr mt-4 mb-4" />
        <div className="section">
          <ul class="listview image-listview transparent flush">
            {circles.map((elt) => (
              <li>
                <div class="item">
                  <img
                    src={"assets/img/" + elt.image}
                    alt="image"
                    class="image"
                  />
                  <div className="in">
                    <div
                      className="flex-col"
                      style={{ alignItems: "flex-start" }}
                    >
                      <strong>{elt.name} <ion-icon src="assets/img/svg/ok.svg"></ion-icon></strong> <p>{elt.description}</p>
                    </div>

                    <button
                      id="joinCircleBtn"
                      type="button"
                      className="btn btn-primary rounded font-size-btn"
                    >
                      Join this circle
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default withRouter(MobilizerFeed);
