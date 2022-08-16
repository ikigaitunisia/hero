import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import Header from "../components/Header";
import Search from "../components/Search";
import "./MobilizerFeed.css";

function ListSupporter(props) {
  const history = useHistory();
  const supporters = [
    {
      name: "supporter1",
      description: "Supporter 1",
      image: "supporter1.png",
    },
    {
      name: "supporter2",
      description: "Supporter 2",
      image: "supporter2.png",
    },
    {
      name: "supporter3",
      description: "Supporter 3",
      image: "supporter3.png",
    },
    {
      name: "supporter4",
      description: "Supporter 4",
      image: "supporter4.png",
    },
    {
      name: "supporter5",
      description: "Supporter 5",
      image: "supporter5.png",
    },
    {
      name: "supporter6",
      description: "Supporter 6",
      image: "supporter6.png",
    },
    {
      name: "supporter7",
      description: "Supporter 7",
      image: "supporter7.png",
    },
  ];
  return (
    <>
      <Header showHeroLogo showMenuBtn showBackBtn transparent={false} />
      <div id="appCapsule" className="mobilzerfeed-container">
        <Search placeholder="Search for a HERO Supporter" />
        <hr className="hr mt-4 mb-4" />
        <div className="section">
          <ul class="listview image-listview transparent flush">
            {supporters.map((elt) => (
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
                      <strong>
                        {elt.name} <ion-icon src="assets/img/svg/ok.svg"></ion-icon>
                      </strong>{" "}
                      <p>{elt.description}</p>
                    </div>

                    <button
                      id="joinCircleBtn"
                      type="button"
                      className="btn btn-primary rounded font-size-btn"
                    >
                      connect
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomMenu showFeedBtn showCardBtn showVoteBtn/>
    </>
  );
}

export default withRouter(ListSupporter);
