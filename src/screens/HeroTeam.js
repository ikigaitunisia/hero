import React from "react";
import { withRouter } from "react-router-dom";
import HeroTeamCapsule from "../components/HeroTeamCapsule";
import Header from "../components/Header";

function HeroTeam(props) {
  return (
    <>
      <Header showLogo showMenuBtn />
      <HeroTeamCapsule />
    </>
  );
}

export default withRouter(HeroTeam);
