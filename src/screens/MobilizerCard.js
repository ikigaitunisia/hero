import React from "react";
import { withRouter } from "react-router-dom";
import MobilizerCardCapsule from "../components/MobilizerCardCapsule";
import Header from "../components/Header";
import BottomMenu from "../components/BottomMenu";

function MobilizerCard(props) {
  return (
    <>
      <Header showLogo showMenuBtn />
      <MobilizerCardCapsule />
      <BottomMenu showCardBtn showVoteBtn activeItem="card"/>
    </>
  );
}

export default withRouter(MobilizerCard);
