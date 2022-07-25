import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import "./Home.css";

function Home(props) {
  const history = useHistory();
  const join = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user)
    if (user == null) {
      history.push("/Login");
    } else {
      history.push("/mobilizer-feed");
    }
  };
  return (
    <>
      <div class="appHeader no-border transparent position-absolute">
        <div class="left"></div>
        <div class="pageTitle"></div>
        <div class="right"></div>
      </div>

      <div id="appCapsule" className="home">
        <img
          src={"assets/img/HEROLogoBlue.png"}
          alt="logo"
          className="logo home-logo"
        />
        <p className="m-4 home-text">
          Welcome to the first global
          <br /> community where supporters and
          <br /> mobilizers unite for climate action.
        </p>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg rounded"
          onClick={join}
        >
          TAP TO JOIN
        </button>
      </div>
    </>
  );
}

export default withRouter(Home);
