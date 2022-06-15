import React from "react";
import { withRouter } from "react-router-dom";
import BottomMenu from "../components/BottomMenu";
import CardCapsule from "../components/CardCapsule";
import Header from "../components/Header";

function Card(props) {
  return (
    <>
      <Header showLogo showMenuBtn />
      <CardCapsule />
      <BottomMenu showFeedBtn showCardBtn showVoteBtn activeItem="card" />
    </>
  );
}

export default withRouter(Card);
