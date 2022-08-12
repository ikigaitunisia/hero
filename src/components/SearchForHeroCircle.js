import React from "react";
import { useHistory } from "react-router-dom";

function SearchForHeroCircle(props) {
  const history = useHistory();
  return (
    <div className="extraHeader1 pt-3">
      <form className="search-form pe-4 pl-4">
        <div className="form-group searchbox">
          <input
            type="text"
            className="form-control"
            placeholder="Search for a HERO Circle"
          />
          <i class="input-icon">
            <ion-icon name="search-outline"></ion-icon>
          </i>
        </div>
      </form>
      <a
        href="#"
        className="mb-4"
        onClick={() => history.push("/search-filters")}
      >
        Browse by Mobilizer, Scope or Region
      </a>
    </div>
  );
}

export default SearchForHeroCircle;
