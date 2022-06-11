import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import VoteCapsule from "../components/VoteCapsule";
import CardBottomMenu from "../components/CardBottomMenu";

function Vote(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn/>
      <VoteCapsule />
      <CardBottomMenu />
    </>
  );
}

export default withRouter(Vote);