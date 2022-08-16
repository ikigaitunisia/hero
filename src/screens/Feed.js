import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SearchForHeroCircle from "../components/SearchForHeroCircle";
import "./Feed.css";
import { useHistory } from "react-router-dom";

function Feed(props) {
  const history = useHistory();
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn transparent/>

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
              <span>Anuna de Wever</span>
              <small>Belgium</small>
            </div>
          </div>
          <div className="col-6">
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
              <span>Jessica Klezcka</span>
              <small>UK</small>
            </div>
          </div>
          <div className="col-6">
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
              <span>Anuna de Wever</span>
              <small>Belgium</small>
            </div>
          </div>
          <div className="col-6">
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
              <span>Jessica Klezcka</span>
              <small>UK</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Feed);
