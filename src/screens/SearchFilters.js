import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SearchForHeroCircle from "../components/SearchForHeroCircle";
import "./Home.css";

function SearchFilters(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn />

      <div id="appCapsule" class="home-container">
        <SearchForHeroCircle />
      </div>
    </>
  );
}

export default withRouter(SearchFilters);
