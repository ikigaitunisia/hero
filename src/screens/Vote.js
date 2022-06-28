import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import VoteCapsule from "../components/VoteCapsule";
import BottomMenu from "../components/BottomMenu";

function Vote(props) {
  return (
    <>
      <Header whiteMode showLogo showMenuBtn />
      <VoteCapsule />
      <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="vote" />
    </>
  );
}

export default withRouter(Vote);
