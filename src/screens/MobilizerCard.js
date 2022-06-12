import React from "react";
import { withRouter } from "react-router-dom";
import MobilizerCardCapsule from "../components/MobilizerCardCapsule";
import Header from "../components/Header";
import MobilizerCardBottomMenu from "../components/MobilizerCardBottomButton";

function MobilizerCard(props) {
  return (
    <>
      <Header showLogo showMenuBtn />
      <MobilizerCardCapsule />
      <MobilizerCardBottomMenu />
    </>
  );
}

export default withRouter(MobilizerCard);
