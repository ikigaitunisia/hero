import React from "react";

function SearchForHeroCircle(props) {

  return (
    <div className="extraHeader1 pt-3">
        <form className="search-form pe-4 pl-4">
            <div className="form-group searchbox">
                <input type="text" className="form-control" placeholder="Search for a HERO Circle"/>
                <i class="input-icon">
                    <ion-icon name="search-outline"></ion-icon>
                </i>
            </div>
        </form>
        <a href="#" className="mb-4">Browse by Mobilizer, Scope or Region</a>
    </div>
  );
}

export default SearchForHeroCircle;
