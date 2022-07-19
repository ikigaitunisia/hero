import React from "react";
import { withRouter } from "react-router-dom";
import "./MobilizerFeed.css";
import Logo from "../Assets/LogowithText.svg"
import midLogo from "../Assets/MidLogo.svg"
function MobilizerClub(props) {
  console.log("hola")
  return (<div id="MobilizerClubProfile">



  <nav className="mt-5 navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">
  <img src={Logo} />
  </a>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon">

    </span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
  </nav>
  






  <div className="container my-auto f-flex flex-column">
    <img className="mb-3" src={midLogo} />
    <p className="mx-auto mb-3">Join <b>Anuna's Club</b> to support
    her climate work and gain access
    to exclusive content.</p>
    <b className="bd-bold-text">See Club Memberships</b><br/>
    <button className="btn-mb mt-4">See Club Memberships</button>
  </div>






  </div>);
}

export default withRouter(MobilizerClub);
