import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Search from "../components/Search";
import "./MobilizerFeed.css";
import BottomMenu from "../components/BottomMenu";

function ListSupporter(props) {
  const history = useHistory();
  const mobilizers = [
    {
      name: "anunadewever",
      description: "Anuna de Wever",
      image: "mobilizer1.png",
    },
    {
      name: "vanessanakate",
      description: "Vanessa Nakate",
      image: "mobilizer2.png",
    },
    {
      name: "jessicakleczka",
      description: "Jessica Kleczka",
      image: "mobilizer3.png",
    },
    {
      name: "juansierra",
      description: "Juan Sierra",
      image: "mobilizer4.png",
    },
    {
      name: "nickibecker",
      description: "Nicki Becker",
      image: "mobilizer5.png",
    },
    {
      name: "adelaidecharlier",
      description: "Adelaide Charlier",
      image: "mobilizer6.png",
    },
    {
      name: "elijahmckenzie",
      description: "Elijah Mckenzie",
      image: "mobilizer7.png",
    },
  ];
  return (
    <>
      <Header showHeroLogo showMenuBtn showBackBtn transparent={false} />
      <div id="appCapsule" className="mobilzerfeed-container">
        <Search placeholder="Search for a HERO Mobilizer"/>
        <hr className="hr mt-4 mb-4" />
        <div className="section">
          <ul class="listview image-listview transparent flush">
            {mobilizers.map((elt) => (
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
                      Join Circle
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
