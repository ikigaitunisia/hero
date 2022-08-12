import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SearchForHeroCircle from "../components/SearchForHeroCircle";
import "./Home.css";
import { useHistory } from "react-router-dom";

function Home(props) {
  const history = useHistory();
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
          <div
            id="activist1"
            className="mb-4"
            onClick={() => history.push("/mobilizer-profile")}
          >
            <img
              src="assets/img/logoWhite.png"
              alt="logo"
              className="logo mb-1"
            />
            <small>
              Close Coal Mines
              <br /> in Europe
            </small>
          </div>
          <div
            id="activist2"
            className="mb-4"
            onClick={() => history.push("/mobilizer-profile")}
          >
            <img
              src="assets/img/logoWhite.png"
              alt="logo"
              className="logo mb-1"
            />
            <small>
              Stop New Oil
              <br /> Fields UK
            </small>
          </div>
          <div
            id="activist3"
            className="mb-4"
            onClick={() => history.push("/mobilizer-profile")}
          >
            <img
              src="assets/img/logoWhite.png"
              alt="logo"
              className="logo mb-1"
            />
            <small>
              Bogotá Clean
              <br /> Transportation
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Home);
