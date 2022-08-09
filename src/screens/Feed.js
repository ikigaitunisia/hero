import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SearchForHeroCircle from "../components/SearchForHeroCircle";
import "./Feed.css";

function Feed(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn />

      <div id="appCapsule" className="feed-container">
        <SearchForHeroCircle />
        <h3 className="mt-4 blue">
          Support HERO Mobilizers with a <br />
          verified track record on climate action.
        </h3>
        <a href="#" className="discover">
          Discover how HERO Mobilizers are verified
        </a>
        <div className="row mt-4">
          <div className="col-6">
            <div id="activist1" className="mb-4">
              <img
                src="assets/img/logoWhite.png"
                alt="logo"
                className="logo mb-1"
              />
              <small>Anuna de Wever</small>
              <small>Belgium</small>
            </div>
          </div>
          <div className="col-6">
            <div id="activist2" className="mb-4">
              <img
                src="assets/img/logoWhite.png"
                alt="logo"
                className="logo mb-1"
              />
              <small>Jessica Klezcka</small>
              <small>UK</small>
            </div>
          </div>
          <div className="col-6">
            <div id="activist1" className="mb-4">
              <img
                src="assets/img/logoWhite.png"
                alt="logo"
                className="logo mb-1"
              />
              <small>Anuna de Wever</small>
              <small>Belgium</small>
            </div>
          </div>
          <div className="col-6">
            <div id="activist2" className="mb-4">
              <img
                src="assets/img/logoWhite.png"
                alt="logo"
                className="logo mb-1"
              />
              <small>Jessica Klezcka</small>
              <small>UK</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Feed);
