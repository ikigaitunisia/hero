import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SearchForHeroCircle from "../components/SearchForHeroCircle";
import "./Home.css";

function Home(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn />

      <div id="appCapsule" class="home-container">
        <SearchForHeroCircle />

        <h3 className="mt-4">
          Find your HERO Circle and support
          <br /> mobilizers with the most impact
          <br /> on policy today.
        </h3>

        <div id="list-activist" className="mt-4 mb-1">
          <div id="activist1">
            <img
              src="assets/img/activist1.png"
              alt="image"
              className="imaged w100 rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Home);
