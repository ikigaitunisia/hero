import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import SearchForHeroCircle from "../components/SearchForHeroCircle";
import "./SearchFilters.css";
import { useHistory } from "react-router-dom";

function SearchFilters(props) {
  const history = useHistory();
  return (
    <>
      <Header whiteMode showLogo showMenuBtn showLoginBtn />

      <div id="appCapsule" class="serach-filters-container">
        <SearchForHeroCircle />
        <div id="filters" className="row">
          <div id="mobilizer-filter" className="col-12">
            <img
              src="assets/img/mobilizer.png"
              alt="logo"
              className="logo mb-1"
              onClick={() => history.push("/feed")}
            />
          </div>
          <div id="scope-filter" className="col-12">
            <img
              src="assets/img/scope.png"
              alt="logo"
              className="logo mb-1"
            />
          </div>
          <div id="region-filter" className="col-12">
            <img
              src="assets/img/region.png"
              alt="logo"
              className="logo mb-1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(SearchFilters);
