import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SearchForHeroCircle from "../components/SearchForHeroCircle";
import "./SearchFilters.css";

function SearchFilters(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn />

      <div id="appCapsule" class="serach-filters-container">
        <SearchForHeroCircle />
        <div className="row">
          <div id="mobilizer-filter" className="col-12"></div>
          <div id="scope-filter" className="col-12"></div>
          <div id="region-filter" className="col-12"></div>
        </div>
      </div>
    </>
  );
}

export default withRouter(SearchFilters);
