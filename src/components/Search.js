import React from "react";
import { useHistory } from "react-router-dom";
import "./Search.css";

function Search(props) {
  const history = useHistory();
  return (
    <div className="extraHeader2 pt-3">
      <form className="search-form pe-4 pl-4">
        <div className="form-group searchbox">
          <input
            type="text"
            className="form-control"
            placeholder={props.placeholder}
          />
          <i class="input-icon">
            <ion-icon name="search-outline"></ion-icon>
          </i>
        </div>
      </form>
      <div className="flex-center flex-row">
        <div className="flex-center me-2">
          <small>Filter by</small>
        </div>
        <div className="flex-center me-2">
          <small>Scope</small>
          <img
            src="assets/img/scope.png"
            alt="logo"
            className="logo mb-1 ml-1"
            style={{ width: "30px" }}
          />
        </div>
        <div className="flex-center">
          <small>Region</small>
          <img
            src="assets/img/region.png"
            alt="logo"
            className="logo mb-1 ml-1"
            style={{ width: "30px" }}
          />
        </div>
      </div>

    </div>
  );
}

export default Search;
